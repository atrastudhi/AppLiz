'use strict';
const helper = require('../helper/helper')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Items', [{
      item: 'Ulancar',
      price: 500,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      item: 'Spotation',
      price: 100,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      item: 'Adobe Ganteng',
      price: 300,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      item: 'VSGame',
      price: 100,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      item: 'Kantor365',
      price: 600,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Items', null, {});
  }
};
