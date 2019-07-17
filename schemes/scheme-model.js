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
        const steps = await db.select('steps.id', 'schemes.scheme_name', 'steps.step_number', 'steps.instructions')
            .from('schemes')
            .where('steps.scheme_id', id)
            .innerJoin('steps', 'steps.scheme_id', 'schemes.id')
        return steps;
    },

    async add(scheme) {
        const [id] = await db("schemes").insert(scheme);
        return this.findById(id);
    }
};