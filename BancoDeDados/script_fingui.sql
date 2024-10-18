CREATE DATABASE FinGui;
USE FinGui;

CREATE TABLE cliente_cadastro (
    idCliente INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
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

-- EXEMPLOS DE INSERÇÃO DE DADOS, POSTERIOR FAZER COM API (?)
INSERT INTO cliente_cadastro (nome, email, senha) VALUES
('Guilherme Augusto Figueiredo', 'guilherme.figueiredo@email.com', 'FinGui123'),
('Ariane Moreira da Silva', 'ariane.silva@mail.com', 'senha123');

INSERT INTO itens_financas (descricao, valor, tipo, fkCliente) VALUES
('Salario', 3000.00, 'entrada', 1),
('Aluguel', 1500.00, 'saida', 1),
('Uber Motorista', 800.00, 'entrada', 2),
('Compras do Mes', 200.00, 'saida', 2);

SELECT 
    c.nome AS cliente,
    c.email,
    i.descricao,
    i.valor,
    i.tipo
	FROM itens_financas i
	JOIN cliente_cadastro c 
	ON i.fkCliente = c.idCliente 
	ORDER BY c.nome;
