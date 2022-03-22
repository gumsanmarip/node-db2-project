exports.up = function (knex) {
  // DO YOUR MAGIC
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('cars')
};
