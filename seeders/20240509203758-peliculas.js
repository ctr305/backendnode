'use strict';

const { query } = require('express');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('pelicula', [
      {titulo: 'The Shawshank Redemption', sinopsis: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.', anio: 1994, poster: 'https://via.placeholder.com/300x450', createdAt: new Date(), updatedAt: new Date()},
      {titulo: 'The Godfather', sinopsis: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.', anio: 1972, poster: 'https://via.placeholder.com/300x450', createdAt: new Date(), updatedAt: new Date()},
      {titulo: 'The Dark Knight', sinopsis: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.', anio: 2008, poster: 'https://via.placeholder.com/300x450', createdAt: new Date(), updatedAt: new Date()},
      {titulo: '12 Angry Men', sinopsis: 'A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.', anio: 1957, poster: 'https://via.placeholder.com/300x450', createdAt: new Date(), updatedAt: new Date()},
      {titulo: 'Schindler\'s List', sinopsis: 'In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution.', anio: 1993, poster: 'https://via.placeholder.com/300x450', createdAt: new Date(), updatedAt: new Date()},
      {titulo: 'Akira', sinopsis: 'A secret military project endangers Neo-Tokyo when it turns a biker gang member into a rampaging psychic psychopath who can only be stopped by two teenagers and a group of psychics.', anio: 1988, poster: 'https://via.placeholder.com/300x450', createdAt: new Date(), updatedAt: new Date()},
      {titulo: 'Porco Rosso', sinopsis: 'In 1930s Italy, a veteran World War I pilot is cursed to look like an anthropomorphic pig.', anio: 1992, poster: 'https://via.placeholder.com/300x450', createdAt: new Date(), updatedAt: new Date()}
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pelicula', null, {});
  }
};
