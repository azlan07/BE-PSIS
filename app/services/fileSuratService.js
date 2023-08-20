const fileSuratRepository = require('../repositories/fileSuratRepository');

module.exports = {
  create(body) {
    return fileSuratRepository.create(body);
  },

  update(id, body) {
    return fileSuratRepository.update(id, body);
  },

  async getAll() {
    try {
      const fileSurat = await fileSuratRepository.getAll();
      const count = await fileSuratRepository.getTotalCount();

      return {
        data: fileSurat,
        count: count,
      };
    } catch (err) {
      return err;
    }
  },

  getByPk(id) {
    return fileSuratRepository.getByPk(id);
  },

  destroy(id) {
    return fileSuratRepository.destroy(id);
  },
};
