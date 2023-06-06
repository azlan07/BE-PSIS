const surekService = require('../../../services/surekService')

module.exports = {
    async addSurekSkck(req, res){
        try{
            const now = new Date()
            await surekService.createSurek({user_id: req.body.user_id, name: req.body.name, date: now,  status: "diperiksa", layanan: "skck"})
        }catch(err){
            res.status(401).json({
                status: "ERROR",
                message: err.message
            })
        }
    },
    async addSurekSktm(req, res){
        try{
            const now = new Date()
            await surekService.createSurek({user_id: req.body.user_id, name: req.body.name, date: now,  status: "diperiksa", layanan: "sktm"})
        }catch(err){
            res.status(401).json({
                status: "ERROR",
                message: err.message
            })
        }
    },

    async handleUpdateSurek(req, res) {
        try {
          const body = req.body;
          const id = req.params.id;
    
          const surek = await surekService.update(id, body);
    
          res.status(201).json({
            status: 'OK',
            data: surek,
          });
        } catch (err) {
          res.status(400).json({
            status: 'FAIL',
            messange: err.message,
          });
        }
      },
    
      async handleGetAllSurek(req, res) {
        try {
          const { data, count } = await surekService.getAll();
    
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
          const surek = await surekService.getByPk(id);
          res.status(201).json({
            status: 'OK',
            data: surek,
          });
        } catch (err) {
          res.status(400).json({
            status: 'FAIL',
            message: err.message,
          });
        }
      },
    
      async handleDeleteSurek(req, res) {
        try {
          const id = req.params.id;
          await surekService.destroy(id);
    
          res.status(201).json({
            status: 'OK',
            message: 'surek successfully deleted',
          });
        } catch (err) {
          res.status(400).json({
            status: 'FAIL',
            message: err.message,
          });
        }
      },
}