var express = require('express');
var app = express();
var consign = require('consign');

app.set('view engine', 'ejs');
app.set('views', './app/views');

// entender qual o diretorio das routes, dá todos os requires automaticamente
consign()
    .include('app/routes')
    .then('config/db.js')  // explicitar que é para exportar somente o db.js
    .then('app/models')
    .into(app);

// tudo que o consign() exporta, vai para dentro de app


module.exports = app;