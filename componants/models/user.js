// const { DataTypes } = require("sequelize");
// const sequelize = require("../../config/db");
// // const sequelize = require("../config/db");

// const FormSubmission = sequelize.define(
//   "FormSubmission",
//   {
//     fullName: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     dob: {
//       type: DataTypes.DATEONLY,
//       allowNull: true,
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     phone: {
//       type: DataTypes.STRING,
//       allowNull: true,
//     },
//     profession: {
//       type: DataTypes.STRING,
//       allowNull: true,
//     },
//     gender: {
//       type: DataTypes.STRING,
//       allowNull: true,
//     },
//     message: {
//       type: DataTypes.TEXT,
//       allowNull: true,
//     },
//   },
//   {
//     tableName: "form_submissions",
//     timestamps: true,
//   }
// );

// // Sync model with DB
// FormSubmission.sync({ alter: true })
//   .then(() => console.log("✅ FormSubmission table synced"))
//   .catch((err) => console.error(err));

// module.exports = FormSubmission;
