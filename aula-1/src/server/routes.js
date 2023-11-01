import express, { Router } from "express";
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { apiRouter } from "./api/api.routes.js";
import RequestLoggerMiddleware from "./middlewares/request-logger.js";

const l = path.resolve(
    path.join(
        path.dirname(fileURLToPath(import.meta.url)),
        '../public'
    )
);

const baseRoutes = Router();
const publicFiles = express.static(l);
baseRoutes.use(RequestLoggerMiddleware);
baseRoutes.use('', publicFiles);
baseRoutes.use('/api', apiRouter);
// baseRoutes.use()


const MainRouter = baseRoutes;

export default MainRouter;
