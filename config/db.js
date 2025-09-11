require("dotenv").config(); // ✅ Load .env variables
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT || "postgres",
    logging: process.env.DB_LOGGING === "true" ? console.log : false,
  }
);

sequelize
  .authenticate()
  .then(() => console.log("✅ Database connected via Sequelize"))
  .catch((err) => console.error("❌ DB connection error:", err));

module.exports = sequelize;
