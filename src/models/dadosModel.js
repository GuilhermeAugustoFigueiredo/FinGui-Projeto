var database = require("../database/config");

function inserir(descricao, valor, tipo, fkCliente) {
    var instrucaoSql = `INSERT INTO itens_financas (descricao, valor, tipo, fkCliente) VALUES
    ('${descricao}', ${valor}, '${tipo}', ${fkCliente});`

    return database.executar(instrucaoSql);
}
function excluir(indice, idUsuario) {
    var instrucaoSql = `DELETE FROM itens_financas WHERE idItem = ${indice} AND fkCliente = ${idUsuario}`
    // var instrucaoSql = `DELETE FROM itens_financas WHERE idItem = ${indice} AND fkCliente = ${idUsuario} IN (SELECT idtem, fkCliente FROM );`

    return database.executar(instrucaoSql);
}

function registrar(opcao) {
    var instrucaoSql = `INSERT INTO opcoes_usuario (descricao) VALUES
    ('${opcao}');`

    return database.executar(instrucaoSql);
}

function carregar(fkCliente) {
    var instrucaoSql = `SELECT descricao, valor, tipo, fkCliente FROM itens_financas WHERE fkCliente = ${fkCliente};`

    return database.executar(instrucaoSql);
}

function obterGrafico() {
    var instrucaoSql = `SELECT * FROM opcoes_usuario;`
    console.log('foi no models')
    return database.executar(instrucaoSql);
}

module.exports = {inserir, excluir, registrar, carregar, obterGrafico}