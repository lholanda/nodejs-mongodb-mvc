// Rota ::: formulario_inclusao_noticia
module.exports = function(app){
    app.get('/formulario_inclusao_noticia', function(req,res){  // rota
        app.app.controllers.admin.formulario_inclusao_noticia(app, req, res); // Instancia o controller
    });

    app.post('/noticias/salvar', function(req,res){   // rota
        app.app.controllers.admin.noticias_salvar(app, req, res); // Instancia o controller
    });
}