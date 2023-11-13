const pendudukService = require('../../../services/pendudukService');

module.exports = {
  async handleCreatePenduduk(req, res) {
    try {
      const body = req.body;
      const penduduk = await pendudukService.create(body);

      res.status(201).json({
        status: 'OK',
        data: penduduk,
      });
    } catch (err) {
      res.status(400).json({
        status: 'FAIL',
        message: err.message,
      });
    }
  },

  async handleUpdatePenduduk(req, res) {
    try {
      const body = req.body;
      const id = req.params.id;
      const penduduk = await pendudukService.update(id, body);

      res.status(201).json({
        status: 'OK',
        data: penduduk,
      });
    } catch (err) {
      res.status(400).json({
        status: 'FAIL',
        messange: err.message,
      });
    }
  },

  async handleGetAllPenduduk(req, res) {
    try {
      const { data, count } = await pendudukService.getAll();

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
      const penduduk = await pendudukService.getByPk(id);
      res.status(201).json({
        status: 'OK',
        data: penduduk,
      });
    } catch (err) {
      res.status(400).json({
        status: 'FAIL',
        message: err.message,
      });
    }
  },

  async handleDeletePenduduk(req, res) {
    try {
      const id = req.params.id;
      await pendudukService.destroy(id);

      res.status(201).json({
        status: 'OK',
        message: 'penduduk successfully deleted',
      });
    } catch (err) {
      res.status(400).json({
        status: 'FAIL',
        message: err.message,
      });
    }
  },
};
