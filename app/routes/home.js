// Rota ::: home
module.exports = function(app){
    app.get('/', function ( req, res ){
        console.log("home.principal")
        app.app.controllers.home.principal( app, req, res );
    })
}
