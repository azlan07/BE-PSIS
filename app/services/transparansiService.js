const transparansiRepository = require('../repositories/transparansiRepository');

module.exports = {
  create(body) {
    return transparansiRepository.create(body);
  },

  update(id, body) {
    return transparansiRepository.update(id, body);
  },

  async getAll() {
    try {
      const transparansi = await transparansiRepository.getAll();
      const count = await transparansiRepository.getTotalCount();

      return {
        data: transparansi,
        count: count,
      };
    } catch (err) {
      return err;
    }
  },

  getByPk(id) {
    return transparansiRepository.getByPk(id);
  },

  destroy(id) {
    return transparansiRepository.destroy(id);
  },
};
