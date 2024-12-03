var express = require("express");
var router = express.Router();

var nodeEmailController = require("../controllers/nodeEmailController");

router.post("/send-email", function (req, res) {
    nodeEmailController.enviarEmail(req, res);
});

module.exports = router;


