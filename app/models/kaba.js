'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kaba extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

    }
  }
  Kaba.init(
    {
      judul: DataTypes.STRING,
      isi: DataTypes.TEXT,
      tanggal: DataTypes.DATE,
      pembuat: DataTypes.STRING,
      sumber: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Kaba',
    }
  );
  return Kaba;
};
