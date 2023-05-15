CREATE TABLE videos (
    id TEXT NOT NULL UNIQUE PRIMARY KEY,
    titulo TEXT NOT NULL,
    segundos REAL NOT NULL,
    upload_date TEXT DEFAULT(DATETIME('now', 'localtime')) NOT NULL
);

