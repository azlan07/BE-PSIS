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
      nik: DataTypes.STRING,
      kelamin: DataTypes.STRING,
      alamat: DataTypes.STRING,
      imageKk: DataTypes.STRING,
      imageKtpAyah: DataTypes.STRING,
      imageKtpIbu: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Sktm',
    }
  );
  return Sktm;
};
