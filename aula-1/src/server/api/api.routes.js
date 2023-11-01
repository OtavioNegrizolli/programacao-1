import { Router } from 'express';

export const apiRouter = Router();


apiRouter.get('', async (_, res) => {
    res.status(400).send('API is up and runnng');
});
