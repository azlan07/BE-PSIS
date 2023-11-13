'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transparansi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Transparansi.init(
    {
      tahun: DataTypes.STRING,
      file: DataTypes.STRING,
      jenis: DataTypes.STRING,
      keterangan: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Transparansi',
    }
  );
  return Transparansi;
};
