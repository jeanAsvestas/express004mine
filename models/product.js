'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Product.belongsToMany(models.Order, {through: 'ordersproduct', unique: false, foreignKey: 'productId' })
      //Product.hasMany(models.Order)
    Product.belongsToMany(models.Order, { through: "OrderProduct", as: "combo", foreignKey: "productId" });
      
    }
  }
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};