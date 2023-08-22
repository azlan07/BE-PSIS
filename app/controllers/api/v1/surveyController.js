const surveyService = require('../../../services/surveyService');

module.exports = {
  async handleCreateSurvey(req, res) {
    try {
      const body = req.body;
      const survey = await surveyService.create(body);

      res.status(201).json({
        status: 'OK',
        data: survey,
      });
    } catch (err) {
      res.status(400).json({
        status: 'FAIL',
        message: err.message,
      });
    }
  },

  async handleUpdateSurvey(req, res) {
    try {
      const body = req.body;
      const id = req.params.id;

      const survey = await surveyService.update(id, body);

      res.status(201).json({
        status: 'OK',
        data: survey,
      });
    } catch (err) {
      res.status(400).json({
        status: 'FAIL',
        messange: err.message,
      });
    }
  },

  async handleGetAllSurvey(req, res) {
    try {
      const { data, count } = await surveyService.getAll();

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
      const survey = await surveyService.getByPk(id);
      res.status(201).json({
        status: 'OK',
        data: survey,
      });
    } catch (err) {
      res.status(400).json({
        status: 'FAIL',
        message: err.message,
      });
    }
  },

  async handleDeleteSurvey(req, res) {
    try {
      const id = req.params.id;
      await surveyService.destroy(id);

      res.status(201).json({
        status: 'OK',
        message: 'survey successfully deleted',
      });
    } catch (err) {
      res.status(400).json({
        status: 'FAIL',
        message: err.message,
      });
    }
  },
};
