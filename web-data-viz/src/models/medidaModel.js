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

module.exports = {
    buscarMedidas
}