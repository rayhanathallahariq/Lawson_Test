'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order_items extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      order_items.belongsTo(models.user)
      order_items.belongsTo(models.product)
      order_items.hasMany(models.order_status)
    }
  }
  order_items.init({
    date: DataTypes.DATE,
    quantity: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'order_items',
  });
  return order_items;
};