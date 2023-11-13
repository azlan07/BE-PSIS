const { Kaba } = require('../models');

module.exports = {
  create(body) {
    return Kaba.create(body);
  },

  update(id, body) {
    return Kaba.update(body, { where: { id } });
  },

  getAll() {
    return Kaba.findAll();
  },

  getTotalCount() {
    return Kaba.count();
  },

  getByPk(id) {
    return Kaba.findByPk(id);
  },

  destroy(id) {
    return Kaba.destroy({ where: { id } });
  },
};
