const express = require('express');


// Item Model
const Stock = require('../../models/Stock');

const router = express.Router();

/**
 * @route   GET api/items
 * @desc    Get All Items
 * @access  Public
 */

router.get('/', (req, res) => {
    Stock.find()
        .sort({ date: -1 })
        .then(Stock => res.json(Stock));
});
router.post('/', (req, res) => {
    const { email, product, quantity, description, priceperunit } = req.body;


    const newStock = new Stock({

        email,
        product,

        quantity,
        description,
        priceperunit,

    })
    newStock.save().then(Stock => res.json(Stock))
});
router.delete('/:id', (req, res) => {
    Stock.findById(req.params.id)
        .then(Stock => Stock.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});
router.put("/edit/:id", (req, res) => {
    const { email, product, quantity, description, priceperunit } = req.body;
    const id = req.params.id;
    const newData = req.body;

    Stock.findByIdAndUpdate({ _id: id }, { product: newData.product })
        .then((Stock) => res.status(200).json({ success: true }))
        .catch((err) => res.status(400).json({ success: false }));
});

module.exports = router;