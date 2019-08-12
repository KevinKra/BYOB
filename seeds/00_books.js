exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("book")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("book").insert([
        {
          title: "Dancing Dogs",
          author: "Eric Wesley",
          cover_image: "dogs.jpg"
        },
        {
          title: "Prancing Ponies",
          author: "Sammy June",
          cover_image: "pony.jpg"
        },
        {
          title: "Raging Rhinos",
          author: "Max Verstappen",
          cover_image: "rhino.jpeg"
        }
      ]);
    });
};
