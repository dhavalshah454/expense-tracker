const Router = require('restify-router').Router
const routers = new Router() 
const expenseRoutes = require('./expense')
routers.add('/expense',expenseRoutes)
module.exports = routers