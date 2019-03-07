module.exports = function(sequelize, DataTypes) {
  var GroupUser = sequelize.define("GroupUser", {
    groupId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING
  });
  return GroupUser;
};
