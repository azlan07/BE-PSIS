'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sktm extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'Users'
      })
    }
  }
  Sktm.init(
    {
      user_id: DataTypes.INTEGER,
      name: DataTypes.STRING,
      tempatLahir: DataTypes.STRING,
      tanggalLahir: DataTypes.DATE,
      kelamin: DataTypes.STRING,
      agama: DataTypes.STRING,
      skawin: DataTypes.STRING,
      nik: DataTypes.STRING,
      pekerjaan: DataTypes.STRING,
      alamat: DataTypes.STRING,
      imageKtp: DataTypes.STRING,
      imageKk: DataTypes.STRING,
      imageRmhDpn: DataTypes.STRING,
      imageRmhSpg: DataTypes.STRING,
      imageRmhBlk: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Sktm',
    }
  );
  return Sktm;
};
