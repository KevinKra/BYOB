// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection: "postgres://localhost/knex_postgres",
    migrations: {
      directory: "./db/migrations"
    },
    seeds: {
      directory: "./db/seeds"
    },
    useNullAsDefault: true
  },

  production: {
    client: "db",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }
};
