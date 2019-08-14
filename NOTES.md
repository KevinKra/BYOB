# Data Persistance

## What is a Database?

- A database is a collection of data that can be stored, manipulated, and retrieved.
- 2 types of databases: Relational, Non-Relational.

### Non-Relational Databases

- There is no required schema and each data `record` can specify its own set of attributes.
- Allow for irregular data be stored.
- Don't have structured mechanisms for linking data between tables.
- `MongoDB` is an example of a non-relational SQL-less database.

#### What is a non-relational database suitable for?

- A project with rapid growth would be more suitable for a non-relational database simply due to the flexibility of the design.

### Relational Databases

- Store data in tables with rows and columns.
- Require a strict, pre-defined schema.
- Limit the types of data structures that can be stored, forces overall flatter data structure.
- Use `SQL` (Structured Query Language) to access and manipulate data points.
- `MySQL` and `PostgreSQL`.

#### What is a relational database suitable for?

- Relational Databases are suitable for applications that require a lot of complicated querying, database transactions, and the routine analysis of data a relational database is appropriate. If an application is going to focus on many database transactions, it's very important that those transactions are processed reliably.

#### Terminology

- `SQL` - Structured Querying Language.
- `Schema` - A schema is the definition of your data structure. It provides a blueprint for the tables in the database and the relationships between them. Within each table, you must define the types of data that can be stored.
- `Primary Key` = A key in a relational database that is unique for each record/..
- `Foreign Key` = A field in one table that uniquely identifies a row of another table. Foreign keys are used to structure a relational database. They identify any atomic piece of data within a table. Other tables may refer to that foreign key, so as to create a link between their data and the piece pointed to by the foreign key.

#### Interview Questions

1. Describe a `relational` database.
2. Describe a `non-relational` databases.
3. What is a Schema, which database format requires a schema?
4. Give an example of a `one-to-one`, `one-to-many`, and `many-to-many` relationship.
5. what is a `join table`?
6. What kind of things would you consider in deciding whether you use a relational or non-relational database?
7. What are the 3 types of relationships in relational database design?

#### Interview Answers

1. Relational databases have been around since the mid 70s and have undergone numerous tweaks over the decades. As a consequence, they are very refined and polished and provide a very secure and maintainable database that is appropriate for large scale projects. The draw back is because relational databases require a lot of upfront planning and mapping they can be tricker to build during rapid expansion. Easy to search and query, uses tables, rows, columns.
2. Non-relational databases use JSON and the OOP paradigm, schema is optional. Can write lists and objects instead of only text.
3. A blueprint or design to restrict the shape (types) of incoming data. Relational databases require a schema, Non-relation databases do not (optional, but its recommended).
4. `One-to-one`: One User owns one account and the account has one owner. `One-to-many`: One user has multiple accounts, multiple accounts have one owner. `Many-to-many`: Users can have multiple accounts and those accounts can have multiple owners.
5. A `join table` provides a streamlined table displaying the relations between multiple different tables. Used in `many-to-many` relationships.
6. The growth of the application and the expectations regarding user interaction, is it a lot of reading or reading and writing?
7. `one-to-one`, `one-to-many`, and `many-to-many`.

# Project 1 Work-through

> Below are a series of videos to a very useful tutorial regarding setting up an application using Node, Express, Knex, and PostgreSQL.

1. [Project Setup](https://www.youtube.com/watch?v=CTLHys7EgEA&list=LLjkpQcNB-kZrJlh0TE4sLnw&index=8&t=0s)
2. [DataBase Setup](https://www.youtube.com/watch?v=uQbKvaOOA7w&amp=&list=LLjkpQcNB-kZrJlh0TE4sLnw&amp=&index=6)
3. [Build Routes](https://www.youtube.com/watch?v=A-Oi-Yy-V6s&list=LLjkpQcNB-kZrJlh0TE4sLnw&index=5])

#### Steps

- Setup the project folder and files
- Install Dependencies
  - Express
  - Knex
  - pg
- Spin up a simple server
- Commit code and it push to github
- Deploy to Heroku
- Create a database on your local machine
- Configure development and production environments
  - Setup `knexfile.js`
- Create a table
  - Setup and run migrations
- Add seed data to the table
  - Setup and run seeds
- Provision a database to heroku, run migrations and seeds
- Create a file that connects your database to your server
- Build a route that displays all the data from the book table
- Add the Morgan package to show more information about `http` requests
- Build a route that displays the data for one book
- Commit and push code to github
- Deploy to Heroku

### What is Knex?

- A SQL query builder designed to be flexible and "fun to use".
- What Knex really is is Javascript instead of raw SQL.

### Knex exports.up / exports.down?

- the `exports.up` and `exports.down` represent the current or previous versions of our migrations. When you enter `knex migrate:latest` you will be running the "up" path. When you enter `knex migrate:rollback` you are rolling back and undoes whatever "up" did. For every `up` there must be an equal / opposite `down`.

#### What are Migrations

- **DO NOT EDIT MIGRATIONS DIRECTLY**
  > They set up instructions on how your database is going to change.
- Migrations serve essentially as version control for databases. They are single, timestamped files that each represent a change to your database overall schema.
- Updates/modifications/corrections should be handled in new migrations.

### What is pg?

- `node-postgress`, it is a non-blocking PostgreSQL client for Node.js.

### Heroku

- `const PORT = process.env.PORT || 3000;`
- If set up, Heroku will utilize the environment PORT variable to host our server.

## Useful commands / shortcuts

> Note: if a command is not found, you may need to precede the command with `npx`. For example: `npx heroku run knex seed:run`.

#### Heroku

- `heroku create` (if logged in) Heroku will auto-generate a CLI.
- `git remote -v` will show both the github and heroku remote endpoints.
- `git push heroku master` pushes your master branch to the heroku endpoint.
- `heroku addons:create heroku-postgresql:hobby-dev` provisions a database on Heroku.
- `heroku run knex migrate:latest`
- `heroku run knex seed:run`
- `heroku pg:psql` connects to heroku hosted database.

#### PostgreSQL

- `createdb <library_name>` Creates a psql database.
- `psql --list` Lists all the libraries currently on your machine.
- `psql <library_name>` connects to a specific library.
- `\dt` (data table) shows your data table / "list of relations".
- ex: `\d book` (data) shows the data table of your book.
- `select * from book` shows your seed data.
- `dropdb <library name>` drops the targeted library that you're no longer using.

#### Knex

- `knex init` Creates a knex config file / Initializes a Knex environment.
- `knex migrate:make <title?>` Setup migrations and run them. This file is how we setup up schema / organize our data in the book table.
- `knex migrate: latest` running this migration creates the table in the database.
- `knex migrate:up` Runs next migration up that has not yet been run.
- `knex migrate:down` Can go down multiple times to previous migrations.
- `knex migrate:rollback` Only can go back to the previous migration, one step back only.
- `knex seed:make 00_books` Creates a seed. Runs seeds sequentially in order, so it needs to be ordered in the event that you have data that is dependent on other data.
- `knex seed:run` Run the seed data to insert it into the table.
- `knex migrate:currentVersion` returns the timestamped version your working with.
- are all tables included in the same migration

> Knex database setup

```node
// knexfile.js
module.exports = {
  // to connect to a local database (dev env)
  development: {
    client: "pg",
    connection: "postgres://localhost/<library_name>"
  },

  // to connect to a database provisioned on Heroku (prod env)
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL
  }
};
```

> migration schema example

```node
// Creates a schema for the "book" table
exports.up = function(knex) {
  return knex.schema.createTable("book", table => {
    table.increments("id");
    table.varchar("title");
    table.varchar("author");
    table.text("cover_image");
  });
};

// Removes (drops) table if it exists
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("book");
};
```

> Seeding example
> Seeds represent default data. Sometimes you may want to populate your tables with fake data so you can work on other functionality.

`knex seed:make <name>`

```node
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("book")
    .del()
    .then(function() {
      // Inserts seed entries
      // Seeds need to match the migration (schema pattern).
      // Ids are auto-created and do not need to be written here.
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
```

> File connecting database to server

```node
// connection.js
const environment = process.env.NODE_ENV || "development";
const config = require("./knexfile");
const environmentConfig = config[environment];
const knex = require("knex");
const connection = knex(environmentConfig);

module.exports = connection;
```

> Express route handling

```node
const express = require("express");
const morgan = require("morgan");
const app = express();
const dbConnection = require("./connection");
app.use(express.json());

app.use(morgan(process.env.NODE_ENV !== "production" ? "dev" : "combined"));

app.get("/api/v1/books", (req, res) => {
  // at this endpoint connect to a specific table
  dbConnection("book")
    // select all books
    .select("*")
    // handle async response / error
    .then(books => res.status(200).send(books))
    .catch(err =>
      res.status(500).send({ error: err.message, stack: err.stack })
    );
});

app.get("/api/v1/books/:id", (req, res) => {
  dbConnection("book")
    .select("*")
    .limit(1)
    .where({ id: req.params.id })
    .then(book => res.status(200).json(book))
    .catch(book =>
      res.status(500).send({ error: err.message, stack: err.stack })
    );
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Listening on port ${PORT}...`));
```

#### Resources

- [Knex Connection File](https://gist.github.com/kimschles/808...)
- [Knex Cheat Sheet](https://devhints.io/knex)
- [Dan Levy's Express Guide](https://github.com/justsml/guides/tre...)

# Project 2 Workthrough (From class notes)

[Turing Link](https://frontend.turing.io/lessons/module-4/knex-postgres.html)

```node
exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable("papers", table => {
      table.increments("id").primary();
      table.string("title");
      table.string("author");
      // shorthand create a 'created_at' and 'updated_at' columns in your table
      table.timestamps(true, true);
    }),
    knex.schema.createTable("footnotes", table => {
      table.increments("id").primary();
      table.string("note");
      // the 'unsigned' method prevents the field from being a negative number
      table.integer("paper_id").unsigned();
      // creates a foreign key
      table.foreign("paper_id").references("papers.id");
      table.timestamps(true, true);
    })
  ]);
};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.dropTable("footnotes"),
    knex.schema.dropTAble("papers")
  ]);
};
```
