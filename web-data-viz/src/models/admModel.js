var database = require("../database/config")

function autenticar(cpf, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", cpf, senha)
    var instrucaoSql = `
        SELECT * FROM administrador WHERE cpf = '${cpf}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarRequisicoes() {
    var instrucao = `
        SELECT COUNT(*) AS total_requisicoes FROM requisicao;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listar() {
    var instrucao = `
        SELECT idRequisicao, nomeFantasia, nomeFunc, DATE_FORMAT(dataCriada, '%d/%m/%Y') AS dataCriadaFormatada FROM requisicao ORDER BY dataCriada ASC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function pegarDados(idRequisicao){
    var instrucaoSql = `
    select * from requisicao where idRequisicao = ${idRequisicao};
    `

    return database.executar(instrucaoSql)
}

function deletarReq(idRequisicaoDado) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idRequisicaoDado);
    var instrucaoSql = `
        DELETE FROM requisicao WHERE idRequisicao = ${idRequisicaoDado};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    autenticar,
    listarRequisicoes,
    listar,
    pegarDados,
    deletarReq
};