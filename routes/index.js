var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var contactsSchemaModel = require('../model/mongodbApp');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Contacts Page' });

});

router.get('/contacts', function (req, res) {
   contactsSchemaModel.find(function(err, contacts){
       console.log(contacts);
       console.log("err",err);
        res.send(contacts);

   })
});

router.post('/contacts', function (req, res) {
    (new contactsSchemaModel(req.body)).save(function (err, contacts) {
        if(err) res.status(500).json(err);
        else res.status(201).json(contacts);
    });
});

router.delete('/contacts/:id', function (req, res) {
  console.log(req.params.id);
    contactsSchemaModel.findByIdAndRemove(req.params.id, function (err, result) {
        if (err) res.status(500).json(err);
        else {
            res.status(200).json(result);
        }
    });
});

router.get('/contacts/:id', function(req, res){
    console.log(req.params.id);
    contactsSchemaModel.findById(req.params.id,function(err, contacts){
        if (err) res.status(500).json(err);
        else {
            res.status(200).json(contacts);
        }

    });

});

router.put('/contacts/:id', function(req, res){
    console.log(req.params.id);
    console.log(req.body.name);
    contactsSchemaModel.findByIdAndUpdate(req.params.id, req.body, function (err, res) {
    });

});


module.exports = router;
