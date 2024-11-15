var express = require("express");
var router = express.Router();

var empresaController = require("../controllers/empresaController");

router.post("/cadastrar", function (req, res) {
    empresaController.cadastrar(req, res);
})

router.get("/pegarEmpresa", function (req, res) {
    empresaController.pegarEmpresa(req, res);
});

module.exports = router;