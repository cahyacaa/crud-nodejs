var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({
    extended: false
}));
router.use(bodyParser.json());

var User = require('./user');
var verifyToken = require('../auth/verifytoken');
var {secret} = require('../config');


//JWT 

var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
const {inputvalidate}= require("../middlewareverifyinput")


//api method

//POST 
router.post('/signup', function (req, res) {    
    const { error } = inputvalidate(req.body);

    // throw validation errors
    if (error) return res.status(400).json({ error: error.details[0].message});
  
    var hashedpass = bcrypt.hashSync(req.body.password, 8);
    User.findOne({
        email: req.body.email
    },  (err, user)=> {
        if (user) {
            return res.status(401).send("Email is Exist!")
        } else if  (!user) {
            User.create({
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                password: hashedpass
            });
            res.status(200).send({
                status: true,
                message: "Data successfuly added to the database"
            })
        }else{
            if (err) {
                return res.status(500).send(err);
            };
        };
        
    });
});


router.post('/login', function (req, res) {
    User.findOne({
        email: req.body.email
    }, function (err, user) {
        
        if (!user) {
           return res.status(404).send("Email Not Found!")
        } else {
            let validationpass = bcrypt.compareSync(req.body.password, user.password);
            if (!validationpass) {
                res.status(401).send("Password is Wrong!");
            } else {
                var token = jwt.sign({
                    id: user._id
                }, secret, {
                    expiresIn: 86400
                });
                res.status(200).send({
                    auth: true,
                    token: token
                })
            };
        };
        if (err) return res.status(500).send(err);
    });
});


//GET Method


router.get('/profile', verifyToken, function (req, res, next) {

    User.findById(userId, {
        password: 0
    },  (err, user)=> {
        if (err) {
            res.status(500).send("Problem with Server");
        } else if (!user) {
            res.status(404).send("User Not Found!");
        };
        // next(user);
        res.status(200).send(user);
    });
});




router.get('/logout', function (req, res) {
    res.status(200).send({
        auth: false,
        token: null
    });
});

// DELETE Method


router.delete('/', function (req, res) {
    User.findOneAndDelete(req.params.name, (err, user)=> {
        if (err) return res.status(500).send("There was a problem deleting the user.");
        res.status(200).send("User " + user.name + " was deleted.");
    });
});


// //EDIT Method (PUT)

router.put('/:id', function (req, res) {
    User.findByIdAndUpdate(req.params.id, {
        new: true
    }, function (err, user) {
        if (err) {
            res.send("Problem with updating user!");
            return res.status(500)
        } else {
            res.status(200).send("User " + user.name + " was edited.");
        };
    });
});

module.exports = router;