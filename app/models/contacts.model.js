const pool = require('../../database/connection.js');
const tableName = 'contact_db';
const primaryKey = 'id';

var Contact = (contact) => {
    this.id = contact.id;
    this.name = contact.name;
    this.email = contact.email;
    this.phone = contact.phone;
}

// Contact.uniqEmail = (email, result) => {
//     var Qstr = `SELECT * FROM ${tableName} WHERE email = "${email}"`;
//     pool.query(Qstr, (err, rows) => {
//         if (err) {
//             console.log('Error while getting Records ', err);
//             let Err = [{
//                 status: false,
//                 message: err.sqlMessage
//             }];
//             result(Err, null);
//         } else {
//             var status;
//             if (rows.length > 0) {
//                 status = true;
//             } else {
//                 status = false;
//             }
//             // result(null, rows);
//             result(null, status);
//         }
//     })
// }

Contact.getAll = (result) => {
    var Qstr = `SELECT * FROM ${tableName} ORDER BY ${primaryKey} DESC`;
    pool.query(Qstr, (err, rows) => {
        if (err) {
            console.log('Error while getting Records ', err);
            let Err = {
                status: false,
                message: err.sqlMessage
            };
            result(Err, null);
        } else {
            result(null, rows);
        }
    })
}

Contact.get = (id, result) => {
    if (id == 0) {
        var Qstr = `SELECT * FROM ${tableName}  ORDER BY ${primaryKey} DESC`;
    } else {
        var Qstr = `SELECT * FROM ${tableName} WHERE ${primaryKey} = ${id}`;
    }
    pool.query(Qstr, (err, rows) => {
        if (err) {
            console.log('Error while getting Records ', err);
            let Err = {
                status: false,
                message: err.sqlMessage
            };
            result(Err, null);
        } else {
            result(null, rows);
        }
    })
}

Contact.add = (data, result) => {
    var name = data.name;
    var email = data.email;
    var phone = data.phone;
    var Qstr = `INSERT INTO ${tableName} (name,email,phone) VALUES ('${name}','${email}',${phone})`;
    pool.query(Qstr, (err, rows) => {
        if (err) {
            console.log('Error while getting Records ', err);
            let Err = {
                status: false,
                message: err.sqlMessage
            };
            result(Err, null);
        } else {
            result(null, true);
        }
    })
}

Contact.del = (id, result) => {
    var Qstr = `DELETE FROM ${tableName} WHERE ${primaryKey} = ${id}`;
    pool.query(Qstr, (err, rows) => {
        if (err) {
            console.log('Error while getting Records ', err);
            let Err = {
                status: false,
                message: err.sqlMessage
            };
            result(Err, null);
        } else {
            result(null, true);
        }
    })
}

Contact.upd = (id, data, result) => {
    var name = data.name;
    var email = data.email;
    var phone = data.phone;
    var Qstr = `UPDATE ${tableName} SET name='${name}',email='${email}',phone=${phone} WHERE ${primaryKey}=${id}`;
    pool.query(Qstr, (err, rows) => {
        if (err) {
            console.log('Error while getting Records ', err);
            let Err = {
                status: false,
                message: err.sqlMessage
            };
            result(Err, null);
        } else {
            result(null, true);
        }
    })
}

Contact.search = (str, result) => {
    var Qstr = `SELECT * FROM ${tableName} WHERE name LIKE '%${str}%' OR email LIKE '%${str}%' OR phone LIKE '%${str}%' ORDER BY ${primaryKey} DESC`;
    pool.query(Qstr, (err, rows) => {
        if (err) {
            console.log('Error while getting Records ', err);
            let Err = {
                status: false,
                message: err.sqlMessage
            };
            result(Err, null);
        } else {
            result(null, rows);
        }
    })
}

module.exports = Contact
// export default Contact;
// return Contact;