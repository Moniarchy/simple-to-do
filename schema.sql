DROP TABLE IF EXISTS todos;
CREATE TABLE todos(
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description VARCHAR(255) NOT NULL
);
