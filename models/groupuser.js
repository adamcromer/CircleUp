module.exports = function(sequelize, DataTypes) {
    var GroupUser = sequelize.define("GroupUser", {
      userId: DataTypes.INTEGER,
      groupId: DataTypes.INTEGER
    });
    return GroupUser;
  };