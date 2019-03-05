module.exports = function(sequelize, DataTypes) {
  var Sequelize = require("sequelize");
  var Role = sequelize.define("Role", {
    name: Sequelize.ENUM("ER", "ALL", "DL"),
    description: {
      type: Sequelize.TEXT
    }
  });
  Role.associate = function(models) {
    Role.belongsToMany(models.User, {
      as: "users",
      through: { model: models.UserRole, unique: false },
      foreignKey: "roleId"
    });
  };
  return Role;
};
