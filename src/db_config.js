const knex = require("knex")
const knexfile = require("./knexfile")

const db_client = knex(knexfile.development)

module.exports = db_client