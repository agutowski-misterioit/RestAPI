import * as dotenv from "dotenv";
dotenv.config({ debug: true, encoding: 'UTF-8' });

export const api_name = process.env.API_NAME;
export const api_port = process.env.API_PORT;