'use strict';
const helper = require('../helper/helper')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'atras@appliz.com',
      password: helper.encrypt('admin'),
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: 'anhar@appliz.com',
      password: helper.encrypt('admin'),
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
