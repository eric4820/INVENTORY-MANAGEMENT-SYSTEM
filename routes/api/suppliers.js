const express = require('express');
const router = express.Router();
const pauth = require('../../middleware/pauth');

const Supplier = require('../../models/supplier');

const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
router.get('/', (req, res) => {
    Supplier.find()
        .sort({ date: -1 })
        .then(suppliers => res.json(suppliers));
});

router.post("/", (req, res) => {
    //pull out some variables out of req.body with destructuring
    const { name, email, password, location } = req.body;

    //Simple vallidation
    if (!email || !password || !name)
        return res.status(400).json({ msg: "Please enter all fields" });


    // Check for existing user in the user model
    Supplier.findOne({ email })
        .then(supplier => {
            if (supplier) return res.status(400).json({ msg: 'Supplier already exists' })

            const newUser = new Supplier({
                name,
                email,
                location,
                password,

            });

            //create salt and hash
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(supplier => {

                            jwt.sign({ id: supplier.id }, config.get('jwtSecret'), {
                                expiresIn: 3600
                            }, (err, token) => {
                                if (
                                    err
                                ) throw err;
                                res.json({
                                    token,
                                    supplier: {


                                        id: supplier.id,
                                        name: supplier.name,
                                        email: supplier.email,
                                        location: supplier.location,


                                    }
                                })
                            })

                        })
                });
            });

        });



})

router.delete('/:id', pauth, (req, res) => {
    Supplier.findById(req.params.id)
        .then(supplier => supplier.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;