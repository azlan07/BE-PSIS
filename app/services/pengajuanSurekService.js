const pengajuanSurekRepository = require('../repositories/pengajuanSurekRepository');
const cloudinary = require('../../config/cloudinary')

module.exports = {
  create(body, image) {
    const fileBase64 = image.buffer.toString("base64");
    const file = `data:${image.mimetype};base64,${fileBase64}`;

    cloudinary.uploader.upload(file, { folder: "image/psis/" }, (err, result) => {
      if (!!err) {
        console.log(err);
        return res.status(400).json({
          message: "Gagal Upload File!",
        });
      }
      body.image_kk = result.url;
      return pengajuanSurekRepository.create(body);
    });
  },

  update(id, body) {
    return pengajuanSurekRepository.update(id, body);
  },

  async getAll() {
    try {
      const pengajuanSurek = await pengajuanSurekRepository.getAll();
      const count = await pengajuanSurekRepository.getTotalCount();

      return {
        data: pengajuanSurek,
        count: count,
      };
    } catch (err) {
      return err;
    }
  },

  getByPk(id) {
    return pengajuanSurekRepository.getByPk(id);
  },

  destroy(id) {
    return pengajuanSurekRepository.destroy(id);
  },
};
