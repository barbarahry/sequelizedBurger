//console.log("I am in models.burger");
module.exports = function(sequelize, DataTypes) {
  var burger = sequelize.define("burgers", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    burger_name: DataTypes.STRING,
    devoured: DataTypes.INTEGER(1),
    createdAt: DataTypes.DATE
  });
  return burger;
};
console.log("Out of  models.burger");