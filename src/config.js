import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 4000;
export const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost/notesdb";
export const MONGOHOST = process.env.MONGOHOST || "mongodb://localhost/notesdb";
export const MONGOPASSWORD = process.env.MONGOPASSWORD || "";
export const MONGOPORT = process.env.MONGOPORT || "";
export const MONGOUSER = process.env.MONGOUSER || "";
