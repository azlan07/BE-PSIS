const express = require('express');
const controllers = require('../app/controllers');
const cloudStorage = require('./cloudStorage');

const apiRouter = express.Router();

//tes
const cloudinary = require('./cloudinary')
const multer = require('multer');
const fs = require('fs');

const upload = multer({ dest: 'uploads/' });

// Endpoint untuk mengunggah gambar
apiRouter.post('/upload', upload.fields([
    { name: 'imageKtp', maxCount: 1 },
    { name: 'imageKk', maxCount: 1 }
]),
    async (req, res) => {
        try {
            const { imageKtp, imageKk } = req.files;

            const uploadImage = async (file, fieldName) => {
                const result = await cloudinary.uploader.upload(file[0].path, {
                    folder: 'tes' // Nama folder di Cloudinary
                });
                const imageUrl = result.secure_url;

                // Hapus file lokal setelah diunggah ke Cloudinary
                fs.unlinkSync(file[0].path);

                return { fieldName, imageUrl };
            };

            const [uploadedKtp, uploadedKk] = await Promise.all([
                uploadImage(imageKtp, 'imageKtp'),
                uploadImage(imageKk, 'imageKk')
            ]);

            // const urls = {
            //     [uploadedKtp.fieldName]: uploadedKtp.imageUrl,
            //     [uploadedKk.fieldName]: uploadedKk.imageUrl
            // };

            const linkKtp = uploadedKtp.imageUrl
            const linkKk = uploadedKk.imageUrl

            // Panggil fungsi handleCreateSkck dengan parameter
            await controllers.api.v1.skckController.handleCreateSkck(req, res, linkKtp, linkKk);
            // console.log(linkKtp, linkKk);
        } catch (error) {
            console.error('Error uploading images:', error);
            res.status(500).json({ error: 'Failed to upload images' });
        }
    });
//

apiRouter.get('/', controllers.api.main.handleGetRoot);
//Authentication
//Login
apiRouter.post('/api/v1/login', controllers.api.v1.authController.handleLogin);
//Register
apiRouter.post('/api/v1/register', controllers.api.v1.authController.handleRegister);
//Update Users
apiRouter.put('/api/v1/users/:id', cloudStorage.single('image'), controllers.api.v1.userController.update);
//Get User by Id
apiRouter.get('/api/v1/users/:id', controllers.api.v1.userController.show);
//Whoami
apiRouter.get('/api/v1/whoami', controllers.api.v1.authController.authorize, controllers.api.v1.authController.whoAmI);

//Skck
//start endpoint for 2 images
apiRouter.post('/api/v1/createskck', upload.fields([
    { name: 'imageKtp', maxCount: 1 },
    { name: 'imageKk', maxCount: 1 }
]),
    async (req, res) => {
        try {
            const { imageKtp, imageKk } = req.files;

            const uploadImage = async (file, fieldName) => {
                const result = await cloudinary.uploader.upload(file[0].path, {
                    folder: 'image/psis/skck' // Nama folder di Cloudinary
                });
                const imageUrl = result.secure_url;

                // Hapus file lokal setelah diunggah ke Cloudinary
                fs.unlinkSync(file[0].path);

                return { fieldName, imageUrl };
            };

            const [uploadedKtp, uploadedKk] = await Promise.all([
                uploadImage(imageKtp, 'imageKtp'),
                uploadImage(imageKk, 'imageKk')
            ]);

            // const urls = {
            //     [uploadedKtp.fieldName]: uploadedKtp.imageUrl,
            //     [uploadedKk.fieldName]: uploadedKk.imageUrl
            // };

            const linkKtp = uploadedKtp.imageUrl
            const linkKk = uploadedKk.imageUrl

            // Panggil fungsi handleCreateSkck
            await controllers.api.v1.skckController.handleCreateSkck(req, res, linkKtp, linkKk);
            // console.log(linkKtp, linkKk);

            // Panggil fungsi addSurek
            await controllers.api.v1.surekController.addSurekSkck(req, res);

        } catch (error) {
            console.error('Error uploading images:', error);
            res.status(500).json({ error: 'Failed to upload images' });
        }
    });
//end endpoint for 2 images

//for 1 image
// apiRouter.post('/api/v1/createskck', cloudStorage.single('imageSkck'),
// controllers.api.v1.skckController.handleCreateSkck);

apiRouter.put('/api/v1/skck/:id', controllers.api.v1.skckController.handleUpdateSkck);
apiRouter.get('/api/v1/skcks', controllers.api.v1.skckController.handleGetAllSkck);
apiRouter.get('/api/v1/skck/:id', controllers.api.v1.skckController.handleGetByPk);
apiRouter.delete('/api/v1/skck/:id', controllers.api.v1.skckController.handleDeleteSkck);

//Sktm
//start endpoint for 2 images
apiRouter.post('/api/v1/createsktm', upload.fields([
    { name: 'imageKtp', maxCount: 1 },
    { name: 'imageKk', maxCount: 1 },
    { name: 'imageRmhDpn', maxCount: 1 },
    { name: 'imageRmhSpg', maxCount: 1 },
    { name: 'imageRmhBlk', maxCount: 1 }
]),
    async (req, res) => {
        try {
            const { imageKtp, imageKk, imageRmhDpn, imageRmhSpg, imageRmhBlk } = req.files;

            const uploadImage = async (file, fieldName) => {
                const result = await cloudinary.uploader.upload(file[0].path, {
                    folder: 'image/psis/sktm' // Nama folder di Cloudinary
                });
                const imageUrl = result.secure_url;

                // Hapus file lokal setelah diunggah ke Cloudinary
                fs.unlinkSync(file[0].path);

                return { fieldName, imageUrl };
            };

            const [uploadedKtp, uploadedKk, uploadedRmhDpn, uploadedRmhSpg, uploadedRmhBlk] = await Promise.all([
                uploadImage(imageKtp, 'imageKtp'),
                uploadImage(imageKk, 'imageKk'),
                uploadImage(imageRmhDpn, 'imageRmhDpn'),
                uploadImage(imageRmhSpg, 'imageRmhSpg'),
                uploadImage(imageRmhBlk, 'imageRmhBlk')
            ]);

            // const urls = {
            //     [uploadedKtp.fieldName]: uploadedKtp.imageUrl,
            //     [uploadedKk.fieldName]: uploadedKk.imageUrl
            // };

            const linkKtp = uploadedKtp.imageUrl
            const linkKk = uploadedKk.imageUrl
            const linkRmhDpn = uploadedRmhDpn.imageUrl
            const linkRmhSpg = uploadedRmhSpg.imageUrl
            const linkRmhBlk = uploadedRmhBlk.imageUrl

            // Panggil fungsi handleCreateSkck
            await controllers.api.v1.sktmController.handleCreateSktm(req, res, linkKtp, linkKk, linkRmhDpn, linkRmhSpg, linkRmhBlk);
            // console.log(linkKtp, linkKk);

            // Panggil fungsi addSurek
            await controllers.api.v1.surekController.addSurekSktm(req, res);

        } catch (error) {
            console.error('Error uploading images:', error);
            res.status(500).json({ error: 'Failed to upload images' });
        }
    });
//end endpoint for 2 images

// apiRouter.post('/api/v1/createsktm', controllers.api.v1.sktmController.handleCreateSktm);
apiRouter.put('/api/v1/sktm/:id', controllers.api.v1.sktmController.handleUpdateSktm);
apiRouter.get('/api/v1/sktms', controllers.api.v1.sktmController.handleGetAllSktm);
apiRouter.get('/api/v1/sktm/:id', controllers.api.v1.sktmController.handleGetByPk);
apiRouter.delete('/api/v1/sktm/:id', controllers.api.v1.sktmController.handleDeleteSktm);

//Lapor
apiRouter.post('/api/v1/createlapor', controllers.api.v1.laporController.handleCreateLapor);
apiRouter.put('/api/v1/lapor/:id', controllers.api.v1.laporController.handleUpdateLapor);
apiRouter.get('/api/v1/lapors', controllers.api.v1.laporController.handleGetAllLapor);
apiRouter.get('/api/v1/lapor/:id', controllers.api.v1.laporController.handleGetByPk);
apiRouter.delete('/api/v1/lapor/:id', controllers.api.v1.laporController.handleDeleteLapor);

//Kaba
apiRouter.post('/api/v1/createkaba', cloudStorage.single('image'),
    controllers.api.v1.kabaController.handleCreateKaba);
// apiRouter.post('/api/v1/createkaba', controllers.api.v1.kabaController.handleCreateKaba);
apiRouter.put('/api/v1/kaba/:id', controllers.api.v1.kabaController.handleUpdateKaba);
apiRouter.get('/api/v1/kabas', controllers.api.v1.kabaController.handleGetAllKaba);
apiRouter.get('/api/v1/kaba/:id', controllers.api.v1.kabaController.handleGetByPk);
apiRouter.delete('/api/v1/kaba/:id', controllers.api.v1.kabaController.handleDeleteKaba);

apiRouter.get('/surek/:id', controllers.api.v1.surekController.showSurek, controllers.api.v1.surekController.updateSurek)
// apiRouter.post('/add-surek', controllers.api.v1.surekController.addSurek)

//For Admin
//List Users
apiRouter.get('/api/v1/users', controllers.api.v1.authController.authorizeAdmin, controllers.api.v1.userController.list);
//Delete User
apiRouter.delete('/api/v1/users/:id', controllers.api.v1.authController.authorizeAdmin, controllers.api.v1.userController.destroy);

apiRouter.use(controllers.api.main.onLost);
apiRouter.use(controllers.api.main.onError);

module.exports = apiRouter;
