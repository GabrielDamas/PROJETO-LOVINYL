var express = require("express");
var router = express.Router();

var reproducaoController = require("../controllers/reproducaoController");

router.get("/musica/:ID_MUSICA", function (req, res) {
    reproducaoController.obterMusicas(req, res);
});

module.exports = router;