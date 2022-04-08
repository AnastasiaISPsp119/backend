/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('products_orders').del()
  await knex('products_orders').insert([
    {order_id: 1, product_id: 1},
  ]);
};
