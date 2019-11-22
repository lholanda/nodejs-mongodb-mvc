/*
    Classe de Noticias criado com prototype; 
*/
function NoticiasDAO(conexao){
    this._conexao = conexao;
}

NoticiasDAO.prototype.getNoticias = function(callback){
    this._conexao.query('select * from tb_noticias', callback);
    // no nodejs a aplicacao inicia a acao , envia o callback e nao fica esperando 
    // terminar para continuarbundleRenderer.renderToStream
}

NoticiasDAO.prototype.get5UltimasNoticias = function(callback){
    this._conexao.query('select * from tb_noticias limit 5', callback);
}

NoticiasDAO.prototype.getNoticia = function(id_noticia, callback){
    console.log(id_noticia.id);
    this._conexao.query('select * from tb_noticias where id = ?', id_noticia.id , callback);
}

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){
    console.log(noticia)
    this._conexao.query('insert into tb_noticias set ?',noticia, callback);
}

// exportar uma funcao que tenha uma lógica que possa fazer a consulta ao BD;
module.exports = function(){
    return NoticiasDAO;
}