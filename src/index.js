const restify = require('restify')
const server = restify.createServer({
    name: 'Expense Tracker',
    version: '0.0.1'
})
server.get("/health",(req,res,next)=>{
    res.send("Server is healthy")
})

server.get("/",(req,res,next)=>{
    res.send("Server is running")
})

const routes = require('./routes')
routes.applyRoutes(server)

server.listen(8080)

exports.default = server