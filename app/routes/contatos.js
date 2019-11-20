// Rota ::: contatos
module.exports = function(app){
    app.get('/contatos', function ( req, res ){
        console.log('Página de Contato')
        res.render('contatos/contatos')
    })
}
