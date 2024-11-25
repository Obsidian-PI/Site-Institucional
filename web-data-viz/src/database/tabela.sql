create database obsidian;

use obsidian;

create table empresa (
idEmpresa int primary key AUTO_INCREMENT,
razaoSocial varchar(90),
nomeFantasia varchar(70),
descricao varchar(255),
cnpj varchar(18)
);

create table alerta(
idAlerta int primary key AUTO_INCREMENT,
tipo varchar(45),
descricao varchar(255),
dtAlerta DATETIME DEFAULT CURRENT_TIMESTAMP,
statusAlerta varchar(50),
parametro varchar(40),
fkEmpresa int,
constraint fkEmpresa FOREIGN KEY (fkEmpresa) 
references empresa (idEmpresa)
);

create table cargo(
idCargo int primary key AUTO_INCREMENT,
tipo varchar(255)
);

create table telefone(
idTelefone int primary key AUTO_INCREMENT,
ddd varchar(3),
numero varchar(255)
);

create table funcionario(
idFuncionario int primary key AUTO_INCREMENT,
nome varchar(60),
cpf varchar(15),
email varchar(90),
senha varchar(30),
fkEmpresa int,
fkCargo int,
constraint fkCargo FOREIGN KEY (fkCargo)
references cargo (idCargo),
fkTelefone int,
constraint fkTelefone FOREIGN KEY(fkTelefone)
references telefone(idTelefone)
);

create table administrador(
idAdministrador int primary key AUTO_INCREMENT,
nome varchar(255),
senha varchar(255)
);

create table requisicao(
idRequisicao int primary key AUTO_INCREMENT,
razaoSocial varchar(90),
nomeFantasia varchar(70),
cnpj varchar(18),
nome varchar(60),
cpf varchar(15),
email varchar(90)
);

create table carbonFootprint(
idCarbonFootprint int primary key AUTO_INCREMENT,
gas varchar(15),
setorEmissao varchar(30),
estado varchar(45),
doisMilDoze decimal,
doisMilTreze decimal, 
doisMilQuatorze decimal,
doisMilQuinze decimal, 
doisMilDezesseis decimal,
doisMilDezessete decimal,
doisMilDezoito decimal,
doisMilDezenove decimal, 
doisMilVinte decimal,
doisMilVinteUm decimal,
doisMilVinteDois decimal
);






 