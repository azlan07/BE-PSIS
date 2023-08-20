'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FileSurat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FileSurat.init(
    {
      surek_id: DataTypes.INTEGER,
      file: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'FileSurat',
    }
  );
  return FileSurat;
};
