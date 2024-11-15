var empresaModel = require("../models/empresaModel");


function cadastrar(req, res) {
  var razao = req.body.razaoServer;
  var nomeFan = req.body.nomeFanServer;
  var cnpj = req.body.cnpjServer;

  empresaModel.cadastrar(razao, nomeFan, cnpj)
    .then(
      function (resultado) {
        res.json(resultado);
      }
    ).catch(
      function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      }
    );
}

function pegarEmpresa(req, res) {
  var cnpj = req.query.cnpjServer;
  if (!cnpj) {
    return res.status(400).json({ error: "cnpj não fornecido" });
  }
  empresaModel.pegarEmpresa(cnpj).then(function (resultado) {
    res.status(200).json(resultado);
  }).catch(function (erro) {
    res.status(500).json(erro.sqlMessage);
  });
}

module.exports = {
  cadastrar,
  pegarEmpresa
};
