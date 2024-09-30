var funcionarioModel = require("../models/funcionarioModel");

function autenticar(req, res) {
    var cpf = req.body.cpfServer;
    var senha = req.body.senhaServer;

    if (cpf == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        funcionarioModel.autenticar(cpf, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);
                        res.json({
                            id: resultadoAutenticar[0].idFuncionario,
                            cpf: resultadoAutenticar[0].cpfFuncionario,
                            telefone: resultadoAutenticar[0].telefoneFuncionario,
                            email: resultadoAutenticar[0].emailFuncionario,
                            nome: resultadoAutenticar[0].nomeFuncionario,
                            senha: resultadoAutenticar[0].senhaFuncionario,
                            idEmpresa: resultadoAutenticar[0].fkFuncionarioEmpresa
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
    var cpf = req.body.cpfServer;
    var telefone = req.body.telefoneServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var fkFuncionarioEmpresa = req.body.fkEmpresaServer;

    funcionarioModel.cadastrar(nome, cpf, telefone, email, senha, fkFuncionarioEmpresa)
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


function listar(req, res) {
    var fkEmpresa = req.query.fkEmpresaServer; // Corrigido para req.query
    if (!fkEmpresa) {
        return res.status(400).json({ error: "fkEmpresaServer não fornecido" });
    }
    funcionarioModel.listar(fkEmpresa).then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    });
}


module.exports = {
    autenticar,
    listar,
    cadastrar
}