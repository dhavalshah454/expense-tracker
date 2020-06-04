const Router = require('restify-router').Router
const routers = new Router() 
routers.get('/list',(req,res,next)=>{
    return res.send(200,[{list : "123"}])
})
module.exports = routers