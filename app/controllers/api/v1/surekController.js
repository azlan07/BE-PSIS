const surekService = require('../../../services/surekService')

module.exports = {
    async showSurek(req, res, next){
        try{
            await surekService.findSurek(req.params.id)
            .then(({data}) => {
                if(data == null || data == undefined || data == ''){
                    return res.status(404).json({
                        status: "FAIL",
                        message: "Belum Ada Notifikasi"
                    }) 
                }else{
                    res.status(200).json({
                        status: "OK",
                        data: data
                    })
                    next()
                }
            })
        }catch(err){
            return res.status(401).json({
                status: "ERROR",
                message: err.message
            })
        }
    },

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

    async updateSurek(req, res){
        try{
            await surekService.updateSurek(req.params.id,{
                status: "read"
            })
        }catch(err){
            return res.status(401).json({
                status: "ERROR",
                message: err.message
            })
        }
    }
}