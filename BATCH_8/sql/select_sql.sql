-- GROUPS SELECTION
SELECT * FROM teachers;

SELECT DISTINCT city FROM teachers;

SELECT * FROM teachers ORDER BY city ASC LIMIT 10 OFFSET 700;

SELECT * FROM teachers LIMIT 10 OFFSET 30;


-- Aggregation
-- COUNT, MIN, MAX, AVG, SUM, HAVING, GROUP BY 

SELECT COUNT(*) FROM teachers;

SELECT AVG(experience), AVG(age)  FROM teachers;

SELECT MIN(age), MAX(age) FROM teachers;

SELECT SUM(salary) FROM teachers;

SELECT COUNT(*) AS total_employees, AVG(experience) AS avg_exp, AVG(age) AS avg_age, MIN(age), MAX(age), SUM(salary), age, city FROM teachers GROUP BY age, city HAVING age > 30;
