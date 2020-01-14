var mysql = require("mysql");
// var console = require("console.table");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "mysql",
    database: "employee_tracker_DB"
});

connection.connect(function(err) {
    if (err) throw err;
    start();
});

const start = function() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View departments, roles, or employees?",
        "Add departments?",
        "Add roles?",
        "Add employees?",
        "Add a role?",
        "EXIT"
      ]
    })
    .then(function (answer) {
        // switch case for functionality ascociated with each question
        switch (answer.action) {
          case "View departments, roles, or employees?":
            viewSearch();
            break;
          case "Add departments?":

            break;
          case "Add roles?":
            
            break;
          case "Add employees?":
            
            break;
          case "Add a role?":
            updateRole();
            break;
          case "EXIT":
            exit();
            break;
          default:
            break;  
        // more cases and breaks calling related funcitons
        }
    });
}


// add examples into all tables to test functions.


const viewSearch = function() {
  inquirer
    .prompt({
      name: "view",
      type: "list",
      message: "Which do you want to view?",
      choices: [
        "Departments",
        "Roles",
        "Employee"
      ]
    })
    .then(function(answer) {
      if (answer = "Departments") {
        let query = "SELECT * FROM department";
        connection.query(query, { id: answer.id, name: answer.name }, function(err, res) {
        for (var i = 0; i < res.length; i ++) {
          console.log(`Department ID: ${res[i].id} || Department Name: ${res[i].name}`);
        } 
      })
      exit();     
    };
  });
};

const viewRole = function() {
  var query = "SELECT * FROM role";
  connection.query(query, { id: answer.id, title: answer.title, department: answer.department_id }, function(err, res) {
    for (var i = 0; i < res.length; i ++) {
      conosle.log(`Role ID: ${res[i].id} || Title: ${res[i].title} || Department: ${res[i].department}`);
    }
  });
};

const viewEmployees = function() {
  var query = "SELECT * FROM employee";
  connection.query(query, { id: answer.id, name: answer.first_name + answer.last_name, role: answer.role_id, manager: answer.manager_id }, function(err, res) {
    for (var i = 0; i < res.length; i ++) {
      conosle.log(`Employee ID: ${res[i].id} || Employee: ${res[i].name} || Role: ${res[i].role} || Manager: ${res[i].manager}`);
    }
  });
}

function exit() {
  connection.end();
}