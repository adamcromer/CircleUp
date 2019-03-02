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
      type: DataTypes.ARRAY(sequelize.TEXT),
      allowNull: false
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Event;
};
