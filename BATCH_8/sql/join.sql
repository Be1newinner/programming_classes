-- SELECT ALL DATA
SELECT * FROM users;
SELECT * FROM stocks;
SELECT * FROM categories;
SELECT * FROM products;
SELECT * FROM roles;
SELECT * FROM addresses;

-- Joins
-- Types of JOINS
-- 1. INNER JOIN – “Match only when both sides have data”
SELECT users.name, roles.title FROM users INNER JOIN roles ON users.role_id = roles.id;

-- 2. LEFT JOIN – “All from the left, matching from the right”
SELECT users.name, roles.title FROM users LEFT JOIN roles ON users.role_id = roles.id;

-- 3. RIGHT JOIN – “All from the right, matching from the left”
SELECT roles.title, users.name FROM users RIGHT JOIN roles ON users.role_id = roles.id;

-- 4. FULL OUTER JOIN – “Everything from both sides”
SELECT users.name, roles.title FROM users FULL OUTER JOIN roles ON users.role_id = roles.id;

-- 5. CROSS JOIN – “All combinations (Cartesian product)”
SELECT u.name, r.title FROM users u CROSS JOIN roles r;


-- Other examples
SELECT 
  p.title AS product,
  c.title AS category,
  s.qty AS stock_qty
FROM products p
JOIN categories c ON p.category_id = c.id
JOIN stocks s ON p.id = s.product_id;

SELECT 
  u.name,
  u.email,
  r.title AS role,
  a.address1,
  a.city,
  a.state,
  a.pincode
FROM users u
JOIN roles r ON u.role_id = r.id
JOIN addresses a ON u.curr_address_id = a.id;
