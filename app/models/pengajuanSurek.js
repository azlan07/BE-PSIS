'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PengajuanSurek extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PengajuanSurek.init(
    {
      user_id: DataTypes.INTEGER,
      name: DataTypes.STRING,
      nik: DataTypes.STRING,
      alamat: DataTypes.STRING,
      telepon: DataTypes.STRING,
      image_kk: DataTypes.STRING,
      nama_surat: DataTypes.STRING,
      keterangan_lain: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'PengajuanSurek',
    }
  );
  return PengajuanSurek;
};
