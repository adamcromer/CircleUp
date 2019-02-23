module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define("Event", {
    text: DataTypes.STRING
  });
  return Event;
};
