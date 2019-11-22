/*
    Classe de Noticias criado com prototype; 
*/
function NoticiasDAO(conexao){
    this._conexao = conexao;
}

NoticiasDAO.prototype.getNoticias = function(callback){
    this._conexao.query('select * from tb_noticias', callback);
}

NoticiasDAO.prototype.getNoticia = function(id, callback){
    this._conexao.query('select * from tb_noticias where id = ?', id, callback);
}

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){
    console.log(noticia)
    this._conexao.query('insert into tb_noticias set ?',noticia, callback);
}

// exportar uma funcao que tenha uma lógica que possa fazer a consulta ao BD;
module.exports = function(){
    return NoticiasDAO;
}