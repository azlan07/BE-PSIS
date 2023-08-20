const { Penduduk } = require('../models');

module.exports = {
  create(body) {
    return Penduduk.create(body);
  },

  update(id, body) {
    return Penduduk.update(body, { where: { id } });
  },

  getAll() {
    return Penduduk.findAll();
  },

  getTotalCount() {
    return Penduduk.count();
  },

  getByPk(id) {
    return Penduduk.findByPk(id);
  },

  destroy(id) {
    return Penduduk.destroy({ where: { id } });
  },
};
