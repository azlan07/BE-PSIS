'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Penduduk extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Penduduk.init(
    {
      laki_laki: DataTypes.STRING,
      perempuan: DataTypes.STRING,
      kepala_keluarga: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Penduduk',
    }
  );
  return Penduduk;
};
