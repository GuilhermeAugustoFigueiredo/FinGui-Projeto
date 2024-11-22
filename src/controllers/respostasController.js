var respostasModel = require("../models/respostasModel.js");

function verUsuarios(req, res) {
  // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    respostasModel.verUsuarios()
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  
}
function verPesquisa(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
      // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
      respostasModel.verPesquisa()
        .then(function (resultado) {
          res.json(resultado);
        })
        .catch(function (erro) {
          console.log(erro);
          console.log(
            "\nHouve um erro ao realizar o cadastro! Erro: ",
            erro.sqlMessage
          );
          res.status(500).json(erro.sqlMessage);
        });
    
  }

module.exports = {
  verUsuarios,
  verPesquisa
};