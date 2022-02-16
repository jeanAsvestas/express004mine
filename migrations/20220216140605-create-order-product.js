'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('OrderProducts', {      
      orderId: { allowNull: false, type: Sequelize.INTEGER, references: { model: 'Orders', key: 'id' }},
      productId: { allowNull: false, type: Sequelize.INTEGER, references: { model: 'Products', key: 'id' }},
      quantity: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('OrderProducts');
  }
};