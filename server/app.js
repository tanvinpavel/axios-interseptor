const express = require('express');
const cors = require('cors');
require('dotenv').config();
const jwt = require('jsonwebtoken');

const app = express();

const whitelist = ['http://localhost:3001', 'http://127.0.0.1:9090'];

const option = {
    origin: (origin, callback) => {
        if(whitelist.indexOf(origin) !== -1){
            callback(null, true);
        }else{
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    optionSuccessStatus: 200
}

const middleware = [
    express.json(),
    cors(option)
]

app.use(middleware);

const users = [
    {
        id: 1,
        name: 'emon',
        email: 'emon@gmail.com',
        password: '12345',
        role: 'admin'
    },
    {
        id: 2,
        name: 'moin',
        email: 'moin@gmail.com',
        password: '12345',
        role: 'user'
    }
]

app.get('/', (req, res) => {
    res.send('this is express');
});

app.post('/login', (req, res) => {
    const {email, pass} = req.body;

    const data = users.find(user => user.email === email);

    console.log(data, data.password, pass);

    if(!data) return res.json('wrong email and password 1');

    if(data.password !== pass) return res.json('wrong email and password 2');

    const accessToken = jwt.sign({
        id: data.id,
        name: data.name,
        role: data.role
    }, process.env.ACCESS_TOKEN_KEY, {
        expiresIn: '15m'
    });

    const refreshToken = jwt.sign({
        id: data.id,
        name: data.name,
        role: data.role
    }, process.env.ACCESS_TOKEN_KEY, {
        expiresIn: '1d'
    });

    //set refresh token in cookie
    res.cookie('jwt', refreshToken, {httpOnly: true, maxAge: 24*60*60*1000});
    
    res.status(200).json({...data, accessToken});
});

app.listen(process.env.SERVER_PORT, ()=>{
    console.log('Server is running in port', process.env.SERVER_PORT);
});
