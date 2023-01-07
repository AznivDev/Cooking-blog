const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("TodosList", "root", "root", {
  dialect: "mysql",
  port: 1618,
});
const Users = sequelize.define(
  "Users",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    mail: {
      type: DataTypes.STRING(255),
      unique: "compositeIndex",
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        min: 6,
        max: 12,
      },
    },
  },
  {
    timestamps: false,
  }
);
module.exports = Users;
