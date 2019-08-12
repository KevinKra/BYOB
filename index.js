const express = require("express");
const morgan = require("morgan");
const app = express();
const dbConnection = require("./connection");
app.use(express.json());

app.use(morgan(process.env.NODE_ENV !== "production" ? "dev" : "combined"));

app.get("/api/v1/books", (req, res) => {
  dbConnection("book")
    .select("*")
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
