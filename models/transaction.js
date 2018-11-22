'use strict';
module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('Transaction', {
    ItemId: DataTypes.INTEGER,
    CustomerId: DataTypes.INTEGER
  }, {});
  Transaction.associate = function(models) {
    // associations can be defined here
    Transaction.belongsTo(models.Item,{foreignKey:ItemId})
    Transaction.belongsTo(models.User,{foreignKey:UserId})
  };
  return Transaction;
};