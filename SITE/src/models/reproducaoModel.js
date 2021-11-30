var database = require("../database/config")

function obterContagem(user, disco, contagem) {
    console.log(user)
    instrucaoSql = `INSERT INTO TAB_HISTORICO (FK_DISCO,FK_USER,DATA_REPRODUCAO, CONTAGEM) VALUES (${disco},${user},CURRENT_TIMESTAMP(),'${contagem}')`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function contarDiscos(user) {
    instrucaoSql = `SELECT COUNT(*) as quantidade, NOME_DISCO as Disco FROM TAB_HISTORICO
    JOIN TAB_DISCO on TAB_DISCO.ID_DISCO = TAB_HISTORICO.FK_DISCO
		group by FK_DISCO;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
module.exports = {
    obterContagem,
    contarDiscos,
}   