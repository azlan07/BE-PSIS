const kabaService = require('../../../services/kabaService');

module.exports = {
  async handleCreateKaba(req, res) {
    try {
      const image = req.file;
      const body = req.body;
      const kaba = await kabaService.create(body, image);

      res.status(201).json({
        status: 'OK',
        data: kaba,
      });
    } catch (err) {
      res.status(400).json({
        status: 'FAIL',
        message: err.message,
      });
    }
  },

  async handleUpdateKaba(req, res) {
    try {
      const body = req.body;
      const id = req.params.id;

      const kaba = await kabaService.update(id, body);

      res.status(201).json({
        status: 'OK',
        data: kaba,
      });
    } catch (err) {
      res.status(400).json({
        status: 'FAIL',
        messange: err.message,
      });
    }
  },

  async handleGetAllKaba(req, res) {
    try {
      const { data, count } = await kabaService.getAll();

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
      const kaba = await kabaService.getByPk(id);
      res.status(201).json({
        status: 'OK',
        data: kaba,
      });
    } catch (err) {
      res.status(400).json({
        status: 'FAIL',
        message: err.message,
      });
    }
  },

  async handleDeleteKaba(req, res) {
    try {
      const id = req.params.id;
      await kabaService.destroy(id);

      res.status(201).json({
        status: 'OK',
        message: 'kaba successfully deleted',
      });
    } catch (err) {
      res.status(400).json({
        status: 'FAIL',
        message: err.message,
      });
    }
  },
};
