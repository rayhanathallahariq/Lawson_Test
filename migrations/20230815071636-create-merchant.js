'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Merchants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      merchant_name: {
        type: Sequelize.STRING
      },
      city_id: {
        type: Sequelize.INTEGER,
        references:{model:'cities',key:'id'},
        onUpdate:"cascade",
        onDelete:'cascade'
      },
      address: {
        type: Sequelize.TEXT
      },
      phone: {
        type: Sequelize.INTEGER
      },
      expired_date: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Merchants');
  }
};