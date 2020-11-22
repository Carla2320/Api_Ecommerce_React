const express = require('express');
require("dotenv").config();
const cors = require('cors');
const bodyParser = require('body-parser');
const apiRouter = require('./routes/api');

const app = express();

require('./db');

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', apiRouter);

app.listen(process.env.PORT, () =>{
    console.log('Server runing');
});