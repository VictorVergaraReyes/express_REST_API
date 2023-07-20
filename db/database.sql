CREATE DATABASE IF NOT EXISTS carddb;

USE carddb;

CREATE TABLE card(
    id INT(6) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR (30) DEFAULT NULL,
    type VARCHAR (20) DEFAULT NULL,
    attack INT (10) DEFAULT NULL,
    defense INT (10) DEFAULT NULL
);

DESCRIBE card;

INSERT INTO card VALUES
    (1,'Dark Magician','Spellcaster',2500,2100),
    (2,'Blue Eyes White Dragon',3000,2500);