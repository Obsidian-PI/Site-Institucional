var database = require("../database/config");

function cadastrar(razao, nomeFan, cnpj) {
  var instrucaoSql = `insert into empresa (razaoSocial, nomeFantasia, cnpj) values ('${razao}', '${nomeFan}', '${cnpj}');`;

  return database.executar(instrucaoSql);
}

function pegarEmpresa(cnpj) {
  var instrucao = `
      select idEmpresa from empresa where cnpj = '${cnpj}';
  `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

module.exports = { 
  cadastrar,
  pegarEmpresa
};
