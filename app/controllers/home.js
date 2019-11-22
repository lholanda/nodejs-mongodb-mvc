module.exports.index = function( app, req, res ){

    var conexaoDB = app.config.db();

    // o primeiro app é o parametro passado. o segundo app é o diretório app
    var noticiasDAO = new app.app.models.noticiasDAO(conexaoDB);  // pode ou nao ter o ()

    noticiasDAO.get5UltimasNoticias( function(erro, result){
        //res.send(result); // exibe como  
        //res.render('home/index');
        res.render('home/index', {noticias: result})  // view a ser exibida
    });
}