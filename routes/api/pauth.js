const express = require('express');
const router = express.Router();
const Supplier = require('../../models/supplier');
const bcrypt = require('bcryptjs');
const pauth = require('../../middleware/pauth')

const config = require('config');
const jwt = require('jsonwebtoken');

router.post("/", (req, res) => {
    const { email, password } = req.body;
    //simple validation
    if (!email || !password)
        return res.status(400).json({ msg: "Please enter all fields" });

    // prettier-ignore
    // Check if user exists (changed slightly from users.js)
    Supplier.findOne({ email })
        //
        .then(supplier => {
            //the hash password from the database comes from user.password
            if (!supplier) return res.status(400).json({ msg: "Supplier does not exist" });

            //Validate password using a method called compare, which takes in the plain text password, and the hashed password. It returns a boolean promise.
            bcrypt.compare(password, supplier.password)
                .then(isMatch => {
                    if (!isMatch) return res.status(400).json({ msg: 'Invalid cresentials' })
                        // jwt.sign(payload, secretOrPrivateKey, [options, callback])
                    jwt.sign({ id: supplier.id },
                        config.get("jwtSecret"), { expiresIn: 3600 },
                        (err, token) => {
                            if (err) throw err;
                            res.json({
                                token: token,
                                supplier: {
                                    id: supplier.id,
                                    name: supplier.name,
                                    email: supplier.email,
                                    role: supplier.role
                                }
                            });
                        }
                    );
                })

        });
    //res.send("register");
});

// This will validate the supplier with the token
// @route  GET apiuser/user
// @desc   Get user date
// @access Private (Auth)
//item
// prettier-ignore
//any get request to api/auth/user uses this route here
router.get("/supplier", pauth, (req, res) => {
    //take the user model and call findById and pass in the ID from the header (req.user.id)
    Supplier.findById(req.supplier.id)
        //disregard the password
        .select('-password ')
        //returns a promise with the user who we want to send

    .then(supplier => res.json(supplier));
});

module.exports = router;