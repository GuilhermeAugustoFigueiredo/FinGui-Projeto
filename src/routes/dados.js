var express = require("express");
var router = express.Router();

var dadosController = require("../controllers/dadosController");

router.post("/inserir", function (req, res) {
    dadosController.inserir(req, res);
})
router.delete("/excluir", function (req, res) {
    dadosController.excluir(req, res);
})

router.post("/registrar", function (req, res) {
    dadosController.registrar(req, res);
})

router.get("/carregar", function (req, res) {
    dadosController.carregar(req, res);
})

router.get("/obterGrafico", function (req, res) {
    console.log('foi na rota')
    dadosController.obterGrafico(req, res);
})

module.exports = router;