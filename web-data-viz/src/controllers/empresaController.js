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

function atualizarEmpresa(req, res) {
  var idEmpresa = req.body.idEmpresaServer;
  var razao = req.body.razaoServer;
  var nomeFan = req.body.nomeFanServer;
  var cnpj = req.body.cnpjServer;

  empresaModel.atualizarEmpresa(idEmpresa, razao, nomeFan, cnpj)
      .then(function (resultado) {
          res.json(resultado);
      }).catch(function (erro) {
          console.log("Erro ao atualizar empresa:", erro.sqlMessage);
          res.status(500).json(erro.sqlMessage);
      });
}

function deletarEmpresa(req, res) {
  var cnpj = req.body.cnpjServer;

  if (!cnpj) {
      return res.status(400).json({ error: "CNPJ não fornecido para exclusão" });
  }

  empresaModel.deletarEmpresa(cnpj)
      .then(function (resultado) {
          if (resultado.affectedRows > 0) {
              res.status(200).json({ message: "Empresa deletada com sucesso" });
          } else {
              res.status(404).json({ message: "Empresa não encontrada para exclusão" });
          }
      })
      .catch(function (erro) {
          console.log("Erro ao deletar empresa:", erro.sqlMessage);
          res.status(500).json({ error: erro.sqlMessage });
      });
}

module.exports = {
  cadastrar,
  pegarEmpresa,
  atualizarEmpresa,
  deletarEmpresa
};
