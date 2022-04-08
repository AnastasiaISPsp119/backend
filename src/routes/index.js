const express = require("express"),
   api = express.Router()

const clientsRouter = require("./clients")
const productsRouter = require("./products")
const ordersRouter = require("./orders")

api.use("/clients", clientsRouter)
api.use("/products", productsRouter)
api.use("/orders", ordersRouter)
/*
api.use("/wish-list", ordersRouter)
api.use("/order-list", ordersRouter)
api.use("/product-list", ordersRouter)
*/

module.exports = api