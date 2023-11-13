const fileSuratService = require('../../../services/fileSuratService');

module.exports = {
  async handleCreateFileSurat(req, res) {
    try {
      const body = req.body;
      const fileSurat = await fileSuratService.create(body);

      res.status(201).json({
        status: 'OK',
        data: fileSurat,
      });
    } catch (err) {
      res.status(400).json({
        status: 'FAIL',
        message: err.message,
      });
    }
  },

  async handleUpdateFileSurat(req, res) {
    try {
      const body = req.body;
      const id = req.params.id;

      const fileSurat = await fileSuratService.update(id, body);

      res.status(201).json({
        status: 'OK',
        data: fileSurat,
      });
    } catch (err) {
      res.status(400).json({
        status: 'FAIL',
        messange: err.message,
      });
    }
  },

  async handleGetAllFileSurat(req, res) {
    try {
      const { data, count } = await fileSuratService.getAll();

      res.status(200).json({
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
  async handleGetFileSuratByPk(req, res) {
    try {
      const id = req.params.id;
      const fileSurat = await fileSuratService.getByPk(id);
      res.status(201).json({
        status: 'OK',
        data: fileSurat,
      });
    } catch (err) {
      res.status(400).json({
        status: 'FAIL',
        message: err.message,
      });
    }
  },

  async handleDeleteFileSurat(req, res) {
    try {
      const id = req.params.id;
      await fileSuratService.destroy(id);

      res.status(201).json({
        status: 'OK',
        message: 'file successfully deleted',
      });
    } catch (err) {
      res.status(400).json({
        status: 'FAIL',
        message: err.message,
      });
    }
  },
};
