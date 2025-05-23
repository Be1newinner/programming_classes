-- Simple way to create Tables;
CREATE TABLE products (id SERIAL PRIMARY KEY, title varchar(50), price int, mrp int, category_id int);
CREATE TABLE categories (id SERIAL PRIMARY KEY, title varchar(50));
CREATE TABLE users (id SERIAL PRIMARY KEY, name varchar(50), age int, email varchar(50), password varchar(12), phone varchar(10), role_id int, curr_address_id int);
CREATE TABLE roles (id SERIAL PRIMARY KEY, title varchar(50));
CREATE TABLE addresses (id SERIAL PRIMARY KEY, address1 varchar(50), address2 varchar(50), city varchar(20), state varchar(50), pincode int);
CREATE TABLE stocks (id SERIAL PRIMARY KEY, product_id int, qty int);

-- INSERT INTO products (title, price, mrp, category_id) VALUES ('Wireless Mouse', 799, 999, 1);
-- INSERT INTO categories (title) VALUES ('Electronics');

-- Create Tables with Foriegn keys constraints;

-- 2. Products with category_id FK
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  title VARCHAR(50),
  price INT,
  mrp INT,
  category_id INT,
  CONSTRAINT fk_products_category
    FOREIGN KEY (category_id)
    REFERENCES categories(id)
    ON DELETE SET NULL
);

-- 3. Roles table (no FK to categories)
CREATE TABLE roles (
  id SERIAL PRIMARY KEY,
  title VARCHAR(50)
);

-- 4. Addresses table (no FK to categories)
CREATE TABLE addresses (
  id SERIAL PRIMARY KEY,
  address1 VARCHAR(50),
  address2 VARCHAR(50),
  city VARCHAR(20),
  state VARCHAR(50),
  pincode INT
);

-- 5. Users table with FKs to roles & addresses
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  age INT,
  email VARCHAR(50),
  password VARCHAR(12),
  phone VARCHAR(10),
  role_id INT,
  curr_address_id INT,
  CONSTRAINT fk_users_role
    FOREIGN KEY (role_id)
    REFERENCES roles(id)
    ON DELETE SET NULL,
  CONSTRAINT fk_users_address
    FOREIGN KEY (curr_address_id)
    REFERENCES addresses(id)
    ON DELETE SET NULL
);

-- 6. Stocks table with FK to products
CREATE TABLE stocks (
  id SERIAL PRIMARY KEY,
  product_id INT,
  qty INT,
  CONSTRAINT fk_stocks_product
    FOREIGN KEY (product_id)
    REFERENCES products(id)
    ON DELETE CASCADE
);


DROP TABLE products;
DROP TABLE categories;
DROP TABLE addresses;
DROP TABLE stocks;
DROP TABLE users;
DROP TABLE roles;

DELETE FROM products WHERE id < 1000;


-- CREATE TABLE products (
--   id SERIAL PRIMARY KEY,
--   title VARCHAR(50),
--   price INT,
--   mrp INT,
--   category_id INT,
--   CONSTRAINT fk_products_category
--     FOREIGN KEY (category_id)
--     REFERENCES categories(id)
--     ON DELETE SET NULL
-- );

-- Insert Data
INSERT INTO roles (title) VALUES 
('admin'),
('user'),
('vendor'),
('moderator');

INSERT INTO roles (title) VALUES ('moderator');

INSERT INTO categories (title) VALUES 
('Electronics'),
('Clothing'),
('Books'),
('Groceries'),
('Furniture');

INSERT INTO products (title, price, mrp, category_id) VALUES
('Wireless Mouse', 799, 999, 1),
('Gaming Keyboard', 2199, 2499, 1),
('USB-C Charger', 499, 699, 1),
('Smartphone', 15999, 17999, 1),
('LED Monitor', 8999, 9999, 1),
('Jeans Men', 1299, 1499, 2),
('T-Shirt Women', 499, 699, 2),
('Jacket', 1999, 2499, 2),
('Dress Shoes', 2999, 3499, 2),
('Sneakers', 2499, 2999, 2),
('Python Programming', 599, 799, 3),
('Data Structures Book', 699, 999, 3),
('Fiction Novel', 399, 499, 3),
('Biography', 499, 599, 3),
('Machine Learning Book', 899, 1199, 3),
('Rice 5kg', 299, 349, 4),
('Wheat Flour 10kg', 499, 549, 4),
('Olive Oil 1L', 399, 449, 4),
('Snacks Combo', 199, 249, 4),
('Biscuits Pack', 99, 129, 4),
('Office Chair', 3499, 3999, 5),
('Study Table', 4999, 5499, 5),
('Sofa Set', 19999, 24999, 5),
('Bookshelf', 1999, 2499, 5),
('Dining Table', 7999, 8999, 5),
('Bluetooth Speaker', 1499, 1799, 1),
('Laptop Stand', 999, 1199, 1),
('Cap', 299, 399, 2),
('Notebook Set', 199, 249, 3),
('Organic Honey', 299, 349, 4);

INSERT INTO stocks (product_id, qty) VALUES
(1, 100),
(2, 150),
(3, 120),
(4, 80),
(5, 60),
(6, 200),
(7, 300),
(8, 90),
(9, 110),
(10, 100),
(11, 250),
(12, 130),
(13, 180),
(14, 90),
(15, 160),
(16, 400),
(17, 350),
(18, 270),
(19, 290),
(20, 310),
(21, 75),
(22, 65),
(23, 45),
(24, 85),
(25, 50),
(26, 220),
(27, 180),
(28, 150),
(29, 230),
(30, 260);

INSERT INTO addresses (address1, address2, city, state, pincode) VALUES
('123A Main Street', 'Apt 101', 'New Delhi', 'Delhi', 110001),
('221B Baker Street', 'Near Metro', 'New Delhi', 'Delhi', 110002),
('45 Civil Lines', 'Opposite Park', 'New Delhi', 'Delhi', 110003),
('G-23 Connaught Place', 'Above Cafe', 'New Delhi', 'Delhi', 110004),

('5th Cross Rd', 'Near Forum Mall', 'Bangalore', 'Karnataka', 560001),
('12 MG Road', 'Opp Metro Station', 'Bangalore', 'Karnataka', 560002),
('98 Residency Rd', 'Beside SBI', 'Bangalore', 'Karnataka', 560003),
('1A Koramangala', 'Next to Pizza Hut', 'Bangalore', 'Karnataka', 560034),

('Plot 45 Sector 62', 'Tech Park', 'Noida', 'Uttar Pradesh', 201301),
('Block A2', 'Near City Centre', 'Noida', 'Uttar Pradesh', 201302),
('G-19', 'Opp Sector 18 Market', 'Noida', 'Uttar Pradesh', 201303),
('Plot 12', 'Near Amity', 'Noida', 'Uttar Pradesh', 201304),

('101 Phoenix Towers', 'Bandra West', 'Mumbai', 'Maharashtra', 400001),
('Flat 9C', 'Marine Drive', 'Mumbai', 'Maharashtra', 400002),
('Green Acres', 'Andheri East', 'Mumbai', 'Maharashtra', 400003),
('33 Infinity Towers', 'Malad', 'Mumbai', 'Maharashtra', 400004),

('H-21 Sector 10', 'DLF Phase 1', 'Gurgaon', 'Haryana', 122001),
('A-78', 'Near Cyber Hub', 'Gurgaon', 'Haryana', 122002),
('B-33', 'Sushant Lok', 'Gurgaon', 'Haryana', 122003),
('M3M Tower', 'Golf Course Road', 'Gurgaon', 'Haryana', 122004),

('House 11', 'Phase 3', 'Chandigarh', 'Punjab', 160001),
('Flat 502', 'Sector 22B', 'Chandigarh', 'Punjab', 160002),
('Plot 9', 'Manimajra', 'Chandigarh', 'Punjab', 160003),
('12 Industrial Area', 'Phase 1', 'Chandigarh', 'Punjab', 160004),

('1 Ashok Nagar', 'Lane 2', 'Pune', 'Maharashtra', 411001),
('Flat 7B', 'Model Colony', 'Pune', 'Maharashtra', 411002),
('Sector 5', 'Baner Road', 'Pune', 'Maharashtra', 411003),
('Yash Heights', 'Wakad', 'Pune', 'Maharashtra', 411004),

('Flat 304', 'Rajendra Nagar', 'Hyderabad', 'Telangana', 500001),
('10 Jubilee Hills', 'Road No. 36', 'Hyderabad', 'Telangana', 500002),
('Sri Ram Residency', 'Kondapur', 'Hyderabad', 'Telangana', 500003),
('House 49', 'Gachibowli', 'Hyderabad', 'Telangana', 500004),

('2 Park Street', 'Salt Lake', 'Kolkata', 'West Bengal', 700001),
('32A', 'New Town', 'Kolkata', 'West Bengal', 700002),
('Sector V', 'Opp Infinity IT Park', 'Kolkata', 'West Bengal', 700091),
('Flat 102', 'Howrah', 'Kolkata', 'West Bengal', 700003),

('34 Naya Bazar', 'Near Railway Station', 'Patna', 'Bihar', 800001),
('Flat 8A', 'Rajendra Nagar', 'Patna', 'Bihar', 800002),
('MIG 29', 'Kankarbagh', 'Patna', 'Bihar', 800003),
('Plot 55', 'Bailey Road', 'Patna', 'Bihar', 800004),

('7 Gandhi Path', 'Near Airport', 'Jaipur', 'Rajasthan', 302001),
('Flat 3C', 'Malviya Nagar', 'Jaipur', 'Rajasthan', 302002),
('B-77', 'C-Scheme', 'Jaipur', 'Rajasthan', 302003),
('K-19', 'Ajmer Road', 'Jaipur', 'Rajasthan', 302004),

('20 Park Avenue', 'MG Road', 'Indore', 'Madhya Pradesh', 452001),
('Block C', 'Vijay Nagar', 'Indore', 'Madhya Pradesh', 452002),
('15 Rajwada', 'Opp Clock Tower', 'Indore', 'Madhya Pradesh', 452003),
('Flat 404', 'Treasure Island', 'Indore', 'Madhya Pradesh', 452004),

('18 Sector C', 'Gomti Nagar', 'Lucknow', 'Uttar Pradesh', 226001),
('K-102', 'Alambagh', 'Lucknow', 'Uttar Pradesh', 226002),
('House 72', 'Indira Nagar', 'Lucknow', 'Uttar Pradesh', 226003),
('Plot 28', 'Hazratganj', 'Lucknow', 'Uttar Pradesh', 226004),

('H.No 65', 'Nehru Colony', 'Dehradun', 'Uttarakhand', 248001),
('Flat 301', 'Race Course', 'Dehradun', 'Uttarakhand', 248002),
('Plot 11', 'Rajpur Road', 'Dehradun', 'Uttarakhand', 248003),
('Sector B', 'ISBT Area', 'Dehradun', 'Uttarakhand', 248004),

('A-17', 'Govindpuri', 'Kanpur', 'Uttar Pradesh', 208001),
('House 90', 'Arya Nagar', 'Kanpur', 'Uttar Pradesh', 208002),
('Flat 6C', 'Shastri Nagar', 'Kanpur', 'Uttar Pradesh', 208003),
('Rama Complex', 'Kakadeo', 'Kanpur', 'Uttar Pradesh', 208004),

('1 Church Street', 'Civil Lines', 'Nagpur', 'Maharashtra', 440001),
('Flat 8D', 'Dharampeth', 'Nagpur', 'Maharashtra', 440002),
('G-45', 'Sitabuldi', 'Nagpur', 'Maharashtra', 440003),
('Plot 66', 'Manish Nagar', 'Nagpur', 'Maharashtra', 440004),

('Flat 502', 'Sector 10', 'Faridabad', 'Haryana', 121001),
('House 3', 'NIT', 'Faridabad', 'Haryana', 121002),
('B-99', 'Ballabhgarh', 'Faridabad', 'Haryana', 121003),
('SRS Tower', 'Mathura Road', 'Faridabad', 'Haryana', 121004);

INSERT INTO users (name, age, email, password, phone, role_id, curr_address_id) VALUES
('Vijay Kumar', 28, 'vijay@example.com', 'pass12345678', '9876543210', 1, 1),
('Asha Rani', 32, 'asha@example.com', 'pass12345678', '9876543211', 2, 5),
('Rahul Mehta', 26, 'rahul@example.com', 'pass12345678', '9876543212', 2, 9),
('Sneha Sharma', 30, 'sneha@example.com', 'pass12345678', '9876543213', 3, 13),
('Ravi Kapoor', 29, 'ravi@example.com', 'pass12345678', '9876543214', 4, 17),
('Neha Singh', 27, 'neha@example.com', 'pass12345678', '9876543215', 2, 21),
('Amit Chauhan', 35, 'amit@example.com', 'pass12345678', '9876543216', 1, 25),
('Pooja Yadav', 24, 'pooja@example.com', 'pass12345678', '9876543217', 2, 29),
('Deepak Joshi', 31, 'deepak@example.com', 'pass12345678', '9876543218', 3, 33),
('Kiran Verma', 33, 'kiran@example.com', 'pass12345678', '9876543219', 4, 37),
('Sumit Gupta', 30, 'sumit@example.com', 'pass12345678', '9876543220', 2, 41),
('Anjali Sinha', 25, 'anjali@example.com', 'pass12345678', '9876543221', 3, 45),
('Manish Jain', 29, 'manish@example.com', 'pass12345678', '9876543222', 2, 49),
('Preeti Rao', 28, 'preeti@example.com', 'pass12345678', '9876543223', 1, 53),
('Arjun Desai', 34, 'arjun@example.com', 'pass12345678', '9876543224', 3, 57),
('Megha Pandey', 27, 'megha@example.com', 'pass12345678', '9876543225', 2, 61),
('Rohit Nair', 32, 'rohit@example.com', 'pass12345678', '9876543226', 4, 65),
('Tanya Dutt', 26, 'tanya@example.com', 'pass12345678', '9876543227', 3, 64),
('Harshita Malhotra', 31, 'harshita@example.com', 'pass12345678', '9876543228', 2, 53),
('Nikhil Bansal', 28, 'nikhil@example.com', 'pass12345678', '9876543229', 1, 27);

-- SELECT ALL DATA
SELECT * FROM users;
SELECT * FROM stocks;
SELECT * FROM categories;
SELECT * FROM products;
SELECT * FROM roles;
SELECT * FROM addresses;



-- SEQUENCE

select * from pg_sequences;
ALTER SEQUENCE categories_id_seq RESTART WITH 1;
ALTER SEQUENCE products_id_seq RESTART WITH 1;
ALTER SEQUENCE users_id_seq RESTART WITH 1;
ALTER SEQUENCE roles_id_seq RESTART WITH 4;

DELETE FROM categories WHERE id > 6;
DELETE FROM products;
DELETE FROM users;

DELETE FROM roles WHERE id=4;
