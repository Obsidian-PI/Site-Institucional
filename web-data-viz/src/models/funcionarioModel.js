var database = require("../database/config")

function autenticar(cpf, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", cpf, senha)
    var instrucaoSql = `
        SELECT * FROM funcionario join cargo on idCargo = fkCargo WHERE cpf = '${cpf}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, cpf, email, senha, fkEmpresa, fkCargo) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, cpf, email, senha, fkEmpresa, fkCargo);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        insert into funcionario (nome, cpf, email, senha, fkEmpresa, fkCargo) values ("${nome}","${cpf}", "${email}", "${senha}", ${fkEmpresa}, ${fkCargo});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function listar(fkEmpresa) {
    var instrucao = `
        SELECT * FROM funcionario WHERE fkFuncionarioEmpresa = ${fkEmpresa};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function redefinirSenha(idFunc, novaSenha) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", idFunc, novaSenha);
    var instrucaoSql = `
        UPDATE funcionario SET senha = '${novaSenha}', resetSenha = false WHERE idFuncionario = ${idFunc};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function validarReset(idFuncVar) {
    var instrucao = `
        select resetSenha from funcionario where idFuncionario = ${idFuncVar};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function deletarFunc(idFuncionario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idFuncionario);
    var instrucaoSql = `
        DELETE FROM funcionario WHERE idFuncionario = ${idFuncionario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    listar,
    cadastrar,
    redefinirSenha,
    validarReset,
    deletarFunc
};