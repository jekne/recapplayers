"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("teams", [
      {
        name: "Ajax",
        country: "NL",
        // x: 1,
        titles: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Barcelona",
        country: "ES",
        // x: 2,
        titles: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Juventus",
        country: "IT",
        // x: 3,
        titles: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Porto",
        country: "PT",
        // x: 4,
        titles: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "AZ Alkmaar",
        country: "NL",
        titles: 3,
        // x: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Chelsea",
        country: "EN",
        // x: 6,
        titles: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Manchester United",
        country: "EN",
        // x: 7,
        titles: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("teams", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
