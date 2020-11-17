var jwt = require('jsonwebtoken');
var {secret} = require('../config');



function verifyToken(req, res, next) {
    var token = req.headers["auth-token"];
    if (!token) return res.status(401).send({
        auth: false,
        message: 'No token provided.',
        
    });

    jwt.verify(token, secret, function (err, decoded) {
        if (err) return res.status(500).json({
            auth: false,
            message: 'Failed to authenticate token.',
            token:token
        })
        userId=decoded.id;
        next();
    });
}


module.exports= verifyToken;