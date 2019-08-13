exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { id: 1, name: "Eric", email: "test1@gmail.com" },
        { id: 2, name: "Randy", email: "test2@gmail.com" },
        { id: 3, name: "Sam", email: "test3@gmail.com" }
      ]);
    });
};
