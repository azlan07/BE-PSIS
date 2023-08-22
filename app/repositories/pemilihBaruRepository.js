const { PemilihBaru } = require('../models');

module.exports = {
  create(body) {
    return PemilihBaru.create(body);
  },

  update(id, body) {
    return PemilihBaru.update(body, { where: { id } });
  },

  getAll() {
    return PemilihBaru.findAll();
  },

  getTotalCount() {
    return PemilihBaru.count();
  },

  getByPk(id) {
    return PemilihBaru.findByPk(id);
  },

  destroy(id) {
    return PemilihBaru.destroy({ where: { id } });
  },
};
