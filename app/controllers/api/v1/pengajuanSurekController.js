const pengajuanSurekService = require('../../../services/pengajuanSurekService');

module.exports = {
  async handleCreatePengajuanSurek(req, res) {
    try {
      const image = req.file;
      const body = req.body;
      // console.log("image",image);
      // console.log("body", body);
      const pengajuanSurek = await pengajuanSurekService.create(body, image);

      res.status(201).json({
        status: 'OK',
        data: pengajuanSurek,
      });
    } catch (err) {
      res.status(400).json({
        status: 'FAIL',
        message: err.message,
      });
    }
  },

  async handleUpdatePengajuansurek(req, res) {
    try {
      const body = req.body;
      const id = req.params.id;

      const pengajuanSurek = await pengajuanSurekService.update(id, body);

      res.status(201).json({
        status: 'OK',
        data: pengajuanSurek,
      });
    } catch (err) {
      res.status(400).json({
        status: 'FAIL',
        messange: err.message,
      });
    }
  },

  async handleGetAllPengajuanSurek(req, res) {
    try {
      const { data, count } = await pengajuanSurekService.getAll();

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
  async handleGetPengajuanSurekByPk(req, res) {
    try {
      const id = req.params.id;
      const pengajuanSurek = await pengajuanSurekService.getByPk(id);
      res.status(201).json({
        status: 'OK',
        data: pengajuanSurek,
      });
    } catch (err) {
      res.status(400).json({
        status: 'FAIL',
        message: err.message,
      });
    }
  },

  async handleDeletePengajuanSurek(req, res) {
    try {
      const id = req.params.id;
      await pengajuanSurekService.destroy(id);

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
