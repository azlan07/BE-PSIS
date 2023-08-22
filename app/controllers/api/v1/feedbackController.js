const feedbackService = require('../../../services/feedbackService');

module.exports = {
  async handleCreateFeedback(req, res) {
    try {
      const body = req.body;
      const feedback = await feedbackService.create(body);

      res.status(201).json({
        status: 'OK',
        data: feedback,
      });
    } catch (err) {
      res.status(400).json({
        status: 'FAIL',
        message: err.message,
      });
    }
  },

  async handleUpdateFeedback(req, res) {
    try {
      const body = req.body;
      const id = req.params.id;

      const feedback = await feedbackService.update(id, body);

      res.status(201).json({
        status: 'OK',
        data: feedback,
      });
    } catch (err) {
      res.status(400).json({
        status: 'FAIL',
        messange: err.message,
      });
    }
  },

  async handleGetAllFeedback(req, res) {
    try {
      const { data, count } = await feedbackService.getAll();

      res.status(201).json({
        status: 'OK',
        data: data,
        count: count,
      });
    } catch (err) {
      res.status(400).json({
        status: 'FAIL',
        message: err.message,
      });
    }
  },
  async handleGetByPk(req, res) {
    try {
      const id = req.params.id;
      const feedback = await feedbackService.getByPk(id);
      res.status(201).json({
        status: 'OK',
        data: feedback,
      });
    } catch (err) {
      res.status(400).json({
        status: 'FAIL',
        message: err.message,
      });
    }
  },

  async handleDeleteFeedback(req, res) {
    try {
      const id = req.params.id;
      await feedbackService.destroy(id);

      res.status(201).json({
        status: 'OK',
        message: 'feedback successfully deleted',
      });
    } catch (err) {
      res.status(400).json({
        status: 'FAIL',
        message: err.message,
      });
    }
  },
};
