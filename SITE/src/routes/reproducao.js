var express = require("express");
var router = express.Router();

var reproducaoController = require("../controllers/reproducaoController");

router.post("/obterContagem", function (req, res) {
    reproducaoController.obterContagem(req, res);
});

router.get("/contarDiscos/:user", function (req, res) {
    reproducaoController.contarDiscos(req, res);
});

module.exports = router;