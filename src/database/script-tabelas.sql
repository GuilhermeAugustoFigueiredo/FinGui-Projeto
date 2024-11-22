CREATE DATABASE FinGui;
USE FinGui;
CREATE TABLE cliente_cadastro (
    idCliente INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
	cpf CHAR(11),
    email VARCHAR(100) UNIQUE,
    senha VARCHAR(255)
);


CREATE TABLE itens_financas (
    idItem INT PRIMARY KEY AUTO_INCREMENT,
    descricao VARCHAR(45),
    valor DECIMAL(10,2),
    tipo VARCHAR(8),
    fkCliente INT,
    CONSTRAINT chkTipo CHECK (tipo IN ('entrada', 'saida')),
    FOREIGN KEY (fkCliente) REFERENCES cliente_cadastro(idCliente)
);
CREATE TABLE opcoes_usuario (
    idOpcao INT PRIMARY KEY AUTO_INCREMENT,
    descricao VARCHAR(200)
);

select * from cliente_cadastro;
select * from itens_financas;
select * from opcoes_usuario;


truncate table itens_financas;
truncate table cliente_cadastro;
truncate table opcoes_usuario;

select descricao as Descrição, count(descricao)as Respostas FROM opcoes_usuario GROUP BY descricao;
select descricao as Descrição, count(descricao)as Respostas FROM opcoes_usuario GROUP BY descricao order by Respostas desc;
select count(idCliente) as Respostas from cliente_cadastro;

