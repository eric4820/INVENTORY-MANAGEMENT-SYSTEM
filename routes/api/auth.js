const express = require('express');
const router = express.Router();
const Employee = require('../../models/users');
const bcrypt = require('bcryptjs');
const auth = require('../../middleware/auth')

const config = require('config');
const jwt = require('jsonwebtoken');

router.post("/", (req, res) => {
    const { email, password } = req.body;
    //simple validation
    if (!email || !password)
        return res.status(400).json({ msg: "Please enter all fields" });

    // prettier-ignore
    // Check if employees exists (changed slightly from employeess.js)
    Employee.findOne({ email })
        //
        .then(employee => {
            //the hash password from the database comes from employees.password
            if (!employee) return res.status(400).json({ msg: "Employee does not exist" });

            //Validate password using a method called compare, which takes in the plain text password, and the hashed password. It returns a boolean promise.
            bcrypt.compare(password, employee.password)
                .then(isMatch => {
                    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' })
                        // jwt.sign(payload, secretOrPrivateKey, [options, callback])
                    jwt.sign({ id: employee.id },
                        config.get("jwtSecret"), { expiresIn: 3600 },
                        (err, token) => {
                            if (err) throw err;
                            res.json({
                                token: token,
                                employee: {
                                    id: employee.id,
                                    name: employee.name,
                                    email: employee.email,
                                    role: employee.role
                                }
                            });
                        }
                    );
                })

        });
    //res.send("register");
});

// This will validate the employees with the token
// @route  GET api/auth/employees
// @desc   Get employees date
// @access Private (Auth)

// prettier-ignore
//any get request to api/auth/employees uses this route here
router.get("/employee", auth, (req, res) => {
    //take the employees model and call findById and pass in the ID from the header (req.employees.id)
    Employee.findById(req.employee.id)
        //disregard the password
        .select('-password ')
        //returns a promise with the employees who we want to send

    .then(employee => res.json(employee));
});

module.exports = router;