drop table bdempresa;

create database bdclinica;

use dbclinica;

create table espec
(esp_cod integer auto_increment primary key,
 esp_nome varchar(20) not null);

create table medico
(med_crm integer primary key,
 med_nome varchar(30) not null,
 esp_cod integer not null,
 foreign key(esp_cod) references espec(esp_cod));