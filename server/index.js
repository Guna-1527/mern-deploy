const mongoose = require("mongoose");
const express = require("express");
require("dotenv").config();
const cors = require("cors")
const app = express()

app.use(express.json())
app.use(cors())

try {
    let db = mongoose.connect(process.env.MONGODB)
    app.listen(process.env.PORT || 8000, () => {
        console.log(`${process.env.PORT}`);
    })
} catch (error) {
    console.log(error);
}

app.get("/", (req, res) => {
    res.send("this is backend");
})