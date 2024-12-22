"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const env_config_1 = require("./env.config");
const mainRouter_1 = require("./mainRouter");
const app = express();
app.use(bodyParser.json({ type: 'application/*+json' }), bodyParser.urlencoded({ extended: true }), express.json(), express.urlencoded({ extended: true }), cors());
app.use('/', mainRouter_1.default);
app.use('*', (req, res) => {
    res.status(404).json({ 'status': 404 });
});
try {
    app.listen(env_config_1.api_port, () => {
        console.log(`${env_config_1.api_name} started successfully:`, `\x1b[36mhttp://localhost:${env_config_1.api_port}\x1b[0m`);
    });
}
catch (e) {
    console.log(e.message);
}
