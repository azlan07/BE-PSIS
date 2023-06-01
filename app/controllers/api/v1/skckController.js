const skckService = require('../../../services/skckService');

module.exports = {
  async handleCreateSkck(req, res, linkKtp, linkKk) {
    try {
      req.body.imageKtp = linkKtp
      req.body.imageKk = linkKk
      const body = req.body;
      const skck = await skckService.create(body);

      res.status(201).json({
        status: 'OK',
        data: skck,
      });
    } catch (err) {
      res.status(400).json({
        status: 'FAIL',
        message: err.message,
      });
    }
  },

  async handleUpdateSkck(req, res) {
    try {
      const body = req.body;
      const id = req.params.id;

      const skck = await skckService.update(id, body);

      res.status(201).json({
        status: 'OK',
        data: skck,
      });
    } catch (err) {
      res.status(400).json({
        status: 'FAIL',
        messange: err.message,
      });
    }
  },

  async handleGetAllSkck(req, res) {
    try {
      const { data, count } = await skckService.getAll();

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
      const skck = await skckService.getByPk(id);
      res.status(201).json({
        status: 'OK',
        data: skck,
      });
    } catch (err) {
      res.status(400).json({
        status: 'FAIL',
        message: err.message,
      });
    }
  },

  async handleDeleteSkck(req, res) {
    try {
      const id = req.params.id;
      await skckService.destroy(id);

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
