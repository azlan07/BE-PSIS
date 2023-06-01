const surekRepository = require('../repositories/surekRepository')

module.exports = {
    async findSurek(id){
        try{
            const surek = await surekRepository.findByUser(id)
            return {
                data : surek
            }
        }catch(err){
            throw err;
        }
    },
    async createSurek(reqBody){
        return surekRepository.createSurek(reqBody)
    },
    updateSurek(id, reqBody){
        return surekRepository.updateSurek(id, reqBody)
    }
}