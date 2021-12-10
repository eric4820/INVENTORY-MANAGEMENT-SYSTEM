const express = require('express');


// Item Model
const Inventory = require('../../models/Inventory');

const router = express.Router();

/**
 * @route   GET api/items
 * @desc    Get All Items
 * @access  Public
 */

router.get('/', (req, res) => {
    Inventory.find()
        .sort({ date: -1 })
        .then(Inventory => res.json(Inventory));
});

router.post('/', (req, res) => {
    const { email, product, expirydate, quantity, description } = req.body;


    const newInventory = new Inventory({

        email,
        product,
        expirydate,
        quantity,
        description,


    })
    newInventory.save().then(Inventory => res.json(Inventory))
});
router.delete('/:id', (req, res) => {
    Inventory.findById(req.params.id)
        .then(Inventory => Inventory.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});
module.exports = router;