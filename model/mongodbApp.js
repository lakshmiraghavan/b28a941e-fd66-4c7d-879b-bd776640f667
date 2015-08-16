/**
 * Created by lakshmi on 8/14/15.
 */
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', function (err) {
    if (err) console.log('could not connect to mongdb ... ');
    else console.log('connected to mongodb');
});
var contactsSchemaModel = mongoose.model('contacts', {
    name: String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    tel: {
        type: String,
        required: true
    }
}); // this will show up on the DB as contacts



module.exports = contactsSchemaModel;

