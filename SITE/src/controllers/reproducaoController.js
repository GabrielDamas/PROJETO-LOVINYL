var reproducaoModel = require("../models/reproducaoModel");

function obterContagem(req, res) {
    var contagem = req.body.ContagemServer;
        
        reproducaoModel.obterContagem(contagem)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o registro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

module.exports = {
    obterContagem
}