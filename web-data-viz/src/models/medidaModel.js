var database = require("../database/config");

function buscarUltimasMedidas() {

    var instrucaoSql = `SELECT DATE_FORMAT(dataCriada, '%d/%m') AS data, COUNT(*) AS totalRequisicoes FROM requisicao GROUP BY DATE_FORMAT(dataCriada, '%d/%m') ORDER BY DATE_FORMAT(dataCriada, '%d/%m') DESC;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
}
