module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
      validate: {
        notEmpty: true
      }
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    }
  });
  User.associate = function (models) => {
    User.belongsToMany(models.Group, {
      through: 'GroupUser',
      as: 'group',
      foreignKey: 'userId'
    });
    User.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };
  return User;
};
