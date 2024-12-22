"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.api_port = exports.api_name = void 0;
const dotenv = require("dotenv");
dotenv.config({ debug: true, encoding: 'UTF-8' });
exports.api_name = process.env.API_NAME;
exports.api_port = process.env.API_PORT;
