import jwt from 'jsonwebtoken';
import { API_SECRET } from '../api/auth.controller.js';


export default function AuthMiddleware(req, res, next) {
    try {
        const [, token] = req.headers.authorization?.split(' ') || [null, null];
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
