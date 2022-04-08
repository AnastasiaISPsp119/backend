const express = require("express"),
   router = express.Router()


router.get("/get", (_, res) => {
   return res.send({ message: "orders" })
})


module.exports = router