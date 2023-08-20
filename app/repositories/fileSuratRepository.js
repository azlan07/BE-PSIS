const { FileSurat } = require('../models');

module.exports = {
  create(body) {
    return FileSurat.create(body);
  },

  update(id, body) {
    return FileSurat.update(body, { where: { id } });
  },

  getAll() {
    return FileSurat.findAll();
  },

  getTotalCount() {
    return FileSurat.count();
  },

  getByPk(id) {
    return FileSurat.findByPk(id);
  },

  destroy(id) {
    return FileSurat.destroy({ where: { id } });
  },
};
