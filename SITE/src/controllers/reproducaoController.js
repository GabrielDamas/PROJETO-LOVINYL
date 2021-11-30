var reproducaoModel = require("../models/reproducaoModel");

function obterContagem(req, res) {
    var user = req.body.userServer;
    var contagem = req.body.contagemServer;
    var disco = req.body.discoServer;
        
        reproducaoModel.obterContagem(user,disco ,contagem)
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

    function contarDiscos(req, res) {

        var user = req.params.user;
    
        reproducaoModel.contarDiscos(user).then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
    }


module.exports = {
    obterContagem,
    contarDiscos,
}