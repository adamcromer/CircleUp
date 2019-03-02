module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define("Event", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dateAndTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    itemsToBring: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });
  Event.associate = function(models) {
    Event.hasOne(models.Group, {
      foreignKey: "groupId"
    });
    Event.hasMany(models.User, {
      foreignKey: "userId"
    });
  };

  return Event;
};
