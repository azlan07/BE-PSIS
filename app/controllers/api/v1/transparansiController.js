const transparansiService = require('../../../services/transparansiService');

module.exports = {
  async handleCreateTransparansi(req, res) {
    try {
      const body = req.body;
      const transparansi = await transparansiService.create(body);

      res.status(201).json({
        status: 'OK',
        data: transparansi,
      });
    } catch (err) {
      res.status(400).json({
        status: 'FAIL',
        message: err.message,
      });
    }
  },

  async handleUpdateTransparansi(req, res) {
    try {
      const body = req.body;
      const id = req.params.id;

      const transparansi = await transparansiService.update(id, body);

      res.status(201).json({
        status: 'OK',
        data: transparansi,
      });
    } catch (err) {
      res.status(400).json({
        status: 'FAIL',
        messange: err.message,
      });
    }
  },

  async handleGetAllTransparansi(req, res) {
    try {
      const { data, count } = await transparansiService.getAll();

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
  async handleGetTransparansiByPk(req, res) {
    try {
      const id = req.params.id;
      const transparansi = await transparansiService.getByPk(id);
      res.status(201).json({
        status: 'OK',
        data: transparansi,
      });
    } catch (err) {
      res.status(400).json({
        status: 'FAIL',
        message: err.message,
      });
    }
  },

  async handleDeleteTransparansi(req, res) {
    try {
      const id = req.params.id;
      await transparansiService.destroy(id);

      res.status(201).json({
        status: 'OK',
        message: 'pengajuan successfully deleted',
      });
    } catch (err) {
      res.status(400).json({
        status: 'FAIL',
        message: err.message,
      });
    }
  },
};
