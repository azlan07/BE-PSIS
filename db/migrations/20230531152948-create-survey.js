'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Surveys', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      pernah_kekantor: {
        type: Sequelize.STRING
      },
      pernah_mendapat_pelayanan: {
        type: Sequelize.STRING
      },
      kebersihan_kantor: {
        type: Sequelize.STRING
      },
      kepuasan_pelayanan: {
        type: Sequelize.STRING
      },
      sikap_petugas: {
        type: Sequelize.STRING
      },
      waktu_pelayanan: {
        type: Sequelize.STRING
      },
      informasi_pembangunan: {
        type: Sequelize.STRING
      },
      kinerja_kepala_jorong: {
        type: Sequelize.STRING
      },
      kedisiplinan_perangkat: {
        type: Sequelize.STRING
      },
      sumber_informasi_nagari: {
        type: Sequelize.STRING
      },
      pungli: {
        type: Sequelize.STRING
      },
      kritik_saran: {
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
    await queryInterface.dropTable('Surveys');
  }
};