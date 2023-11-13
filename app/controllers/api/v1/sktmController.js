const sktmService = require('../../../services/sktmService');

module.exports = {
  async handleCreateSktm(req, res, linkKk, linkKtpAyah, linkKtpIbu) {
    try {
      req.body.imageKk = linkKk
      req.body.imageKtpAyah = linkKtpAyah
      req.body.imageKtpIbu = linkKtpIbu
      const body = req.body;
      const sktm = await sktmService.create(body);

      res.status(201).json({
        status: 'OK',
        data: sktm,
      });
    } catch (err) {
      res.status(400).json({
        status: 'FAIL',
        message: err.message,
      });
    }
  },

  async handleUpdateSktm(req, res) {
    try {
      const body = req.body;
      const id = req.params.id;

      const sktm = await sktmService.update(id, body);

      res.status(201).json({
        status: 'OK',
        data: sktm,
      });
    } catch (err) {
      res.status(400).json({
        status: 'FAIL',
        messange: err.message,
      });
    }
  },

  async handleGetAllSktm(req, res) {
    try {
      const { data, count } = await sktmService.getAll();

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
      const sktm = await sktmService.getByPk(id);
      res.status(201).json({
        status: 'OK',
        data: sktm,
      });
    } catch (err) {
      res.status(400).json({
        status: 'FAIL',
        message: err.message,
      });
    }
  },

  async handleDeleteSktm(req, res) {
    try {
      const id = req.params.id;
      await sktmService.destroy(id);

      res.status(201).json({
        status: 'OK',
        message: 'skck successfully deleted',
      });
    } catch (err) {
      res.status(400).json({
        status: 'FAIL',
        message: err.message,
      });
    }
  },
};
