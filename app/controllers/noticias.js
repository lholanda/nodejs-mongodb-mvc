module.exports.noticias = function(app, req, res){
    var conexaoDB = app.config.db(); // quando executa db(), retorna mysql.createConnection() 

    // o primeiro app é o parametro passado. o segundo app é o diretório app
    var noticiasDAO = new app.app.models.noticiasDAO(conexaoDB);  // pode ou nao ter o ()

    noticiasDAO.getNoticias( function(erro, result){
        res.render('noticias/noticias', {noticias: result})  // view a ser exibida
    });  

}

module.exports.noticia = function(app, req, res){
    var conexaoDB = app.config.db(); // quando executa db(), retorna mysql.createConnection() 
    var id = req.params.id;

    // o primeiro app é o parametro passado. o segundo app é o diretório app
    var noticiasDAO = new app.app.models.noticiasDAO(conexaoDB);

    noticiasDAO.getNoticia(id, function(erro, result){
        res.render('noticias/noticia', {noticia: result}) // view a ser exibida passando parametros
    });    
}