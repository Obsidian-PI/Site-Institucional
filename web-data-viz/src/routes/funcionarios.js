var express = require("express");
var router = express.Router();

var funcionarioController = require("../controllers/funcionarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de funcionarioController.js
router.post("/cadastrar", function (req, res) {
    funcionarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    funcionarioController.autenticar(req, res);
});

router.get("/listar", function (req, res) {
    funcionarioController.listar(req, res);
});

router.put("/redefinirSenha", function (req, res) {
    funcionarioController.redefinirSenha(req, res);
});

router.get("/validarReset", function (req, res) {
    funcionarioController.validarReset(req, res);
})

router.delete("/deletarFunc/:idFuncionario", function (req, res) {
    funcionarioController.deletarFunc(req, res);
});

module.exports = router;