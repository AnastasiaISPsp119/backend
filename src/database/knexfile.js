// Update with your config settings.

require('dotenv').config()

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */


module.exports = {

  development: {
    client: "postgres",
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: "postgres",
      password: process.env.DB_PASSWORD,
      database: "krivko_kp",
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './seeds'
  }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
