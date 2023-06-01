const { Skck } = require('../models');

module.exports = {
  create(body) {
    return Skck.create(body);
  },

  update(id, body) {
    return Skck.update(body, { where: { id } });
  },

  getAll() {
    return Skck.findAll();
  },

  getTotalCount() {
    return Skck.count();
  },

  getByPk(id) {
    return Skck.findByPk(id);
  },

  destroy(id) {
    return Skck.destroy({ where: { id } });
  },
};
