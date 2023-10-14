const net = require("http")

const srvr = net.createServer( (req, res) =>{
    if (req === "/"){
        res.write("hello world");
        res.end()
    }
});

srvr.on("connection", (socket) =>{
    console.log("connected")
})

srvr.listen(3000)

console.log("listrening to port 3000")