const express = require("express");

const { City } = require("../models/user.model")

const router = express.Router();

router.post("/addcity", async (req, res) => {
    try {
        let city = await City.create(req.body);
        res.status(201).send(city);
    }
    catch (err) {
        console.log(err)
    }
});

router.get("/addcity", async (req, res) => {
    try {
        let city = await City.find().lean().exec();
        res.status(200).send(city);
    }
    catch (err) {
        console.log(err)
    }
});

module.exports = router;