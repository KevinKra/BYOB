// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection: "postgres://localhost/kevins_library",
    migrations: {
      directory: "./migrations"
    },
    seeds: {
      directory: "./seeds"
    }
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: "./migrations"
    },
    seeds: {
      directory: "./seeds"
    }
  }
};
