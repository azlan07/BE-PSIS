const { Lapor } = require('../models');

module.exports = {
  create(body) {
    return Lapor.create(body);
  },

  update(id, body) {
    return Lapor.update(body, { where: { id } });
  },

  getAll() {
    return Lapor.findAll();
  },

  getTotalCount() {
    return Lapor.count();
  },

  getByPk(id) {
    return Lapor.findByPk(id);
  },

  destroy(id) {
    return Lapor.destroy({ where: { id } });
  },
};
