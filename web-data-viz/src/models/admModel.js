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
        SELECT COUNT(*) AS total_requisicoes FROM requisicao WHERE statusReq = 'PENDENTE';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarEmpresasCount() {
    var instrucao = `
        SELECT COUNT(*) AS total_empresas FROM empresa;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarEmpresas() {
    var instrucao = `
        SELECT e.idEmpresa, e.nomeFantasia, e.cnpj, COUNT(f.idFuncionario) AS totalFuncionarios FROM empresa e LEFT JOIN funcionario f ON e.idEmpresa = f.fkEmpresa GROUP BY e.idEmpresa, e.nomeFantasia, e.cnpj;

    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listar() {
    var instrucao = `
        SELECT idRequisicao, nomeFantasia, nomeFunc, DATE_FORMAT(dataCriada, '%d/%m/%Y') AS dataCriadaFormatada FROM requisicao WHERE statusReq = 'PENDENTE' ORDER BY dataCriada ASC;
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

function pegarDadosEmpresa(idEmpresa){
    var instrucaoSql = `
    select * from empresa where idEmpresa = ${idEmpresa};
    `

    return database.executar(instrucaoSql)
}

function recusarReq(idRequisicaoDado) {
    var instrucaoSql = `
        UPDATE requisicao SET statusReq = 'RECUSADO' where idRequisicao = ${idRequisicaoDado};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function aprovarReq(idRequisicaoDado) {
    var instrucaoSql = `
        UPDATE requisicao SET statusReq = 'APROVADO' where idRequisicao = ${idRequisicaoDado};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function atualizarEmpresa(idEmpresa, razao, nomeFan) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", idEmpresa, razao, nomeFan);
    var instrucaoSql = `
        UPDATE empresa SET razaoSocial = '${razao}', nomeFantasia = '${nomeFan}' WHERE idEmpresa = ${idEmpresa};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function excluirEmpresa(idEmpresa) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idEmpresa);
    var instrucaoSql = `
        DELETE FROM empresa WHERE idEmpresa = ${idEmpresa};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function excluirFuncionarios(idEmpresa) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idEmpresa);
    var instrucaoSql = `
        DELETE FROM funcionario WHERE fkEmpresa = ${idEmpresa};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    listarRequisicoes,
    listar,
    pegarDados,
    recusarReq,
    listarEmpresas,
    aprovarReq,
    listarEmpresasCount,
    pegarDadosEmpresa,
    atualizarEmpresa,
    excluirEmpresa,
    excluirFuncionarios
};