
const express = require('express');
const router = express.Router();
const MetierModel = require("../model/HomeModel");
const bodyParser = require('body-parser');
const moment = require("moment");

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get("/", (requet, response) => {
    response.render("./pages/template/hom_view.ejs");
});