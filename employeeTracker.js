var mysql = require("myysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Fbuller1!",
    database: "employee_tracker_DB"
});

connection.connect(function(err) {
    if (err) throw err;
    // name of first iquirer function called here to start program maybe:
    start();
});

function start() {
  inquirer
    .prompt({
        name: "#",
        type: "#",
        message: "#",
        choices: [
          "#",
          "#",
          "#",
          "#",// and so on
        ]
    })
    .then (function(answer) {
        // switch case for functionality ascociated with each question
        switch (answer.action) {
         case "#":
          //functionNameHere()
          break;

        // more cases and breaks calling related funcitons
        
    });
}

// more functions that are called in each case above and contain further necessary questions.b