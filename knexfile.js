// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection: {
      filename: "postgres://localhost:5432/pokemon_library"
    }
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL
  }
};
