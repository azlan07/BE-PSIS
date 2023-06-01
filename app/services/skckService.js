const skckRepository = require('../repositories/skckRepository');
const cloudinary = require('../../config/cloudinary')

module.exports = {
  create(body) {
    return skckRepository.create(body);
  },

  //create & upload for 1 image
  // create(body, imageKtp, imageKk) {
  //   const fileBase64 = imageKtp.buffer.toString("base64");
  //   const file = `data:${imageKtp.mimetype};base64,${fileBase64}`;

  //   cloudinary.uploader.upload(file, { folder: "image/psis/skck" }, (err, result) => {
  //     if (!!err) {
  //       console.log(err);
  //       return res.status(400).json({
  //         message: "Gagal Upload File!",
  //       });
  //     }

  //     // Assuming you want to use the returned Cloudinary URL in the create method,
  //     // pass the 'result.url' value to the skckRepository.create() method
  //     body.imageKtp = result.url;
  //     return skckRepository.create(body);
  //   });
  // },

  update(id, body) {
    return skckRepository.update(id, body);
  },

  async getAll() {
    try {
      const skck = await skckRepository.getAll();
      const count = await skckRepository.getTotalCount();

      return {
        data: skck,
        count: count,
      };
    } catch (err) {
      return err;
    }
  },

  getByPk(id) {
    return skckRepository.getByPk(id);
  },

  destroy(id) {
    return skckRepository.destroy(id);
  },
};
