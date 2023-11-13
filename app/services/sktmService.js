const sktmRepository = require('../repositories/sktmRepository');

module.exports = {
  create(body) {
    return sktmRepository.create(body);
  },

  update(id, body) {
    return sktmRepository.update(id, body);
  },

  async getAll() {
    try {
      const sktm = await sktmRepository.getAll();
      const count = await sktmRepository.getTotalCount();

      return {
        data: sktm,
        count: count,
      };
    } catch (err) {
      return err;
    }
  },

  getByPk(id) {
    return sktmRepository.getByPk(id);
  },

  destroy(id) {
    return sktmRepository.destroy(id);
  },
};
