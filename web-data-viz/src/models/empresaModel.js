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

function atualizarEmpresa(idEmpresa, razao, nomeFan, cnpj) {
  var instrucaoSql = `
      UPDATE empresa
      SET razaoSocial = ${razao}, nomeFantasia = ${nomeFan}, cnpj = ${cnpj}
      WHERE idEmpresa = ${idEmpresa};
  `;
  return database.executar(instrucaoSql, [razao, nomeFan, cnpj, idEmpresa]);
}

function deletarEmpresa(cnpj){
  var instrucaoSql = `DELETE idEmpresa from empresa where cnpj = ${cnpj};
  `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucaoSql)
}

module.exports = { 
  cadastrar,
  pegarEmpresa,
  atualizarEmpresa,
  deletarEmpresa
};
