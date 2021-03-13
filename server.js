const server = require("http");
const app = require("./app");

server.createServer(app).listen(3000);

console.log("server is on : 3000");
