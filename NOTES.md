# Data Persistance

## What is a Database?

- A database is a collection of data stored in an organized way.
- 2 types of databases: Relational, Non-Relational.

### Non-Relational Databases

- There is no required schema and each data `record` can specify its own set of attributes.
- Allow for irregular data be stored.
- Don't have structured mechanisms for linking data between tables.
- `MongoDB` is an example of a non-relational SQL-less database.

#### What is it suitable for?

### Relational Databases

- Store data in tables with rows and columns.
- Require a strict, pre-defined schema.
- Limit the types of data structures that can be stored, forces overall flatter data structure.
- Use `SQL` (Structured Query Language) to access and manipulate data points.
- `MySQL` and `PostgreSQL`.

#### What is it suitable for?

- Relational Databases are suitable for applications that require a lot of complicated querying, database transactions, and the routine analysis of data a relational database is appropriate. If an application is going to focus on many database transactions, it's very important that those transactions are processed reliably.

#### Terminology

`SQL` - Structured Querying Language.
`Schema` - A schema is the definition of your data structure. It provides a blueprint for the tables in the database and the relationships between them. Within each table, you must define the types of data that can be stored.
`Primary Key` = A key in a relational database that is unique for each record/..
`Foreign Key` = A field in one table that uniquely identifies a row of another table. Foreign keys are used to structure a relational database. They identify any atomic piece of data within a table. Other tables may refer to that foreign key, so as to create a link between their data and the piece pointed to by the foreign key.

#### Questions

- What are two or more differences between relational and non-relational databases?
- What is a Schema?
- Give an example of a `one-to-many` and `many-to-many` relationship.

#
