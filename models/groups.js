module.exports = function(sequelize, DataTypes) {
  var Group = sequelize.define("Group", {
    name: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
      validate: {
        notEmpty: true
      }
    },
      password: {
        type: DataTypes.STRING,
        allowNull: false
    }
  });
  // Group.associate = function(models) {
  //   Group.belongsToMany(models.User, {
  //     as: "users",
  //     through: { model: models.GroupUser, unique: false },
  //     foreignKey: "groupId"
  //   });
  // };
  return Group;
};

