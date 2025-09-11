const { Sequelize } = require("sequelize");

// Create Sequelize instance
const sequelize = new Sequelize("pathfinder", "postgres", "Ganesh", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

sequelize
  .authenticate()
  .then(() => console.log("✅ Database connected via Sequelize"))
  .catch((err) => console.error("❌ DB connection error:", err));

module.exports = sequelize;
