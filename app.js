var app = require('./config/server');
//*******************************/
// aqui nao precisa mais chamar require das rotas pois são chamados pelo consign();
//*******************************/

// Define, importa e já executa as rotas
//var rotaHome     = require('./app/routes/home')(app);
//var rotaNoticias = require('./app/routes/noticias')(app);
//var rotaInclusaoNoticia = require('./app/routes/inclusao_noticia')(app);
//var rotaContatos = require('./app/routes/contatos')(app);

app.listen(8000, function( req, res ){
    console.log('Servidor ON ::: Rodando na porta : 8000 :::');
    //console.log(app.settings);
    //console.log(app.app.routes);
   
})
