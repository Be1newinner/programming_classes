-- DB RELATED QUERIES

SELECT datname FROM pg_database;
SELECT table_schema, table_name FROM information_schema.tables;
SELECT * FROM information_schema.tables;

-- STUDENTS TABLE 

CREATE TABLE students (
 id int,
 name varchar(30),
 roll_no int,
 course varchar(50)
);

INSERT INTO students ( id, name, roll_no, course ) VALUES 
( 1, 'Vijay', 1, 'BCA' ),
( 2, 'Ajay', 2, 'BCA' );

INSERT INTO students ( id, name, roll_no, course ) VALUES 
( 3, 'Vijay K', 3, 'MCA' ),
( 4, 'Ajay K', 4, 'MCA' );

SELECT * FROM students;
SELECT * FROM students WHERE course = 'MCA';
SELECT * students WHERE id = 4;
SELECT name FROM students WHERE id = 4;
SELECT id, name FROM students;

-- UPDATE QUERIES
UPDATE students SET name = 'AJAY KUMAR' WHERE id = 4;

DELETE FROM students WHERE id = 2;


-- DUMMY DAT INSERTION

DROP TABLE IF EXISTS teachers;
CREATE TABLE teachers (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    age INT CHECK (age >= 18 AND age <= 65),
    experience INT CHECK (experience >= 0),
    salary NUMERIC(10,2),
    city TEXT,
    phone TEXT,
    gender TEXT CHECK (gender IN ('Male', 'Female', 'Other'))
);

INSERT INTO teachers (name, age, experience, salary, city, phone, gender)
SELECT 
    'Teacher_' || gs AS name,
    FLOOR(RANDOM() * 30 + 25)::INT AS age,                           -- Age: 25–55
    FLOOR(RANDOM() * 30)::INT AS experience,                        -- Experience: 0–30
    ROUND((RANDOM() * 50000 + 30000)::NUMERIC, 2) AS salary,        -- Salary: 30,000–80,000
    (ARRAY['Delhi', 'Mumbai', 'Chennai', 'Kolkata', 'Bangalore'])[FLOOR(RANDOM() * 5 + 1)::INT] AS city,
    '98765' || LPAD(FLOOR(RANDOM() * 100000)::TEXT, 5, '0') AS phone,
    (ARRAY['Male', 'Female', 'Other'])[FLOOR(RANDOM() * 3 + 1)::INT] AS gender
FROM generate_series(1, 1000) AS gs;

-- DUMMY DATA END


SELECT * FROM teachers;

-- SQL OPERATORS
-- < , > , <= , >= , <> , != , AND , OR , IN, LIKE , ILIKE , BETWEEN , IS NUL , NOT

-- greater than operator
SELECT id, name, gender, salary FROM teachers WHERE salary > 50000;

-- less than operator
SELECT id, name, gender, salary FROM teachers WHERE salary < 50000;

-- equal to operator
SELECT id, name, gender, salary FROM teachers WHERE gender = 'Male';

-- less than equal to operator , AND Operator
SELECT * FROM teachers WHERE gender <> 'Other' AND salary <= 50000;

-- OR Operator and LIMIT Command
SELECT id, name, gender, salary FROM teachers WHERE gender = 'Male' OR gender = 'Female' LIMIT 10;

-- IN Operator e.g. IN ( 'NAME' , 'NAME 1' , 'NAME 2' )

-- BETWEEN Operator e.g. BETWEEN 10 AND 20


-- LIKE and ILIKE Operator
SELECT * FROM students WHERE name LIKE 'V%';
SELECT * FROM students WHERE name LIKE '%V';