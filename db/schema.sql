USE burgers_db; 

DROP TABLE IF EXISTS burgers; 

CREATE TABLE burgers(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, 
    burger_name VARCHAR(30) NOT NULL, 
    devoured BOOLEAN
)
