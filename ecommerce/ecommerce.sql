
create database projectdb;

use projectdb;

create table products(
id int PRIMARY KEY AUTO_INCREMENT ,
title varchar(50),
category varchar(50),
description varchar(200),
price double,
image varchar(200)
);

select * from products;