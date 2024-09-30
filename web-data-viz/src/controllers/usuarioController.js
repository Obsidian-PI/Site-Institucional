var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var cnpj = req.body.cnpjServer;
    var senha = req.body.senhaServer;

    if (cnpj == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(cnpj, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);
                                    res.json({
                                        id: resultadoAutenticar[0].idEmpresa,
                                        cnpj: resultadoAutenticar[0].cnpjEmpresa,
                                        email: resultadoAutenticar[0].emailEmpresa,
                                        uf: resultadoAutenticar[0].ufEmpresa,
                                        atuacaoEmpresa: resultadoAutenticar[0].atuacaoEmpresa,
                                        nome: resultadoAutenticar[0].nomeEmpresa,
                                        senha: resultadoAutenticar[0].senhaEmpresa,
                                        tipoEmpresa: resultadoAutenticar[0].fkTipoEmpresa
                                    });
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {

    var nome = req.body.nomeServer;
    var cnpj = req.body.cnpjServer;
    var email = req.body.emailServer;
    var uf = req.body.ufServer;
    var atuacao = req.body.areaAtuacaoServer;
    var senha = req.body.senhaServer;
    var fkTipoEmpresa = req.body.tipoEmpresaServer;

        usuarioModel.cadastrar(nome, cnpj, email, uf, atuacao, senha, fkTipoEmpresa)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    
}

module.exports = {
    autenticar,
    cadastrar
}