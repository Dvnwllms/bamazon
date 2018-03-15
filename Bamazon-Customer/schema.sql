DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
    item_id INT (10) AUTO_INCREMENT NOT NULL,
    product_name VARCHAR (50) NOT NULL,
    department_name VARCHAR (50) NOT NULL,
    price INT (200) NOT NULL,
    stock_quantity INT (200) NOT NULL,
    PRIMARY KEY (id)
)

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Headphones", "Electronics", 120, 50)

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Baseball Cap", "Clothing", 25, 100)

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hoodie", "Clothing", 50, 75)

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Awesome Video Game", "Electronics", 60, 45)

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Box of Vintage Wu Tang Clan Cds", "Electronics", 45, 10)

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Comic Books", "Books", 15, 40)

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Jichael Bordan Sneakers", "Shoes", 150, 23)

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cell Phone Case", "Misc", 30, 50)

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Raybans", "Accessories", 45, 30)

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hipster Flannel Shirt", "Clothing", 100, 1)