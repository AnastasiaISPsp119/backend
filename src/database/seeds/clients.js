/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('clients').del()
  await knex('clients').insert([
    {fio: "Хуба Буба Олегович", email: 'booba@gmail.com', password: "booba1"},
    {fio: "Хуба Буба Олегович", email: 'booba2@gmail.com', password: "booba1"},
    {fio: "Хуба Буба Олегович", email: 'booba3@gmail.com', password: "booba1"},
  ]);
};
