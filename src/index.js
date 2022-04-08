/* 
   All Magic goes here!
   It's kinda cool, ya know?
*/

const express = require("express"),
   server = express()

const apiRouter = require("./routes/index")

const hostname = "localhost",
   port = 8080

server.use(express.json());
server.use("/api", apiRouter);

server.listen(port, hostname, () => {
   console.log("Server is ready to go!")
})
