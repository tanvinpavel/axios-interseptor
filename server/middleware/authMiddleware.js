const jwt = require('jsonwebtoken');
require('dotenv').config();

const authMiddleware = (req, res, next)=>{
    const authorization = req.headers.authorization;

    if(!authorization) return res.json('Unauthorized user 1');

    const accessToken = authorization.replace('Bearer ');

    jwt.verify(accessToken, process.env.ACCESS_TOKEN_KEY, (err, decoded) => {
        if(err) return res.json('Unauthorized user 2');

        req.data = decoded;

        next()
    });
}

module.exports = authMiddleware;