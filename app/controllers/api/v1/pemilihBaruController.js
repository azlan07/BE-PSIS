const pemilihBaruService = require('../../../services/pemilihBaruService');

module.exports = {
    async handleCreatePemilihBaru(req, res) {
        try {
            const image = req.file;
            req.body.status = 'diajukan'
            const body = req.body;
            const pemilihBaru = await pemilihBaruService.create(body, image);

            res.status(201).json({
                status: 'OK',
                data: pemilihBaru,
            });
        } catch (err) {
            res.status(400).json({
                status: 'FAIL',
                message: err.message,
            });
        }
    },

    async handleUpdatePemilihBaru(req, res) {
        try {
            const body = req.body;
            const id = req.params.id;
            const status = 'didaftarkan';
            body.status = status;

            const pemilihBaru = await pemilihBaruService.update(id, body);

            res.status(201).json({
                status: 'OK',
                data: pemilihBaru,
            });
        } catch (err) {
            res.status(400).json({
                status: 'FAIL',
                messange: err.message,
            });
        }
    },

    async handleGetAllPemilihBaru(req, res) {
        try {
            const { data, count } = await pemilihBaruService.getAll();

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
            const pemilihBaru = await pemilihBaruService.getByPk(id);
            res.status(201).json({
                status: 'OK',
                data: pemilihBaru,
            });
        } catch (err) {
            res.status(400).json({
                status: 'FAIL',
                message: err.message,
            });
        }
    },

    async handleDeletePemilihBaru(req, res) {
        try {
            const id = req.params.id;
            await pemilihBaruService.destroy(id);

            res.status(201).json({
                status: 'OK',
                message: 'pemilihBaru successfully deleted',
            });
        } catch (err) {
            res.status(400).json({
                status: 'FAIL',
                message: err.message,
            });
        }
    },
};
