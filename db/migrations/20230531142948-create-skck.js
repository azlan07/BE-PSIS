'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Skcks', {
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
            tempatLahir: {
                type: Sequelize.STRING
            },
            tanggalLahir: {
                type: Sequelize.DATE
            },
            kelamin: {
                type: Sequelize.STRING
            },
            agama: {
                type: Sequelize.STRING
            },
            skawin: {
                type: Sequelize.STRING
            },
            pekerjaan: {
                type: Sequelize.STRING
            },
            alamat: {
                type: Sequelize.STRING
            },
            imageKtp: {
                type: Sequelize.STRING
            },
            imageKk: {
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
        await queryInterface.dropTable('Skcks');
    }
};