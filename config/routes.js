const express = require('express');
const controllers = require('../app/controllers');
const cloudStorage = require('./cloudStorage');

const apiRouter = express.Router();

//tes
const cloudinary = require('./cloudinary')
const multer = require('multer');
const fs = require('fs');
const path = require('path');

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

//Sktm
//start endpoint for 2 images
apiRouter.post('/api/v1/createsktm', upload.fields([
    { name: 'imageKk', maxCount: 1 },
    { name: 'imageKtpAyah', maxCount: 1 },
    { name: 'imageKtpIbu', maxCount: 1 }
]),
    async (req, res) => {
        try {
            const { imageKk, imageKtpAyah, imageKtpIbu } = req.files;

            const uploadImage = async (file, fieldName) => {
                const result = await cloudinary.uploader.upload(file[0].path, {
                    folder: 'image/psis/sktm' // Nama folder di Cloudinary
                });
                const imageUrl = result.secure_url;

                // Hapus file lokal setelah diunggah ke Cloudinary
                fs.unlinkSync(file[0].path);

                return { fieldName, imageUrl };
            };

            const [uploadedKk, uploadedKtpAyah, uploadedKtpIbu] = await Promise.all([
                uploadImage(imageKk, 'imageKk'),
                uploadImage(imageKtpAyah, 'imageKtpAyah'),
                uploadImage(imageKtpIbu, 'imageRmhDpnIbu')
            ]);

            // const urls = {
            //     [uploadedKtp.fieldName]: uploadedKtp.imageUrl,
            //     [uploadedKk.fieldName]: uploadedKk.imageUrl
            // };

            const linkKk = uploadedKk.imageUrl
            const linkKtpAyah = uploadedKtpAyah.imageUrl
            const linkKtpIbu = uploadedKtpIbu.imageUrl

            // Panggil fungsi handleCreateSkck
            await controllers.api.v1.sktmController.handleCreateSktm(req, res, linkKk, linkKtpAyah, linkKtpIbu);
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

//For Surek
apiRouter.get('/api/v1/sureks', controllers.api.v1.surekController.handleGetAllSurek);
apiRouter.put('/api/v1/surekdiperiksa/:id', controllers.api.v1.surekController.handleUpdateSurekDiperiksa);
apiRouter.put('/api/v1/surekditeruskan/:id', controllers.api.v1.surekController.handleUpdateSurekDiteruskan);
apiRouter.put('/api/v1/surekselesai/:id', controllers.api.v1.surekController.handleUpdateSurekSelesai);
apiRouter.put('/api/v1/surekgagal/:id', controllers.api.v1.surekController.handleUpdateSurekGagal);

apiRouter.put('/api/v1/surek/:id', controllers.api.v1.surekController.handleUpdateSurek);
apiRouter.get('/api/v1/surek/:id', controllers.api.v1.surekController.handleGetByPk);
apiRouter.delete('/api/v1/surek/:id', controllers.api.v1.surekController.handleDeleteSurek);

//for-pengajuan-surek
//--start--//
apiRouter.post('/api/v1/create-pengajuan', cloudStorage.single('image_kk'),
    async (req, res) => {
        try {
            await controllers.api.v1.pengajuanSurekController.handleCreatePengajuanSurek(req, res);
            await controllers.api.v1.surekController.addSurek(req, res);
        } catch (error) {
            console.error('Error', error);
            res.status(500).json({ error: 'Failed' });
        }
    });
apiRouter.put('/api/v1/pengajuan/:id', controllers.api.v1.pengajuanSurekController.handleUpdatePengajuansurek);
apiRouter.get('/api/v1/pengajuan', controllers.api.v1.pengajuanSurekController.handleGetAllPengajuanSurek);
apiRouter.get('/api/v1/pengajuan/:id', controllers.api.v1.pengajuanSurekController.handleGetAllPengajuanSurek);
apiRouter.delete('/api/v1/pengajuan/:id', controllers.api.v1.pengajuanSurekController.handleDeletePengajuanSurek);
//--end--//

//for-penduduk
//--start--//
apiRouter.post('/api/v1/create-penduduk', controllers.api.v1.pendudukController.handleCreatePenduduk);
apiRouter.put('/api/v1/penduduk/:id', controllers.api.v1.pendudukController.handleUpdatePenduduk);
apiRouter.get('/api/v1/penduduk', controllers.api.v1.pendudukController.handleGetAllPenduduk);
apiRouter.get('/api/v1/penduduk/:id', controllers.api.v1.pendudukController.handleCreatePenduduk);
apiRouter.delete('/api/v1/penduduk/:id', controllers.api.v1.pendudukController.handleDeletePenduduk);
//--end--//

//for-transparansi
//--start--//
apiRouter.post('/api/v1/create-transparansi', controllers.api.v1.transparansiController.handleCreateTransparansi);
apiRouter.put('/api/v1/transparansi/:id', controllers.api.v1.transparansiController.handleUpdateTransparansi);
apiRouter.get('/api/v1/transparansi', controllers.api.v1.transparansiController.handleGetAllTransparansi);
apiRouter.get('/api/v1/transparansi/:id', controllers.api.v1.transparansiController.handleGetTransparansiByPk);
apiRouter.delete('/api/v1/transparansi/:id', controllers.api.v1.transparansiController.handleDeleteTransparansi);
//--end--//

//for-file
//--start--//
apiRouter.post('/api/v1/file-surat', controllers.api.v1.fileSuratController.handleCreateFileSurat);
apiRouter.put('/api/v1/file-surat/:id', controllers.api.v1.fileSuratController.handleUpdateFileSurat);
apiRouter.get('/api/v1/file-surat', controllers.api.v1.fileSuratController.handleGetAllFileSurat);
apiRouter.get('/api/v1/file-surat/:id', controllers.api.v1.fileSuratController.handleGetFileSuratByPk);
apiRouter.delete('/api/v1/file-surat/:id', controllers.api.v1.fileSuratController.handleDeleteFileSurat);
//--end--//


//For Admin
//List Users
apiRouter.get('/api/v1/users', controllers.api.v1.authController.authorizeAdmin, controllers.api.v1.userController.list);
//Delete User
apiRouter.delete('/api/v1/users/:id', controllers.api.v1.authController.authorizeAdmin, controllers.api.v1.userController.destroy);

apiRouter.use(controllers.api.main.onLost);
apiRouter.use(controllers.api.main.onError);

module.exports = apiRouter;
