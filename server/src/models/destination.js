"use strict";
module.exports = (sequelize, DataTypes) => {
  const Destination = sequelize.define(
    "Destination",
    {
      destination: DataTypes.STRING,
      description: DataTypes.STRING,
      link: DataTypes.STRING,
    },
    {}
  );

  return Destination;
};
