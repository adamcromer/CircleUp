module.exports = (sequelize, DataTypes) => {
  var Group = sequelize.define('Group', {
    name: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
      validate: {
        notEmpty: true
      }
    }
  });
  Group.associate = (models) => {
    Group.belongsToMany(models.User, {
      through: 'GroupUser',
      as: 'user',
      foreignKey: 'groupId'
    });
  };
  return Group;
};
