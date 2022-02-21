const ContactModel = require('../models/contacts.model.js');
const Validate = require('../validation/validate.js');
const lodash = require("lodash");
const {
    isEmpty
} = lodash;

const apiController = () => {}

apiController.getAll = (req, res) => {
    ContactModel.getAll((err, contacts) => {
        if (err) {
            res.send(err);
        } else {
            res.status(200).send(contacts);
            console.log("GET Contacts");
        }
        // console.log(contacts);
    })
}
apiController.get = (req, res) => {
    // res.status(200).send('Here');
    var id = req.params.id;
    // console.log(req);
    ContactModel.get(id, (err, contacts) => {
        if (err) {
            res.send(err);
        } else {
            res.status(200).send(contacts);
            console.log("GET Contact " + id);
        }
        // console.log(contacts);
    })
}

apiController.add = (req, res) => {
    var data = req.body;
    var errors = Validate.vali(data);
    if (!isEmpty(errors.errors)) {
        // console.log(errors);
        res.status(400).send(errors);
    } else {
        ContactModel.add(data, (err, status) => {
            if (err) {
                res.send(err);
            } else {
                if (status) {
                    res.status(200).send([{
                        status: true,
                        message: 'Data Added'
                    }]);
                    console.log("POST Contact Added");
                } else {
                    res.status(400).send([{
                        status: false,
                        message: 'Data Add Failed'
                    }]);
                }
            }
        })
    }
}

apiController.del = (req, res) => {
    var id = req.params.id;
    ContactModel.del(id, (err, status) => {
        if (err) {
            res.send(err);
        } else {
            if (status) {
                res.status(200).send({
                    status: true,
                    message: 'Data Deleted'
                });
                console.log("DELETE Contact Deleted");
            } else {
                res.status(400).send({
                    status: false,
                    message: 'Data Delete Failed'
                });
            }
        }
    })
}

apiController.upd = (req, res) => {
    var id = req.params.id;
    var data = req.body;
    var errors = Validate.vali(data);
    if (!isEmpty(errors.errors)) {
        res.status(400).send(errors);
    } else {
        ContactModel.upd(id, data, (err, status) => {
            if (err) {
                res.send(err);
            } else {
                if (status) {
                    res.status(200).send([{
                        status: true,
                        message: 'Data Updated'
                    }]);
                    console.log("PUT Contact Updated");
                } else {
                    res.status(400).send([{
                        status: false,
                        message: 'Data Update Failed'
                    }]);
                }
            }
        })
    }
}

apiController.notFound = (req, res) => {
    res.status(404).send('404 Not Found');
}

module.exports = apiController
// return apiController;
// export default apiController;