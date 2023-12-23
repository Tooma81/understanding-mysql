var mysql = require("mysql");

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "qwerty",
    database: "mydb"
    
});

con.connect(function(err) {
    if (err) throw err;
    var sql = 'update customers set address = "Canyon 123" where address = "Valley 345"';
    con.query(sql , function (err, result) {
        if (err) throw err;
        console.log(result.affectedRows + ' record(s) updated');
    })
})