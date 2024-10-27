const http = require("http")
const server = http.createServer((req,res)=>{
    
    res.end("Res from Node HTTP Server")
})
