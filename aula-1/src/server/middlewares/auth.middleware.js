import jwt from 'jsonwebtoken';
// import { API_SECRET } from '../api/auth.controller.js';

const API_SECRET ='e6ee2fa6c487a45473434a24142c35120efac17a2a78ddf6df35a6bd398ce7c1';

export default function AuthMiddleware(req, res, next) {
    console.log(req.cookies);
    return next();
    try {
        const [, token] = req.cookies?.split(' ') || [null, null];
        if (!token) {
            return res.status(401).json({ error: 'No token, no access' });
        }
        const payload = jwt.verify(token, API_SECRET, { complete: false });

        if (payload == null)
            return res.status(401).json({ error: 'No access, bro!' });

        return next();
    }
    catch (error) {
        return res.status(401).json({ error: 'You shall not pass... auth error!' });
    }
}
