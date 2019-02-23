module.exports = function(sequelize, DataTypes) {
  var Group = sequelize.define("Group", {
    text: DataTypes.STRING
  });
  return Group;
};
