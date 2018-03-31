const ContactsDao = require('./dao/Contacts');

// ContactsDao.getList().then(response => {
//     console.log(response);
// });

(async () => {
    console.log(await ContactsDao.getList())
})();