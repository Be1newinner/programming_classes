-- 1. String ----------------------------------------------------------------------------------------------

-- 2. Numeric ---------------------------------------------------------------------------------------------

---- a. INT, INTEGER
---- b. DECIMAL(5,2)
---- c. SERIAL
---- d. BIGINT
---- e. SMALLINT
---- f. NUMERIC(5,2)

-- 3. Boolean ---------------------------------------------------------------------------------------------

---- a. BOOL

-- 4. Date ------------------------------------------------------------------------------------------------
---- a. Date
---- b. Time
---- c. TIMESTAMP
---- c. TIMESTAMPTZ
---- e. INTERVAL

CREATE TABLE rest (
    id SERIAL PRIMARY KEY,
    date DATE,
    time TIME,
    timestamp TIMESTAMP,
    timestamptz TIMESTAMPTZ,
    interval INTERVAL
)


DROP TABLE rest;

SELECT * FROM rest;

-- INSERT INTO rest (date,time, timestamp, timestamptz, interval)
INSERT INTO rest (time) VALUES ('2025-11-05');
-- date format YYYY-MM-DD

INSERT INTO rest (time) VALUES ('11:59:12 PM');
-- time format HH:MM:SS PM/AM

INSERT INTO rest (timestamp) VALUES ('1999-01-08 13:05:06');
-- timestamp format YYYY-MM-DD HH:MM:SS

INSERT INTO rest (timestamptz) VALUES ('2004-10-19 10:23:54+0530');
-- timestamptz format YYYY-MM-DD HH:MM:SS+TZ

INSERT INTO rest (interval) VALUES ('2 hours 30 minutes');
-- timestamptz format YYYY-MM-DD HH:MM:SS+TZ

-- Y	Years
-- M	Months (in the date part)
-- W	Weeks
-- D	Days
-- H	Hours
-- M	Minutes (in the time part)
-- S	Seconds

-- 5. Arrays ------------------------------------------------------------------------------------------------


CREATE TABLE arr (
 id SERIAL PRIMARY KEY,
 names VARCHAR(20)[],
 marks INT[]
);
