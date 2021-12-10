const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const Employee = require('../../models/users');
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
router.get('/', (req, res) => {
    Employee.find()
        .sort({ register_date: -1 })
        .then(employees => res.json(employees));
});
router.post("/", (req, res) => {
    //pull out some variables out of req.body with destructuring
    const { name, email, role, password } = req.body;

    //Simple vallidation
    if (!email || !password || !name || !role)
        return res.status(400).json({ msg: "please enter all fields" });


    // Check for existing employee in the employee model
    Employee.findOne({ email })
        .then(employee => {
            if (employee) return res.status(400).json({ msg: 'Employee already exists' })

            const newEmployee = new Employee({
                name,
                email,
                role,
                password
            });

            //create salt and hash
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newEmployee.password, salt, (err, hash) => {
                    if (err) throw err;
                    newEmployee.password = hash;
                    newEmployee.save()
                        .then(employee => {

                            jwt.sign({ id: employee.id }, config.get('jwtSecret'), {
                                expiresIn: 3600
                            }, (err, token) => {
                                if (
                                    err
                                ) throw err;
                                res.json({
                                    token,
                                    employee: {


                                        id: employee.id,
                                        name: employee.name,
                                        email: employee.email,
                                        role: employee.role
                                    }
                                })
                            })

                        })
                });
            });

        });



})
router.delete('/:id', (req, res) => {
    Employee.findById(req.params.id)
        .then(employee => employee.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;