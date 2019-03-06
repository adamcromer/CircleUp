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
  return Group;
};
