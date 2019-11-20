
// Rota ::: noticias
module.exports = function(app){
    app.get('/noticia', function ( req, res ){
        var conexaoDB = app.config.db(); // quando executa db(), retorna mysql.createConnection() 

        // o primeiro app é o parametro passado. o segundo app é o diretório app
        var noticiasModel = app.app.models.noticiasModel;

        noticiasModel.getNoticia(conexaoDB, function(erro, result){
            res.render('noticias/noticia', {noticia: result})
        });  
    });
 
};
