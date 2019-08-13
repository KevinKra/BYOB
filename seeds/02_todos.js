exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("todos")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("todos").insert([
        { id: 1, title: "rowValue1", user_id: 1 },
        { id: 2, title: "rowValue2", user_id: 2 },
        { id: 3, title: "rowValue3", user_id: 3 }
      ]);
    });
};
