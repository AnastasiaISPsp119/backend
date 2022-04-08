/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('clients_orders').del()
  await knex('clients_orders').insert([
    {client_id: 1, order_id: 1},
  ]);
};
