var database = require("../database/config");

function inserir(descricao, valor, tipo, fkCliente) {
    var instrucaoSql = `INSERT INTO itens_financas (descricao, valor, tipo, fkCliente) VALUES
    ('${descricao}', ${valor}, '${tipo}', ${fkCliente})`
    return database.executar(instrucaoSql);
}

module.exports = {inserir}