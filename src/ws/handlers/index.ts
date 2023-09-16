// lib
import { Socket } from "socket.io";

// event handlers
import { handler } from "./connection";

export type EventHandler = {
  eventName: string;
  eventHandler: (socket: Socket) => void;
};

export const eventHandlers: EventHandler[] = [
  // on connection
  {
    eventName: "connection",
    eventHandler: handler,
  },
];
