const { check } = require("express-validator"),
   express = require("express"),
   router = express.Router()

const clientsController = require("../controllers/clients")

// TODO: write controller for clients
router.get("/getClients", clientsController.getClients)
router.get("/getClient/:id", clientsController.getClient)
router.post("/singUp",
   check("fio", "Имя пользователя должно быть введено").notEmpty(),
   check("email", "Почта должна быть заполнена").notEmpty(),
   check("password", "Пароль должен быть большей 4-х символов").isLength(4),
   clientsController.singUp)


module.exports = router