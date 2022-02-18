import ContactModel from '../models/contacts.model.js';
import Validate from '../validation/validate.js';
import lodash from "lodash";
const {
    isEmpty
} = lodash;

export const getAll = (req, res) => {
    ContactModel.getAll((err, contacts) => {
        if (err) {
            res.send(err);
        } else {
            res.status(200).send(contacts);
        }
        // console.log(contacts);
    })
}
export const get = (req, res) => {
    // res.status(200).send('Here');
    var id = req.params.id;
    // console.log(req);
    ContactModel.get(id, (err, contacts) => {
        if (err) {
            res.send(err);
        } else {
            res.status(200).send(contacts);
        }
        // console.log(contacts);
    })
}

export const add = (req, res) => {
    var data = req.body;
    var errors = Validate.add(data);
    if (!isEmpty(errors.errors)) {
        console.log(errors);
        res.status(400).send(errors);
    } else {
        res.status(200).send(data);
    }
}

export const notFound = (req, res) => {
    res.status(404).send('404 Not Found');
}