exports.up = function(knex) {
  knex.schema.createTable("pokemon", table => {
    table.increments("id");
    table.string("name");
    table.specificType("type", "text ARRAY");
    table.integer("HP");
    table.integer("Attack");
    table.integer("Sp Attack");
    table.integer("Sp Defense");
    table.integer("Speed");
  }),
    knex.schema.createTable("trainers", table => {
      table.increments("id").primary();
      table.string("name");
      table.specificType("pokemon", "integer ARRAY");
    }),
    knex.schema.createTable("trainers_pokemon", table => {
      table
        .integer("trainer_id")
        .unsigned()
        .references("trainers.id");
      table
        .integer("pokemon_id")
        .unsigned()
        .references("pokemon.id");
    });
};

exports.down = function(knex) {
  knex.schema
    .dropTableIfExists("trainers_pokemon")
    .dropTableIfExists("trainers")
    .dropTableIfExists("pokemon");
};
