'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsToMany(models.Product, { through: "OrderProduct", as: "combo", foreignKey: "orderId" })
      Order.belongsTo(models.Customer);
      // define association here
    }
  }
  Order.init({
    customerId: DataTypes.INTEGER,
    totalprice: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};