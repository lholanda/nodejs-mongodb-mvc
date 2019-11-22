var express = require('express');
var app = express();
var consign = require('consign');
// bodyPerser será instalado como middleware
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(bodyParser.urlencoded({extended: true})); // body-parser é um middleware 
app.use(expressValidator());                      // expressValidator é um middleware

// entender qual o diretorio das routes, dá todos os requires automaticamente
consign()
    .include('app/routes')
    .then('config/db.js')  // explicitar que é para exportar somente o db.js
    .then('app/models')
    .then('app/controllers')
    .into(app);

// tudo que o consign() exporta, vai para dentro de app


module.exports = app;