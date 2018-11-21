'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    item: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {});
  Item.associate = function(models) {
    // associations can be defined here
    Item.belongsToMany(models.User, {through: 'Transaction'})
  };
  return Item;
};