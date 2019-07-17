const db = require('../data/db');

module.exports = {
    find() {
        return db("schemes");
    },

    findById(id) {
        if (!id) {
            return null;
        }
        return db("schemes").where({ id }).first();
    }
};