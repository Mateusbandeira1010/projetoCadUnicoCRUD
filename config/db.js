const mysql = require('mysql2');

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '99452579',
    database: 'projeto'
});

conexao.connect((erro) => {
    if (erro) throw erro;
    console.log('Banco conectado com sucesso');
});

module.exports = conexao;
