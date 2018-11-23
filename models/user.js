'use strict';
const helper = require('../helper/helper')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'inccorect email format!'
        },
        isUnique: (value) => {
          console.log(value)
          return User.findOne({
            where: {
              email: value
            }
          })
            .then(data => {
              if(data) {
                throw 'email already taken!'
              }
            })
            .catch(err => {
              throw err
            })
        }
      }
    },
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: (User, option) => {
        User.password = helper.encrypt(User.password)
      }
    }
  });
  User.associate = function(models) {
    // associations can be defined here
    User.belongsToMany(models.Item, {through: 'Transaction'})
  };
  return User;
};