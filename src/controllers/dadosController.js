var dadosModel = require("../models/dadosModel")

function inserir(req, res) {

    var descricao = req.body.descricao;
    var valor = req.body.valor;
    var tipo = req.body.tipo;
    var idUsuario = req.body.idUsuario;
    console.log(req.body)
    dadosModel.inserir(descricao, valor, tipo, idUsuario)
}

function excluir(req, res) {
    var idUsuario = req.body.idUsuario;
    var indice = req.body.indice;
    console.log(req.body)
    dadosModel.excluir(indice, idUsuario)
}

function registrar(req, res) {
    var opcao = req.body.opcaoServer;
    console.log(req.body)
    dadosModel.registrar(opcao)
}

function carregar(req, res) {
    var idUsuario = req.body.idUsuario;
    console.log(req.body)
    dadosModel.carregar(idUsuario)
}

function obterGrafico(req, res) {
    var opcao = req.body.opcaoServer;
    console.log(req.body)
    dadosModel.carregar(opcao)
}
module.exports = {inserir, excluir, registrar, carregar, obterGrafico};