const kabaRepository = require('../repositories/kabaRepository');
const cloudinary = require('../../config/cloudinary')

module.exports = {
  // create(body) {
  //   return kabaRepository.create(body);
  // },

  // create & upload for 1 image
  create(body, image) {
    const fileBase64 = image.buffer.toString("base64");
    const file = `data:${image.mimetype};base64,${fileBase64}`;

    cloudinary.uploader.upload(file, { folder: "image/psis/kaba" }, (err, result) => {
      if (!!err) {
        console.log(err);
        return res.status(400).json({
          message: "Gagal Upload File!",
        });
      }

      // Assuming you want to use the returned Cloudinary URL in the create method,
      // pass the 'result.url' value to the skckRepository.create() method
      body.image = result.url;
      return kabaRepository.create(body);
    });
  },

  update(id, body) {
    return kabaRepository.update(id, body);
  },

  async getAll() {
    try {
      const kaba = await kabaRepository.getAll();
      const count = await kabaRepository.getTotalCount();

      return {
        data: kaba,
        count: count,
      };
    } catch (err) {
      return err;
    }
  },

  getByPk(id) {
    return kabaRepository.getByPk(id);
  },

  destroy(id) {
    return kabaRepository.destroy(id);
  },
};
