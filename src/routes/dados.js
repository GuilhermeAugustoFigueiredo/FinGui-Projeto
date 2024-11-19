var express = require("express");
var router = express.Router();

var dadosController = require("../controllers/dadosController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/inserir", function (req, res) {
    dadosController.inserir(req, res);
})
router.post("/excluir", function (req, res) {
    dadosController.excluir(req, res);
})

router.post("/registrar", function (req, res) {
    dadosController.registrar(req, res);
})
module.exports = router;