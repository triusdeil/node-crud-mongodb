const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan')
const mongoose = require('mongoose')
//import routes
const routes = require('./routes/routes')

//connecting to db
mongoose.connect('mongodb://localhost/crud-mongo',{useNewUrlParser: true, useUnifiedTopology: true})
    .then(db => console.log('db connected'))
    .catch(err => console.log(err));

//settings
app.set('port', process.env.PORT || 4000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,('views')));

//middleware
app.use(morgan('dev'));
//entender datos que envien de un formulario
app.use(express.urlencoded({extended: false}));
//routes
app.use('/', routes)

//listening
app.listen(app.get('port'), () =>{
    console.log(`server on port ${app.get('port')}`)
})