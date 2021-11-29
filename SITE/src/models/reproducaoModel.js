var database = require("../database/config")

function obterContagem(contagem) {
    instrucaoSql = `INSERT INTO TAB_HISTORICO (CONTAGEM) VALUES ('${contagem}')`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
module.exports = {
    obterContagem
}