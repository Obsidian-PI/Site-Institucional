-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

create database obsidian;
-- drop database obsidian;
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

insert into cargo (tipo) values ("Representante Legal");

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
	resetSenha boolean default true,
	fkEmpresa int,
	fkCargo int,
	constraint fkCargo FOREIGN KEY (fkCargo)
	references cargo (idCargo),
	fkTelefone int,
	constraint fkTelefone FOREIGN KEY(fkTelefone)
	references telefone(idTelefone)
);

select * from funcionario;

select resetSenha from funcionario where idFuncionario = 2;

UPDATE funcionario SET senha = 'asdasda', resetSenha = false WHERE idFuncionario = 2;

create table administrador(
	idAdministrador int primary key AUTO_INCREMENT,
	nome varchar(255),
	cpf varchar(14),
	senha varchar(255)
);

insert into administrador (nome, cpf, senha) values ("Igor", "483.340.618-70", "123");

create table requisicao(
	idRequisicao int primary key AUTO_INCREMENT,
	razaoSocial varchar(90),
	nomeFantasia varchar(70),
	cnpj varchar(18),
	nomeFunc varchar(60),
	cpf varchar(15),
	emailFunc varchar(90),
	dataCriada TIMESTAMP default current_TIMESTAMP,
	statusReq varchar(40)
);

select * from requisicao;

create table carbonFootprint (
	idCarbonFootprint int primary key auto_increment,
	gas varchar(45),
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