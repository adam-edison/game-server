var date = new Date();
var formattedDate = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
console.log("---");
console.log("[game server start]", formattedDate);
console.log("---");
console.log("Connect to the application in another terminal session:");
console.log("$ docker exec -it game-server bash");
console.log("$ npm run <script>");
console.log("where <script> is listed in package.json");