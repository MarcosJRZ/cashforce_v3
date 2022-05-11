'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class cnpjs extends Model {
        static associate(models) {
            // define association here
        }
    }
    cnpjs.init({
        cnpj: DataTypes.STRING,
        companytype: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'cnpjs',
    });
    return cnpjs;
};