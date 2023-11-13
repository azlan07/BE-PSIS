'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Survey extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here

        }
    }
    Survey.init(
        {
            user_id: DataTypes.INTEGER,
            pernah_kekantor: DataTypes.STRING,
            pernah_mendapat_pelayanan: DataTypes.STRING,
            kebersihan_kantor: DataTypes.STRING,
            kepuasan_pelayanan: DataTypes.STRING,
            sikap_petugas: DataTypes.STRING,
            waktu_pelayanan: DataTypes.STRING,
            informasi_pembangunan: DataTypes.STRING,
            kinerja_kepala_jorong: DataTypes.STRING,
            kedisiplinan_perangkat: DataTypes.STRING,
            sumber_informasi_nagari: DataTypes.STRING,
            pungli: DataTypes.STRING,
            kritik_saran: DataTypes.STRING
        },
        {
            sequelize,
            modelName: 'Survey',
        }
    );
    return Survey;
};
