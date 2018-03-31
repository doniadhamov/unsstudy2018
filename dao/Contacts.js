const dao = require('./base');

class ContactsDao {
    static async addContact({ name, lastname, tel, email }) {
        return dao.knex
            .insert({ name, lastname, tel, email })
            .from('contacts');
    };

    static async getList() {
        return dao.knex
            .select()
            .from('contacts');
    }
}

module.exports = ContactsDao;