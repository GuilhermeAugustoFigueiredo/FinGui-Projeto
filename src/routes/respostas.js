var express = require("express");
var router = express.Router();

var respostasController = require("../controllers/respostasController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.get("/verUsuarios", function (req, res) {
    respostasController.verUsuarios(req, res);
})

router.get("/verPesquisa", function (req, res) {
    respostasController.verPesquisa(req, res);
})

router.get("/verRespostas", function (req, res) {
    respostasController.verRespostas(req, res);
})

module.exports = router;