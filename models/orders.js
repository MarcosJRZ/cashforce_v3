'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  orders.init({
    orderNfld: DataTypes.STRING,
    orderNumber: DataTypes.STRING,
    orderPath: DataTypes.STRING,
    orderFileName: DataTypes.STRING,
    orderOriginalName: DataTypes.STRING,
    emissionDate: DataTypes.STRING,
    pdfFile: DataTypes.STRING,
    emitedTo: DataTypes.STRING,
    nNf: DataTypes.STRING,
    CTE: DataTypes.STRING,
    value: DataTypes.STRING,
    orderStatusBuyer: DataTypes.STRING,
    orderStatusProvider: DataTypes.STRING,
    deliveryReceipt: DataTypes.STRING,
    cargoPackingList: DataTypes.STRING,
    deliveryCtrc: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'orders',
  });
  return orders;
};