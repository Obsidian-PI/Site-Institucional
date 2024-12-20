var express = require("express");
var router = express.Router();

var admController = require("../controllers/admController");

router.post("/autenticar", function (req, res) {
    admController.autenticar(req, res);
});

router.get("/listarRequisicoes", function (req, res) {
    admController.listarRequisicoes(req, res);
});

router.get("/listarEmpresas", function (req, res) {
    admController.listarEmpresas(req, res);
});

router.get("/listarEmpresasCount", function (req, res) {
    admController.listarEmpresasCount(req, res);
});

router.get("/listar", function (req, res) {
    admController.listar(req, res);
});

router.get("/pegarDados", function (req, res) {
    admController.pegarDados(req, res);
})

router.get("/pegarDadosEmpresa", function (req, res) {
    admController.pegarDadosEmpresa(req, res);
})

router.delete("/recusarReq/:idRequisicaoDado", function (req, res) {
    admController.recusarReq(req, res);
});

router.delete("/aprovarReq/:idRequisicaoDado", function (req, res) {
    admController.aprovarReq(req, res);
});

router.put("/atualizarEmpresa", function (req, res) {
    admController.atualizarEmpresa(req, res);
});

router.delete("/excluirEmpresa/:idEmpresaDado", function (req, res) {
    admController.excluirEmpresa(req, res);
});

router.delete("/excluirFuncionarios/:idEmpresaDado", function (req, res) {
    admController.excluirFuncionarios(req, res);
});

module.exports = router;