// lib
import { z } from "zod";
import dotenv from "dotenv";
dotenv.config();

const envSchema = z.object({
  ENV: z.enum(["dev", "prod"]),
  PORT: z.string().nonempty().transform(Number),
  MONGO_URL: z.string().nonempty(),
  ACCESS_TOKEN: z.string().min(64),
  REFRESH_TOKEN: z.string().min(64),
  EXPIRATIONAT: z.string().transform(Number),
});

const ENV: z.infer<typeof envSchema> = envSchema.parse(process.env);

export default ENV;
