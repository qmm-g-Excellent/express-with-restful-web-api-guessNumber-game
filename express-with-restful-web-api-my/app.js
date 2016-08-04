const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const route = require('./routes/route');

route.setRoute(app);

app.listen(3000,() =>{
    console.log('3000  listen success!');
})

module.exports = app;
