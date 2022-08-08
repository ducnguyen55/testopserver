const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type, api_key');
    next();
});
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const Project = require('./routes/project');

app.use('/', Project);

app.use((req,res,next)=>{
    res.status(200).json({
        message:'Hello, Welcome my server API !!!!!!!!!'
    });
    next();
});

module.exports = app;