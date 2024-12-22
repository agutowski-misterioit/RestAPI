import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";

import { api_name, api_port } from "./env.config";
import mainRouter from './mainRouter';

const app = express();

app.use(
    bodyParser.json({ type: 'application/*+json' }),
    bodyParser.urlencoded({ extended: true }),
    express.json(),
    express.urlencoded({ extended: true }),
    cors()
);

app.use('/', mainRouter);

app.use('*', (req,res) => {
    res.status(404).json({'status' : 404});
});

try{
    app.listen(api_port, () => {
        console.log(
            `${api_name} started successfully:`,
            `\x1b[36mhttp://localhost:${api_port}\x1b[0m`
        )
    });
}catch(e){
    console.log(e.message);
}