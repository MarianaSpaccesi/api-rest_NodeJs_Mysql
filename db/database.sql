CREATE DATABASE IF NOT EXIST companydb;

create table employee(
id INT (11) NOT NULL AUTO_INCREMENT, 
name VARCHAR (45) DEFAULT NULL,
salary INT (5) DEFAULT NULL,
primary key (id)
);

INSERT INTO employee VALUES 
(1, 'Joe', 1000),
(2, 'Henry', 2000),
(3, 'Sam', 1500),
(4, 'Jenny', 2200)
