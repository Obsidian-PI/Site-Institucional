var express = require("express");
var router = express.Router();

var admController = require("../controllers/admController");

router.post("/autenticar", function (req, res) {
    admController.autenticar(req, res);
});

router.get("/listarRequisicoes", function (req, res) {
    admController.listarRequisicoes(req, res);
});

router.get("/listar", function (req, res) {
    admController.listar(req, res);
});

router.get("/pegarDados", function (req, res) {
    admController.pegarDados(req, res);
})

router.delete("/deletarReq/:idRequisicaoDado", function (req, res) {
    admController.deletarReq(req, res);
});

module.exports = router;