const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("TodosList", "root", "root", {
  dialect: "mysql",
  port: 1618,
});
const Todos = sequelize.define(
  "Todos",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        notEmpty: true,
        min: 3,
      },
    },
    details: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        notEmpty: true,
        min: 5,
      },
    },
    done: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Todos;
