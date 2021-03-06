const papersData = require("../../practiceData/papers.json");

const createPaper = (knex, paper) => {
  return knex("papers")
    .insert(
      {
        title: paper.title,
        author: paper.author
      },
      "id"
    )
    .then(paperId => {
      let footnotePromises = [];

      paper.footnotes.forEach(footnote => {
        footnotePromises.push(
          createFootnote(knex, {
            note: footnote,
            paper_id: paperId[0]
          })
        );
      });
      return Promise.all(footnotePromises);
    });
};

const createFootnote = (knex, footnote) => {
  return knex("footnotes").insert(footnote);
};

exports.seed = knex => {
  return knex("footnotes")
    .del()
    .then(() => knex("papers").del())
    .then(() => {
      let paperPromises = [];

      papersData.forEach(paper => {
        paperPromises.push(createPaper(knex, paper));
      });

      return Promise.all(paperPromises);
    })
    .catch(error => console.log(`Error seeding data ==> ${error}`));
};
