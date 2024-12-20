var admModel = require("../models/admModel");

function autenticar(req, res) {
    var cpf = req.body.cpfServer;
    var senha = req.body.senhaServer;

    if (cpf == undefined) {
        res.status(400).send("Seu CPF está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        admModel.autenticar(cpf, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); 

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);
                        res.json({
                            id: resultadoAutenticar[0].idAdministrador,
                            cpf: resultadoAutenticar[0].cpf,
                            nome: resultadoAutenticar[0].nome,
                            senha: resultadoAutenticar[0].senha
                        });
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("CPF e/ou senha inválido(s)");
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

function listarRequisicoes(req, res) {
    admModel.listarRequisicoes().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    });
}

function listarEmpresas(req, res) {
    admModel.listarEmpresas().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    });
}

function listarEmpresasCount(req, res) {
    admModel.listarEmpresasCount().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    });
}

function listar(req, res) {
    admModel.listar().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    });
}

function pegarDados(req, res) {
    var idRequisicao = req.query.idRequisicaoServer;

    if (idRequisicao == undefined) {
        res.status(400).send("idRequisicao esta undefined")
    } else {

        admModel.pegarDados(idRequisicao)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro)
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: erro.sqlMessage"
                    );
                    res.status(500).json(erro.sqlMessage)
                }
            )
    }
}

function pegarDadosEmpresa(req, res) {
    var idEmpresa = req.query.idEmpresaServer;

    if (idEmpresa == undefined) {
        res.status(400).send("idEmpresa esta undefined")
    } else {

        admModel.pegarDadosEmpresa(idEmpresa)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro)
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: erro.sqlMessage"
                    );
                    res.status(500).json(erro.sqlMessage)
                }
            )
    }
}

function recusarReq(req, res) {
    var idRequisicaoDado = req.params.idRequisicaoDado;

    admModel.recusarReq(idRequisicaoDado)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao deletar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function aprovarReq(req, res) {
    var idRequisicaoDado = req.params.idRequisicaoDado;

    admModel.aprovarReq(idRequisicaoDado)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao deletar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function atualizarEmpresa(req, res) {
    var idEmpresa = req.body.idEmpresaServer;
    var razao = req.body.razaoServer;
    var nomeFan = req.body.nomeFanServer;

    admModel.atualizarEmpresa(idEmpresa, razao, nomeFan)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function excluirEmpresa(req, res) {
    var idEmpresa = req.params.idEmpresaDado;

    admModel.excluirEmpresa(idEmpresa)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao deletar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function excluirFuncionarios(req, res) {
    var idEmpresa = req.params.idEmpresaDado;

    admModel.excluirFuncionarios(idEmpresa)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao deletar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    autenticar,
    listarRequisicoes,
    listar,
    pegarDados,
    recusarReq,
    listarEmpresas,
    aprovarReq,
    listarEmpresasCount,
    pegarDadosEmpresa,
    atualizarEmpresa,
    excluirEmpresa,
    excluirFuncionarios
}