// const { buscarDias } = require("../controllers/medidaController");
var database = require("../database/config");

function buscarMedidas() {

    var instrucaoSql = `
        SELECT estado, ROUND(AVG(doisMilDoze)) AS media_2012, 
        ROUND(AVG(doisMilTreze)) AS media_2013, 
        ROUND(AVG(doisMilQuatorze)) AS media_2014, 
        ROUND(AVG(doisMilQuinze)) AS media_2015, 
        ROUND(AVG(doisMilDezesseis)) AS media_2016, 
        ROUND(AVG(doisMilDezessete)) AS media_2017, 
        ROUND(AVG(doisMilDezoito)) AS media_2018, 
        ROUND(AVG(doisMilDezenove)) AS media_2019, 
        ROUND(AVG(doisMilVinte)) AS media_2020, 
        ROUND(AVG(doisMilVinteUm)) AS media_2021, 
        ROUND(AVG(doisMilVinteDois)) AS media_2022 
        FROM carbonFootprint GROUP BY estado ORDER BY estado;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedia() {

    var instrucaoSql = `
        SELECT 
    COUNT(*) AS quantidadeEstados
FROM (
    SELECT 
        estado,
        ROUND(avg(doisMilDoze + doisMilTreze + doisMilQuatorze + doisMilQuinze + 
         doisMilDezesseis + doisMilDezessete + doisMilDezoito + 
         doisMilDezenove + doisMilVinte + doisMilVinteUm + doisMilVinteDois)) AS mediaEmissoes
    FROM 
        carbonFootprint
    GROUP BY 
        estado
) AS medias
WHERE 
    medias.mediaEmissoes > 1000000;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarTotal() {

    var instrucaoSql = `
        SELECT 
    SUM(doisMilVinteDois) AS totalEmissoes2022
FROM 
    carbonFootprint;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarDias() {

    var instrucaoSql = `
        SELECT 
    DATE_FORMAT(dataCriada, '%d/%m') AS diaMes,
    COUNT(*) AS quantidadeRequisicoes
FROM 
    requisicao
WHERE 
    statusReq = 'ABERTA'
GROUP BY 
    DATE_FORMAT(dataCriada, '%d/%m')
ORDER BY 
    MIN(DATE(dataCriada)) limit 7;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarMedidas,
    buscarMedia,
    buscarTotal,
    buscarDias
}



