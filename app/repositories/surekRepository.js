const{Surek} = require('../models')

module.exports = {
    findByUser(id){
        return Surek.findAll({where: {user_id : id}})
    },
    createSurek(reqArgs){
        return Surek.create(reqArgs)
    },
    updateSurek(id, reqArgs){
        return Surek.update(reqArgs, {where: {
            user_id: id
        }})
    }
}