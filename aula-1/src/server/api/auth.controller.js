import * as bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import Db from './database.js';

export const API_SECRET = process.env.SECRET_KEY || 'e6ee2fa6c487a45473434a24142c35120efac17a2a78ddf6df35a6bd398ce7c1';

export function Login(req, res) {

    const { email, pwd } = req.body;
    
    console.log(req.body);
    if (email == null || pwd == null)
        return res.status(400).json({ error: 'Precisa de usuário e senha, se não, não vai rolar!' });

    try {
        const user = Db.getUser(email);
        console.log(user);
        
        if (user == null || !bcrypt.compareSync(pwd, user.pwd)) {
            return res.status(401).json({ error: 'Usuário e/ou senha inválidos!' });
        }

        const token = jwt.sign(
            { user: email },
            API_SECRET,
            { expiresIn: '1h' }
        );

        let options = {
            maxAge: 1000 * 60 * 60, // expira em 1h
            httpOnly: true, // o js não da página não tem acesso, "for security reasons"
            signed: true
        };
    
        // Set cookie
        res.cookie('cookieName', `Bearer ${token}`, options); // options is optional

        return res.redirect('/home');
    }
    catch (error) {
        return res.status(500).json({ error: 'Hueston, we have a problem!' });
    }
}

export function Register(req, res) {
    return res.write('mamaco');
}
