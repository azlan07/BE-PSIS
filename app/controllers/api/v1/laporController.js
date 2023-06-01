const laporService = require('../../../services/laporService');

module.exports = {
  async handleCreateLapor(req, res) {
    try {
      const image = req.file
      const body = req.body;
      const lapor = await laporService.create(body, image);

      res.status(201).json({
        status: 'OK',
        data: lapor,
      });
    } catch (err) {
      res.status(400).json({
        status: 'FAIL',
        message: err.message,
      });
    }
  },

  async handleUpdateLapor(req, res) {
    try {
      const body = req.body;
      const id = req.params.id;

      const lapor = await laporService.update(id, body);

      res.status(201).json({
        status: 'OK',
        data: lapor,
      });
    } catch (err) {
      res.status(400).json({
        status: 'FAIL',
        messange: err.message,
      });
    }
  },

  async handleGetAllLapor(req, res) {
    try {
      const { data, count } = await laporService.getAll();

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
      const lapor = await laporService.getByPk(id);
      res.status(201).json({
        status: 'OK',
        data: lapor,
      });
    } catch (err) {
      res.status(400).json({
        status: 'FAIL',
        message: err.message,
      });
    }
  },

  async handleDeleteLapor(req, res) {
    try {
      const id = req.params.id;
      await laporService.destroy(id);

      res.status(201).json({
        status: 'OK',
        message: 'lapor successfully deleted',
      });
    } catch (err) {
      res.status(400).json({
        status: 'FAIL',
        message: err.message,
      });
    }
  },
};
