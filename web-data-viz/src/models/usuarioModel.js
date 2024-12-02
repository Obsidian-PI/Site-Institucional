var database = require("../database/config")

function autenticar(cnpj, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", cnpj, senha)
    var instrucaoSql = `
        SELECT * FROM EMPRESA WHERE cnpjEmpresa = '${cnpj}' AND senhaEmpresa = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrar(razaoServer, nomeFanVar, cnpjServer, nomeFuncServer, cpfServer, emailFuncServer, token) {
    var instrucaoSql = `
      INSERT INTO requisicao 
      (razaoSocial, nomeFantasia, cnpj, nomeFunc, cpf, emailFunc, token) 
      VALUES 
      ('${razaoServer}', '${nomeFanVar}', '${cnpjServer}', '${nomeFuncServer}', '${cpfServer}', '${emailFuncServer}', '${token}');
    `;
  
    return database.executar(instrucaoSql);
  }

  function validarToken(token) {
    var instrucao = `
        select idRequisicao from requisicao where token = '${token}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
  }

  

module.exports = {
    autenticar,
    cadastrar,
    validarToken
};