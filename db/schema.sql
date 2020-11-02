CREATE DATABASE IF NOT EXISTS sweets_db; 
USE sweets_db; 

DROP TABLE IF EXISTS sweets; 

CREATE TABLE sweets(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, 
    dessert_name VARCHAR(30) NOT NULL, 
    devoured BOOLEAN
)
