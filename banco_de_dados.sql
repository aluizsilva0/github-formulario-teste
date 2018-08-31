create database formularioteste;
use formularioteste;

create table usuarios(
id integer auto_increment not null primary key,
nome varchar(100) not null,
email varchar(250) not null,
cpf varchar(14) not null,
dataNascimento date not null
);
