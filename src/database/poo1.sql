-- Active: 1685053119449@@127.0.0.1@3306
CREATE TABLE videos (
    id TEXT NOT NULL UNIQUE PRIMARY KEY,
    titulo TEXT NOT NULL,
    segundos REAL NOT NULL,
    upload_date TEXT NOT NULL
);

DROP TABLE videos;
