const { Survey } = require('../models');

module.exports = {
  create(body) {
    return Survey.create(body);
  },

  update(id, body) {
    return Survey.update(body, { where: { id } });
  },

  getAll() {
    return Survey.findAll();
  },

  getTotalCount() {
    return Survey.count();
  },

  getByPk(id) {
    return Survey.findByPk(id);
  },

  destroy(id) {
    return Survey.destroy({ where: { id } });
  },
};
