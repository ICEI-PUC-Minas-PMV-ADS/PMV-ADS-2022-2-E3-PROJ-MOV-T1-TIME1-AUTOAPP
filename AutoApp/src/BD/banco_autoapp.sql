create database AutoApp;

use AutoApp;

 

-- Criando as tabelas do banco de dados

create table Usuario (

idUsuario char(255) primary key,

name char(255),

email char(255),

password char(8)

);

 

create table Carro (

idVeículo char(255) primary key,

licencePlate char(20),

brand char(255),

model ichar(255),

year date(4),

idUsuario_Veículo char(255),

constraint FK_Veículo_Usuario foreign key (idUsuario_Veículo) references Usuario(idUsuario)

);

 

create table Maintanances (

idMain char(10) primary key,

tipoMain char(255),

kmVehicle char(10),

dataMaintanances date,

idVehicle char(8),

constraint FK_Main_Veículo foreign key (idVehicle_Main) references Vehicle(idVeículo)

);