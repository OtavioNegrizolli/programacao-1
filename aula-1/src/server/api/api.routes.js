import { Router } from 'express';
import * as AuthController from './auth.controller.js';
export const apiRouter = Router();

fetch
apiRouter.post('/login', AuthController.Login);
apiRouter.get('', async (_, res) => {
    res.status(400).send('API is up and runnng');
});
