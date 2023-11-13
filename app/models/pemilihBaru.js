'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PemilihBaru extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

    }
  }
  PemilihBaru.init(
    {
      user_id: DataTypes.INTEGER,
      nama: DataTypes.STRING,
      nik: DataTypes.STRING,
      kelamin: DataTypes.STRING,
      umur: DataTypes.STRING,
      alamat: DataTypes.STRING,
      punya_ktp: DataTypes.STRING,
      image_kk: DataTypes.STRING,
      status: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'PemilihBaru',
    }
  );
  return PemilihBaru;
};
