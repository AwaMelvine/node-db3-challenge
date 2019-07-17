const db = require('../data/db');

module.exports = {
    find() {
        return db("schemes");
    },

    async findById(id) {
        if (!id) {
            return null;
        }
        const schemes = await db("schemes").where({ id }).first();
        return schemes;
    },

    async findSteps(id) {
        if (!id) {
            return null;
        }
        const steps = await db("steps").where({ scheme_id: id });
        return steps;
    }
};