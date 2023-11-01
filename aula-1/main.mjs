import Server from "./src/server/server.js";

const server = new Server({
    port: process.env.PORT || 3000
});

server.start();
