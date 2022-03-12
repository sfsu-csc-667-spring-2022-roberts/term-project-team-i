'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    return queryInterface.createTable(
      'test_table',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey:true,
          autoIncrement: true
        },
        createdAt: {
          type: Sequelize.DATE,
          defaultValue:Sequelize.literal('NOW()'),
          allowNull:false
        },
        testString: {
          type: Sequelize.STRING,
          allowNull:false
        }
      }
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.dropTable('test_table');
  }
};

