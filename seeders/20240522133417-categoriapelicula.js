'use strict';

const { query } = require('express');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categoriapelicula', [
      { peliculaid: 1, categoriaid: 8, createdAt: new Date(), updatedAt: new Date() },
      { peliculaid: 1, categoriaid: 11, createdAt: new Date(), updatedAt: new Date() },
      { peliculaid: 2, categoriaid: 6, createdAt: new Date(), updatedAt: new Date() },
      { peliculaid: 2, categoriaid: 11, createdAt: new Date(), updatedAt: new Date() },
      { peliculaid: 3, categoriaid: 1, createdAt: new Date(), updatedAt: new Date() },
      { peliculaid: 3, categoriaid: 6, createdAt: new Date(), updatedAt: new Date() },
      { peliculaid: 4, categoriaid: 8, createdAt: new Date(), updatedAt: new Date() },
      { peliculaid: 4, categoriaid: 11, createdAt: new Date(), updatedAt: new Date() },
      { peliculaid: 5, categoriaid: 8, createdAt: new Date(), updatedAt: new Date() },
      { peliculaid: 5, categoriaid: 11, createdAt: new Date(), updatedAt: new Date() },
      { peliculaid: 6, categoriaid: 3, createdAt: new Date(), updatedAt: new Date() },
      { peliculaid: 6, categoriaid: 11, createdAt: new Date(), updatedAt: new Date() },
      { peliculaid: 7, categoriaid: 3, createdAt: new Date(), updatedAt: new Date() },
      { peliculaid: 7, categoriaid: 11, createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categoriapelicula', null, {});
  }
};
