// lib
import express from "express";
import compression from "compression";
import cors from "cors";
import helmet from "helmet";
import consola from "consola";
import SwaggerUI from "swagger-ui-express";
import SwaggerJsDoc from "swagger-jsdoc";
import { Server } from "socket.io";
import { createServer } from "http";

import ENV from "./utils/env";

import { Mongo } from "./db";

/* Swagger Settings */
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "my next project's backend",
      version: "1.0.0",
      description: "Description for my next project's backend",
    },
    servers: [
      {
        url: "http://localhost:8080",
      },
    ],
  },
  apis: ["./routes/*.ts"],
};

const swaggerSpec = SwaggerJsDoc(swaggerOptions);
/* Swagger Settings */

// api routes
import { Api } from "./routes";
import { WebSocketHandler } from "./ws";

const app: express.Express = express();

// database
new Mongo().connect2DB();

// setting up middlewares
app.use(express.json()); // parsing json
app.use(compression()); // compression response body for better performance
app.use(helmet()); // security
app.use(cors()); // CORS protection

// mapping api routes
app.use("/api", new Api().getRouter());

// api-docs
app.use("/api-docs", SwaggerUI.serve, SwaggerUI.setup(swaggerSpec));

// web sockets
const server = createServer(app);
const io = new Server(server);

new WebSocketHandler(io);

app.listen(ENV.PORT, () => {
  consola.info(`Server rolling on port ${ENV.PORT}`);
});
