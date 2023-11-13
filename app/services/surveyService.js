const surveyRepository = require('../repositories/surveyRepository');

module.exports = {
  create(body) {
    return surveyRepository.create(body);
  },

  update(id, body) {
    return surveyRepository.update(id, body);
  },

  async getAll() {
    try {
      const survey = await surveyRepository.getAll();
      const count = await surveyRepository.getTotalCount();

      return {
        data: survey,
        count: count,
      };
    } catch (err) {
      return err;
    }
  },

  getByPk(id) {
    return surveyRepository.getByPk(id);
  },

  destroy(id) {
    return surveyRepository.destroy(id);
  },
};
