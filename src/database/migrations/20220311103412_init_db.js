/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
   await knex.schema
      .createTable("clients", table => {
         table.increments("id");
         table.string('fio').notNullable()
         table.string("email").unique().notNullable()
         table.boolean("emailIsConfirmed").notNullable().defaultTo(false)
         table.string("phone")
         table.string("password").notNullable()
         table.string("email_confirmation_code", 6);
         table.enu("role", ["user", "editor", "admin"]).notNullable()
            .defaultTo("user");


         table.timestamps(true, true)
      })

      .createTable("orders", table => {
         table.increments("id");
         table.string("status").notNullable()
         table.string("delivery").notNullable()
      })

      .createTable("products", table => {
         table.increments("id");
         table.string("name").notNullable()
         table.integer("price").notNullable()
         table.string("description").notNullable()
      })

      .createTable("wish_lists", table => {
         table.integer("client_id")
         table.foreign("client_id").references("clients.id").onDelete("restrict").onUpdate("cascade");
         table.integer("product_id")
         table.foreign("product_id").references("products.id").onDelete("restrict").onUpdate("cascade");
      })

      .createTable("clients_orders", table => {
         table.integer("client_id")
         table.foreign("client_id").references("clients.id").onDelete("restrict").onUpdate("cascade");
         table.integer("order_id")
         table.foreign("order_id").references("orders.id").onDelete("restrict").onUpdate("cascade");
      })

      .createTable("products_orders", table => {
         table.integer("order_id")
         table.foreign("order_id").references("orders.id").onDelete("restrict").onUpdate("cascade");
         table.integer("product_id")
         table.foreign("product_id").references("products.id").onDelete("restrict").onUpdate("cascade");
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
   await knex.schema
      .dropTableIfExists("products_orders")
      .dropTableIfExists("wish_lists")
      .dropTableIfExists("clients_orders")
      .dropTableIfExists("clients")
      .dropTableIfExists("products")
      .dropTableIfExists("orders")
};
