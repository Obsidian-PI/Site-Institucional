var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/buscarMedidas", function (req, res) {
    medidaController.buscarMedidas(req, res);
});

router.get("/buscarMedia", function (req, res) {
    medidaController.buscarMedia(req, res);
});

router.get("/buscarTotal", function (req, res) {
    medidaController.buscarTotal(req, res);
});

router.get("/buscarDias", function (req, res) {
    medidaController.buscarDias(req, res);
});

module.exports = router;