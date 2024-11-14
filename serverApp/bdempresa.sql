create database bdempresa;

use bdempresa;

create table depart
 (dep_cod integer auto_increment primary key,
 dep_nome varchar(20) not null);
 
 create table cargo
  (car_cod integer auto_increment primary key,
  car_nome varchar(20) not null);
  
  create table func
  (fun_mat integer primary key,
  fun_nome varchar (40) not null,
  fun_genero varchar (1) not null,
  fun_dt_adm date not null,
  fun_salar numeric (6,2) not null,
  fun_situac integer default 0 check (fun_situac in (0,1)),
  dep_cod integer not null,
  car_cod integer not null,
  foreign key (dep_cod) references depart (dep_cod),
  foreign key (car_cod) references cargo (car_cod));

create table user
(usu_id integer auto_increment primary key,
 usu_nome varchar(20) not null,
 usu_email varchar(20) not null,
 usu_senha varchar(20) not null,
 usu_level integer not null);

  