const pendudukRepository = require('../repositories/pendudukRepository');

module.exports = {
  create(body) {
    return pendudukRepository.create(body);
  },

  update(id, body) {
    return pendudukRepository.update(id, body);
  },

  async getAll() {
    try {
      const penduduk = await pendudukRepository.getAll();
      const count = await pendudukRepository.getTotalCount();

      return {
        data: penduduk,
        count: count,
      };
    } catch (err) {
      return err;
    }
  },

  getByPk(id) {
    return pendudukRepository.getByPk(id);
  },

  destroy(id) {
    return pendudukRepository.destroy(id);
  },
};
