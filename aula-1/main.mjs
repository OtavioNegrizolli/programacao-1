
// import Server from "./src/server/server.js";

// const server = new Server({
//     port: process.env.PORT || 3000
// });

// server.start();

import * as bcrypt from 'bcrypt';
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds, 'b');
let pwd = 'sopa';
const hash = bcrypt.hashSync(pwd, salt);

console.log(salt);
console.log(hash);
