const usuarios = require('./routes/usuarios');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');
const app = express();


app.use(express.json());

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'express.log'), { flags: 'a' })
app.use(morgan('combined', { stream: accessLogStream }));

app.use('/usuarios', usuarios);
app.listen(3000)