module.exports = function(sequelize, DataTypes) {
  var Sequelize = require("sequelize");

  var UserRole = sequelize.define("UserRole", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.ENUM("Admin", "Staff", "Customer", "Owner")
    }
  });
  return UserRole;
};
