'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('PengajuanSureks', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            user_id: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            },
            nik: {
                type: Sequelize.STRING
            },
            alamat: {
                type: Sequelize.STRING
            },
            telepon: {
                type: Sequelize.STRING
            },
            image_kk: {
                type: Sequelize.STRING
            },
            nama_surat: {
                type: Sequelize.STRING
            },
            keterangan_lain: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('PengajuanSureks');
    }
};