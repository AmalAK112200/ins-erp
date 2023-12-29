const express = require("express");
const connect = require('./mongodb/config');
const cors = require('cors')
const dotenv = require('dotenv');
const app = express();
const bodyparser = require('body-parser');
const studentrouter = require('./Router/StudRouter')
app.use(cors());


app.use(bodyparser.json())
app.use('/STD', studentrouter)
dotenv.config();
const PORT = process.env.PORT
connect();
app.listen(PORT, () => {
    console.log(`port listening to tha port ${PORT}`);
})