/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('wish_lists').del()
  await knex('wish_lists').insert([
    {client_id: 1, product_id: 1}
  ]);
};
