// aqui nao precisa mais chamar require do db.js pois são chamados pelo consign();

// Rota ::: noticias
module.exports = function(app){
    app.get('/noticias', function ( req, res ){
        var conexaoDB = app.config.db(); // quando executa db(), retorna mysql.createConnection() 

        // o primeiro app é o parametro passado. o segundo app é o diretório app
        var noticiasModel = app.app.models.noticiasModel;

        noticiasModel.getNoticias(conexaoDB, function(erro, result){
            res.render('noticias/noticias', {noticias: result})
        });  
    });
 
};
