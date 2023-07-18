CREATE DATABASE IF NOT EXISTS carddb;

USE carddb;

CREATE TABLE card(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR (30) DEFAULT NULL,
    type VARCHAR (10) DEFAULT NULL,
    attack INT (10) DEFAULT NULL,
    defense INT (10) DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE card;

INSERT INTO card VALUES
    (1,'Dark Magician','Spellcaster',2500,2100),
    (2,'Blue Eyes White Dragon',3000,2500);