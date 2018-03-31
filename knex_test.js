const ContactsDao = require('./dao/Contacts');

// ContactsDao.getList().then(response => {
//     console.log(response);
// });

(async () => {

    await ContactsDao.addContact({
        name: "John",
        lastname: "Doe",
        tel: "+998971234567",
        email: "test@mail.ru"
    });

    console.log(await ContactsDao.getList());

})();