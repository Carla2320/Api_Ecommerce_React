const express = require('express');
require("dotenv").config();
const bodyParser = require('body-parser');
const apiRouter = require('./routes/api');

const app = express();

require('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', apiRouter);

app.listen(3030, () =>{
    console.log('Server runing');
});