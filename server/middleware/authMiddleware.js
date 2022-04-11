const jwt = require('jsonwebtoken');
require('dotenv').config();

const authMiddleware = (req, res, next)=>{
    const tokenHeader = req.headers.authorization;

    if(!tokenHeader) return res.json('Unauthorized user 1');

    const accessToken = tokenHeader.replace('Bearer ', '');


    jwt.verify(accessToken, process.env.ACCESS_TOKEN_KEY, (err, decoded) => {
        if(err) return res.sendStatus(403);

        req.data = decoded;

        next()
    });
}

module.exports = authMiddleware;