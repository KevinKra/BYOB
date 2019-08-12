exports.up = function(knex) {
  return knex.schema.createTable("book", table => {
    table.increments("id");
    table.varchar("title");
    table.varchar("author");
    table.text("cover_image");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("book");
};
