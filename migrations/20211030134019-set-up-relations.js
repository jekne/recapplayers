"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("players", "teamId", {
      type: Sequelize.INTEGER,
      references: {
        model: "teams",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    //   await queryInterface.addColumn("teams", {
    //     type: Sequelize.INTEGER,
    //     references: {
    //       model: "players",
    //       key: "id",
    //     },
    //     onUpdate: "CASCADE",
    //     onDelete: "SET NULL",
    //   });
  },

  //  await queryInterface.addColumn("teams", {
  //     type: Sequelize.INTEGER,
  //     references: {
  //       model: "players",
  //       key: "id",
  //     },
  //     onUpdate: "CASCADE",
  //     onDelete: "SET NULL",
  //   });
  // },
  /**
   * Add altering commands here.
   *
   * Example:
   * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
   */

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("players", "teamId");
    // await queryInterface.removeColumn("teams", "x");
    //  * Add reverting commands here.
    //  *
    //  * Example:
    //  * await queryInterface.dropTable('users');
    //  */
  },
};
