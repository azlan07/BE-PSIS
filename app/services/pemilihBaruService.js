const pemilihBaruRepository = require('../repositories/pemilihBaruRepository');
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
      return pemilihBaruRepository.create(body);
    });
  },

  update(id, body) {
    return pemilihBaruRepository.update(id, body);
  },

  async getAll() {
    try {
      const pemilihBaru = await pemilihBaruRepository.getAll();
      const count = await pemilihBaruRepository.getTotalCount();

      return {
        data: pemilihBaru,
        count: count,
      };
    } catch (err) {
      return err;
    }
  },

  getByPk(id) {
    return pemilihBaruRepository.getByPk(id);
  },

  destroy(id) {
    return pemilihBaruRepository.destroy(id);
  },
};
