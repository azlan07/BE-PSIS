const { PengajuanSurek } = require('../models');

module.exports = {
  create(body) {
    return PengajuanSurek.create(body);
  },

  update(id, body) {
    return PengajuanSurek.update(body, { where: { id } });
  },

  getAll() {
    return PengajuanSurek.findAll();
  },

  getTotalCount() {
    return PengajuanSurek.count();
  },

  getByPk(id) {
    return PengajuanSurek.findByPk(id);
  },

  destroy(id) {
    return PengajuanSurek.destroy({ where: { id } });
  },
};
