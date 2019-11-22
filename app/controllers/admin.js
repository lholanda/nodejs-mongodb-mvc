//*********************** ******************   *******************************************/
// OBS : formulario_inclusao_noticia e noticias_salvar, são atributos que eu posso exportar
//*********************** ******************   *******************************************/


// este Controller exibirá o formulário 
module.exports.formulario_inclusao_noticia = function( app, req, res ){
    res.render('admin/form_add_noticia', { validacao: {}, noticia: {} }); // view a ser exibida
}

// este Controller validar o formulario e salvar os dados
module.exports.noticias_salvar = function( app, req, res ){
    // receber formulario
    var noticia = req.body;

    //console.log(noticia); 
    // assert 
    req.assert('titulo'       ,'O título não pode ser vazio !!!').notEmpty();
    req.assert('resumo'       ,'O resumo é obrigatorio !!!').notEmpty();
    req.assert('resumo'       ,'O resumo deve conter entre 10 a 100 caracteres !!!').len(10,100);
    req.assert('autor'        ,'O nome do autor é obrigatorio !!!').notEmpty();
    req.assert('data_noticia' ,'Data é obrigatória !!!').notEmpty();
    req.assert('noticia'      ,'A Notícia é obrigatória !!!').notEmpty();

    var erros = req.validationErrors();

    if (erros){
       // console.log(erros); 
       res.render('admin/form_add_noticia', { validacao: erros, noticia: noticia });     // view a ser exibida com parametrosexit
       return;
    }
    var conexaoDB = app.config.db();
    var noticiasDAO = new app.app.models.noticiasDAO(conexaoDB);  // chama o Model

    noticiasDAO.salvarNoticia(noticia, function(erro, result){
        res.redirect('/noticias');
    });  
}