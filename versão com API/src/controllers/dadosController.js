var dadosModel = require("../models/dadosModel")

function inserir(req, res) {

    var descricao = req.body.descricao;
    var valor = req.body.valor;
    var tipo = req.body.tipo;
    var idUsuario = req.body.idUsuario;
    console.log(req.body)
    dadosModel.inserir(descricao, valor, tipo, idUsuario)
}

module.exports = {inserir};