var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/buscarMedidas", function (req, res) {
    medidaController.buscarMedidas(req, res);
});


module.exports = router;