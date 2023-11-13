const feedbackRepository = require('../repositories/feedbackRepository');

module.exports = {
  create(body) {
    return feedbackRepository.create(body);
  },

  update(id, body) {
    return feedbackRepository.update(id, body);
  },

  async getAll() {
    try {
      const feedback = await feedbackRepository.getAll();
      const count = await feedbackRepository.getTotalCount();

      return {
        data: feedback,
        count: count,
      };
    } catch (err) {
      return err;
    }
  },

  getByPk(id) {
    return feedbackRepository.getByPk(id);
  },

  destroy(id) {
    return feedbackRepository.destroy(id);
  },
};
