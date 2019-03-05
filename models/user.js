module.exports = function(sequelize, DataTypes) {
  var Sequelize = require("sequelize");

  var user = sequelize.define("User", {
    name: Sequelize.STRING(255),
    email: {
      type: Sequelize.STRING(255),
      unique: true,
      validate: {
        isEmail: true
      }
    }
  });
  user.associate = function(models) {
    user.belongsToMany(models.Group, {
      through: "GroupUser",
      as: "group"
      // foreignKey: "userxId"
    });
  };
  user.associate = function(models) {
    user.belongsToMany(models.Role, {
      as: "Roles",
      through: { model: models.UserRole, unique: false },
      foreignKey: "userId"
    });
  };
  return user;
};
