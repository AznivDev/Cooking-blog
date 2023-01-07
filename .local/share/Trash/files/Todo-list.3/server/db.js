const { Sequelize, DataTypes } = require("sequelize");
const Users = require("./models/userModel.js");
const Todos = require("./models/todoModel.js");

const sequelize = new Sequelize("TodosList", "root", "root", {
  dialect: "mysql",
  port: 1618,
});

// Users.hasMany(Todos, {foreignKey: 'userId'});
Users.hasMany(Todos);
Todos.belongsTo(Users);

(async () => {
  await sequelize
    .sync({
      alter: true,
      force: true,
    })
    .then(() => {
      console.log("Database connected");
    })
    .catch((err) => {
      console.log(err);
    });
})();
module.exports = {
  Users,
  Todos,
};
