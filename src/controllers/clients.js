const knex = require("../database/db_config")

const { validationResult } = require("express-validator")

function accessTokenGen() {
   
}

class clientsControler {

   async singUp(req, res) {
      const errors = validationResult(req)
      const { fio, email, phone, password } = req.body
      try {
         if (!errors.isEmpty()) {
            return res.status(400).json({
               message: "Ошибка при регистрации",
               errors
            })
         }
         
         const candidate = await knex("clients").where({ email }).returning("*")
         if (candidate.length != 0) {
            return res.status(400).json({ msg: "Profile already exists" })
         }

         const client = await knex("clients").insert({ fio, email, phone, password }).returning("*")

         return res.status(200).json(client)
      } catch (error) {
         console.log(error)
      }
   }

   async getClients(_, res) {
      try {
         const clients = await knex("clients").select("*")
         if (!clients) {
            return res.send({ Error: "Something went wrong" })
         }

         return res.status(200).send(clients)
      } catch (error) {
         console.log(error)
      }
   }

   async getClient(req, res) {
      const id = req.params.id
      try {
         const client = await knex("clients").where({ id })
         if (!client) {
            return res.json({ Error: "Something went wrong" })
         }

         return res.status(200).json(client)
      } catch (error) {
         console.log(error)
      }
   }

   async requestEmailConfirmation(req, res) {
      // TODO: Generate confirmation code
      const confirmationCode = "0000";

      try {
         const id = req.params.id
         const record = await knex("clients")
            .where({ id });

         if (!record) {
            res.status(401).body({ msg: "Error, user not found" })
         }

         if (record.emailIsConfirmed) {
            res.status(401).body({ msg: "Email is already confirmed" })
         }

         await knex("clients")
            .update({ email_confirmation_code: confirmationCode })
            .where({ id });

         // TODO: Send email

         return { msg: "Hello" };
      } catch (error) {
         console.log(error)
      }
   }
}

module.exports = new clientsControler()