const surekRepository = require('../repositories/surekRepository')

module.exports = {
    // async findSurek(id){
    //     try{
    //         const surek = await surekRepository.findByUser(id)
    //         return {
    //             data : surek
    //         }
    //     }catch(err){
    //         throw err;
    //     }
    // },
    async createSurek(reqBody) {
        return surekRepository.createSurek(reqBody)
    },
    update(id, body) {
        return surekRepository.update(id, body);
    },

    async getAll() {
        try {
            const surek = await surekRepository.getAll();
            const count = await surekRepository.getTotalCount();

            return {
                data: surek,
                count: count,
            };
        } catch (err) {
            return err;
        }
    },

    getByPk(id) {
        return surekRepository.getByPk(id);
    },

    destroy(id) {
        return surekRepository.destroy(id);
    },
}