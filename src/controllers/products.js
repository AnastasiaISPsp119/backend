const knex = require("../database/db_config")

const { validationResult } = require("express-validator")

class productsController{

   async addProduct(req, res) {
      const errors = validationResult(req)
      const { name, price, description } = req.body
      
      try {
         if (!errors.isEmpty()) {
            return res.status(400).json({
               message: "Ошибка при добавлении продукта",
               errors
            })
         }

         const product = await knex("products").insert({name, price, description}).returning("*")

         return res.status(201).json(product)
      } catch (error) {
         console.log(error)
         return res.status(503).json({message: "Server error"})
      }
   }
}

module.exports = new productsController()