const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "@mysqlroot2021",
    database: "emptable",
});

app.post("/create", (req, res) => {
    const emp_name = req.body.emp_name;
    const emp_position = req.body.emp_position;
    const emp_age = req.body.emp_age;
    const emp_salary = req.body.emp_salary;

    db.query(
        "INSERT INTO emptable (emp_name, emp_position,emp_age, emp_salary) VALUES (?,?,?,?)", [emp_name, emp_position, emp_age, emp_salary],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Values Inserted");
            }
        }
    );
});

app.get("/employees", (req, res) => {
    db.query("SELECT * FROM employees", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.put("/update", (req, res) => {
    const id = req.body.id;
    const emp_salary = req.body.emp_salary;
    db.query(
        "UPDATE employees SET wage = ? WHERE id = ?", [wage, id],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});

app.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM employees WHERE id = ?", id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.listen(3001, () => {
    console.log("Yey, your server is running on port 3001");
});