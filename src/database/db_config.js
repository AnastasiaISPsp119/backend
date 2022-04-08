const knex = require("knex")
const knexfile = require("./knexfile")

const db_config = knex(knexfile.development)

module.exports = db_config