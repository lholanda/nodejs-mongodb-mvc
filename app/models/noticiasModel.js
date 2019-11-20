// exportar uma funcao que tenha uma lógica que possa fazer a consulta ao BD;
module.exports = function(){

    // conexao é a conexao ao BD
    // callBack é a funcao que fará a renderizacao da rota /noticias/noticias

    this.getNoticias = function(conexao, callBack){
        conexao.query('select * from noticias', callBack);
    }

    this.getNoticia = function(conexao, callBack){
        conexao.query('select * from noticias where id = 2', callBack);
    }

    return this;
}