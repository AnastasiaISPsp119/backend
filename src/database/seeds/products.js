/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('products').del()
  await knex('products').insert([
    {name: 'Лак', price: 213, description: "Крутой лак, так сказать"},
    {name: 'Фреза', price: 519, description: "Снимает лак... а что вы ожидали услышать?"},
    {name: 'Лампа', price: 1000, description: "Сушит гель лак"},
    {name: 'Пилочка', price: 50, description: "Можно использовать для побега и не только"},
  ]);
};
