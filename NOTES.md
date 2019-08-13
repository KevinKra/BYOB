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

#### Questions

- What are two or more differences between **relational** and non-relational databases?
- What is a Schema?
- Give an example of a `one-to-many` and `many-to-many` relationship.
- what is a `join table`?

# Project Work-through

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

#### What are Migrations

- Migrations server essentially as version control for databases. They are single, timestamped files that each represent a change to your database schema.

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
- `knex migrate:make create_book_table` Setup migrations and run them. This file is how we setup up schema / organize our data in the book table.
- `knex migrate: latest` running this migration creates the table in the database.
- `knex seed:make 00_books` Creates a seed. Runs seeds sequentially in order, so it needs to be ordered in the event that you have data that is dependent on other data.
- `knex seed:run` Run the seed data to insert it into the table.

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

# PostgreSQL

> this section is still being worked on.

(Notes are from this freeCodeCamp video.)[https://www.youtube.com/watch?v=qw--VYLpxG4]

- PostgreSQL is the most popular open source database currently. Easy and robust, with great tools.

# KnexJS

#### Knexfile.js

- A configuration file for Knex to determine the connection, migrations, seeds, etc for different dev environments.
