'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class offers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  offers.init({
    tax: DataTypes.STRING,
    tariff: DataTypes.STRING,
    adValorem: DataTypes.STRING,
    float: DataTypes.STRING,
    iof: DataTypes.STRING,
    expiresIn: DataTypes.DATE,
    paumentStatusSponsor: DataTypes.TINYINT,
    paymentStatusProvider: DataTypes.TINYINT
  }, {
    sequelize,
    modelName: 'offers',
  });
  return offers;
};