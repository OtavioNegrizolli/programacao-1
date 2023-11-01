import * as bcrypt from 'bcrypt';
import Db from './database.js';
import jwt from 'jsonwebtoken';

export const API_SECRET = process.env.SECRET_KEY || 'e6ee2fa6c487a45473434a24142c35120efac17a2a78ddf6df35a6bd398ce7c1';

export async function Login(req, res) {

    const { login, pwd } = req.body;

    if (login == null || pwd == null)
        return res.status(400).json({ error: 'Precisa de usuário e senha, se não, não vai rolar!' });

    try {
        const user = Db.getUser(login);
        
        if (user && bcrypt.compare(pwd, user.pwd)) {
            return res.status(401).json({ error: 'Usuário e/ou senha inválidos!' });
        }

        const token = jwt.sign(
            { user: login },
            API_SECRET,
            { expiresIn: '1h' }
        );
        
        let options = {
            maxAge: 1000 * 60 * 15, // would expire after 15 minutes
            httpOnly: true, // The cookie only accessible by the web server
            signed: true // Indicates if the cookie should be signed
        }
    
        // Set cookie
        res.cookie('cookieName', 'cookieValue', options) // options is optional
        res.send('');

        return res.status(200).json({ token: `Beater ${token}`, message: "You're in!" })
    }
    catch (error) {
        return res.status(500).json({ error: 'Hueston, we have a problem!' });
    }
}

export function Register(req, res) {
    return res.write('mamaco');
}
