// Rota ::: home
module.exports = function(app){
    app.get('/', function ( req, res ){
        // console.log("home.index")
        app.app.controllers.home.index( app, req, res );
    })
}
