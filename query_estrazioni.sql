-- Query 1: Estrai tutti i clienti con nome Mario
SELECT * FROM clienti WHERE nome = 'Mario';

-- Query 2: Estrai nome e cognome dei clienti nati nel 1982
SELECT nome, cognome FROM clienti WHERE YEAR(data_nascita) = 1982;