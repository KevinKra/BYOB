exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable("library", table => {
      table.increments("id").primary();
      table.string("name");
      table.string("state");
      table.string("city");
      table.timestamps(true, true);
    }),
    knex.schema.table("papers", table => {
      table.integer("library_id").unsigned();
      table.foreign("library_id").references("library.id");
    })
  ]);
};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.dropTable("papers"),
    knex.schema.dropTable("library")
  ]);
};
