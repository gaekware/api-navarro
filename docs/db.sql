-- CREATE DATABASE gaek
--     WITH
--     OWNER = gaek
--     TEMPLATE = template0
--     ENCODING = 'WIN1252'
--     LC_COLLATE = 'C'
--     LC_CTYPE = 'C'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

CREATE TYPE tipo_registro AS ENUM ('entrada', 'saida');

CREATE TABLE aula_aluno_registro (
	id_aula_aluno_registro SERIAL PRIMARY KEY,
	tipo_registro TIPO_REGISTRO,
	dthr_registro TIMESTAMP,
	mac TEXT NOT NULL
);