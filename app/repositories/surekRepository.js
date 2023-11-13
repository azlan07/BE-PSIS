const { Surek } = require('../models')

module.exports = {
    createSurek(reqArgs) {
        return Surek.create(reqArgs)
    },
    update(id, body) {
        return Surek.update(body, { where: { id } });
    },

    getAll() {
        return Surek.findAll();
    },

    getTotalCount() {
        return Surek.count();
    },

    getByPk(id) {
        return Surek.findByPk(id);
    },

    destroy(id) {
        return Surek.destroy({ where: { id } });
    },
}