const dao = require('./base');

class ContactsDao {
    static async getList() {
        return dao.knex
            .select()
            .from('contacts');
    }
}

module.exports = ContactsDao;