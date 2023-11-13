const { Sktm } = require('../models');

module.exports = {
  create(body) {
    return Sktm.create(body);
  },

  update(id, body) {
    return Sktm.update(body, { where: { id } });
  },

  getAll() {
    return Sktm.findAll();
  },

  getTotalCount() {
    return Sktm.count();
  },

  getByPk(id) {
    return Sktm.findByPk(id);
  },

  destroy(id) {
    return Sktm.destroy({ where: { id } });
  },
};
