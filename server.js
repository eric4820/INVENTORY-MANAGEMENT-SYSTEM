const express = require('express');
const mongoose = require('mongoose');
const config = require('config');

const app = express();
//body parsermiddlewere
app.use(express.json());
const db = config.get('mongoURL');
mongoose
    .connect(db, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true
    })
    .then(() => console.log('mongoDB CONNECTED -----'))
    .catch(err => console.log(err));
app.use('/api/suppliers', require('./routes/api/suppliers'));
app.use('/api/Inventory', require('./routes/api/Inventory'));

app.use('/api/Stock', require('./routes/api/Stock'));
app.use('/api/employees', require('./routes/api/employees'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/pauth', require('./routes/api/pauth'));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`SERVER STARTED ON PORT ${port}`));