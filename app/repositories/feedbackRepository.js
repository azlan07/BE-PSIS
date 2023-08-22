const { Feedback } = require('../models');

module.exports = {
  create(body) {
    return Feedback.create(body);
  },

  update(id, body) {
    return Feedback.update(body, { where: { id } });
  },

  getAll() {
    return Feedback.findAll();
  },

  getTotalCount() {
    return Feedback.count();
  },

  getByPk(id) {
    return Feedback.findByPk(id);
  },

  destroy(id) {
    return Feedback.destroy({ where: { id } });
  },
};
