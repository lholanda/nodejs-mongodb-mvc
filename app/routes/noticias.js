// aqui nao precisa mais chamar require do db.js pois são chamados pelo consign();
// Rota ::: noticias
module.exports = function(app){
    // rota 1 Noticias
    app.get('/noticias', function ( req, res ){  // rota
       app.app.controllers.noticias.noticias(app, req, res); 
    });

    // rota 2 Noticia
    app.get('/noticia/:id', function ( req, res ){  // rota
        app.app.controllers.noticias.noticia(app, req, res);
    });

};
