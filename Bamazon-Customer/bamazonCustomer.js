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
    showData();
    
});

function showData() {
    connection.query ("SELECT item_id, product_name, price FROM products", function(err, res) {
        if (err) throw err

        for (var i = 0; i < res.length; i++) {
            
            var id = res[i].item_id;
            var name = res[i].product_name;
            var price = res[i].price;

            console.log("ID #: " + id + " Product Name: " + name + " Price $" + price);
        }
        inquirer.prompt([
            {
                name: "idselect",
                type: "input",
                message: "Enter ID # of product you want to purchase."
            },
            
            {
                name: "quantityselect",
                type: "input",
                message: "How many do you want?"
            }
        ]).then(function(checkOut) {

            var item = checkOut.idselect;
            var inStock = checkOut.quantityselect;

            connection.query("SELECT * FROM products WHERE item_id =?", (item), function(err, res) {

                var thisProduct = res[0];
                var stockQuantity = thisProduct.stock_quantity;

                if (stockQuantity < inStock) {
                    console.log("Sorry, that item is sold out!");
                    showData();
                    
                }else{
                    console.log("Order recieved! Thanks for shopping with Bamazon! Now pay up!!!")
                    connection.end();
                }

            })


        });
    });       
}