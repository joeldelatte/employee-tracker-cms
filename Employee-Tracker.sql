DROP DATABASE IF EXISTS employee_tracker_DB;
CREATE database employee_tracker_DB;

USE employee_tracker_DB;

CREATE TABLE department (
  id INTEGER NOT NULL
  AUTO_INCREMENT,
  PRIMARY KEY (id),
  name VARCHAR(30)
)

CREATE TABLE role (
  id INTEGER NOT NULL
  AUTO_INCREMENT,
  title VARCHAR(30),
  salary DECIMAL(6,2)
  department_id INT,
  CONSTRAINT emp_department
    FOREIGN KEY (department_id) 
        REFERENCES department(id)
)

-- I am creating the database in the workbench without the table below until I figure out how to create
-- the second FOREIGN and to what table and column it referrences.

CREATE TABLE employee (
  id INTEGER NOT NULL
  AUTO_INCREMENT, 
  PRIMARY KEY (id),
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
  CONSTRAINT emp_role
    FOREIGN KEY (role_id) 
        REFERENCES role(role_id)
  manager_id INT,
  CONSTRAINT emp_manager
    FOREIGN KEY (manager_id) 
        REFERENCES role(title.id)
);


SELECT * FROM role;
SELECT * FROM deparment;


