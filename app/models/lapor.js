'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lapor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

    }
  }
  Lapor.init(
    {
      namePelapor: DataTypes.STRING,
      judul: DataTypes.STRING,
      isi: DataTypes.TEXT,
      tanggal: DataTypes.DATE,
      lokasi: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Lapor',
    }
  );
  return Lapor;
};
