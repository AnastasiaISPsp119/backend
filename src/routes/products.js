const express = require("express"),
   router = express.Router()

const productsController = require("../controllers/products")

router.post("/addProduct", productsController.addProduct)

module.exports = router