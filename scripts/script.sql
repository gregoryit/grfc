CREATE TABLE logins(
	id SERIAL PRIMARY KEY,
	login VARCHAR(100),
	password VARCHAR(100)
);

INSERT INTO logins(login, password)
VALUES ('test', 'test');



