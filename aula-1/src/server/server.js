import cookieParser from 'cookie-parser';
import express from "express";

import MainRouter from "./routes.js";

export default class Server {
    constructor({
        port,
        host,
        protocol
    }) {
        this.host = host || 'localhost';
        this.port = port;
        this.protocol = protocol || 'http';
        this.app = express();
        this.#registerRoutes();
    }
    
    #registerRoutes() {
        this.app.use(express.json());
        this.app.use(cookieParser('super-secret-dont-share'));
        this.app.use(MainRouter);
    }

    start() {
        this.app.listen(this.port, '0.0.0.0', (a) => { 
            // console.clear();
            console.log(`Listening at ${this.protocol}://${this.host}:${this.port}`);
        });
    }
}
