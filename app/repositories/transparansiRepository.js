const { Transparansi } = require('../models');

module.exports = {
  create(body) {
    return Transparansi.create(body);
  },

  update(id, body) {
    return Transparansi.update(body, { where: { id } });
  },

  getAll() {
    return Transparansi.findAll();
  },

  getTotalCount() {
    return Transparansi.count();
  },

  getByPk(id) {
    return Transparansi.findByPk(id);
  },

  destroy(id) {
    return Transparansi.destroy({ where: { id } });
  },
};
