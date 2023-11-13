const laporRepository = require('../repositories/laporRepository');

module.exports = {
  create(body) {
    return laporRepository.create(body);
  },

  update(id, body) {
    return laporRepository.update(id, body);
  },

  async getAll() {
    try {
      const lapor = await laporRepository.getAll();
      const count = await laporRepository.getTotalCount();

      return {
        data: lapor,
        count: count,
      };
    } catch (err) {
      return err;
    }
  },

  getByPk(id) {
    return laporRepository.getByPk(id);
  },

  destroy(id) {
    return laporRepository.destroy(id);
  },
};
