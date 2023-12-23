var mysql = require("mysql");

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "qwerty",
    database: "mydb"
    
});

con.connect(function(err) {
    if (err) throw err;
    var sql = 'select users.name as user, products.name as favorite from users join products on users.favorite_product = products.id';
    con.query(sql , function (err, result) {
        if (err) throw err;
        console.log(result);
    })
})