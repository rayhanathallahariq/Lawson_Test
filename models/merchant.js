'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Merchant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Merchant.belongsTo(models.city)
      Merchant.hasMany(models.product)
    }
  }
  Merchant.init({
    merchant_name: DataTypes.STRING,
    city_id: DataTypes.INTEGER,
    address: DataTypes.TEXT,
    phone: DataTypes.INTEGER,
    expired_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Merchant',
  });
  return Merchant;
};