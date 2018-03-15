var mysql = require("mysql");
var inquirer = require("inquirer");
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Kungfutango1",
    database: "bamazon_db"
});

connection.connect(function(err) {
    if (err) throw err;
    select();
});

function select() {
    inquirer.prompt([
        {
            name: "questions",
            type: "list",
            message: "Do you have the product ID or do you want to check item stock?",
            choices: ["id", "stock",]
        }
    ]).then(function(user){
        switch (user.questions) {
            case "id":
                idInput();
                break;
            case "stock":
                stockCheck();
                break;
        }
    })
};

function idInput() {
    inquirer.prompt([
        {
           name: "idLookUp", 
           type: "input",
           message: "What is the ID of the product you want to buy?"
        }
    ]).then(function(user){
        connection.query("SELECT * FROM products WHERE item_id=?", [user.idLookUp], function(err, res){
            if (err) throw err;
            console.log(res);
            connection.end();
        })
    })
}

function idInput() {
    inquirer.prompt([
        {
           name: "stockFinder", 
           type: "input",
           message: "What product are you trying to check inventory for?"
        }
    ]).then(function(user){
        connection.query("SELECT stock_quantity FROM products WHERE product_name=?", [user.stockFinder], function(err, res){
            if (err) throw err;
            console.log(res);
            connection.end();
        })
    })
}