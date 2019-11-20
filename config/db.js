var mysql = require('mysql');

// o nome disso é wrapper. codigo dentro de um variavel 
var conexaoSQL = function(){
    // Cria a conexao com o banco de dados, e exporta o modulo de conexao em db()
    console.log("Conexao estabelecida com o BD !!!")
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'db_portal_noticias'
    });
}

module.exports = function(){
    console.log('O autoload consign() carregou o módulo de conexao com o BD.');
    return conexaoSQL;
}
