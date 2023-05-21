
const express = require('express');
const router = express.Router();
const MetierModel = require("../model/MetierModel");
const bodyParser = require('body-parser');
const moment = require("moment");

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// 
router.get("/liste_metier", (requet, response) => {

    MetierModel.list_metier(function (rows) {
        // render= il envoye le donner dans le views
        //console.log(rows);

        response.render("./pages/template/list_metier_view.ejs", { rows: rows });
    });

});

// /ajout metier
router.post("/ajout_metier", (requet, response) => {

    MetierModel.ajout_metier(requet.body, function (result) {
        // render= il envoye le donner dans le views
        response.send(result);
    });

});



router.get("/suprimer_metier/:id", (requet, response) => {
    var code_metier = requet.params.id;
    MetierModel.supprimer_metier(code_metier, function (result) {
        // render= il envoye le donner dans le views
        response.send(result);
    });

});


// editer metier
router.get("/editer_metier/:id", (requet, response) => {
    var code_metier = requet.params.id;
    //  console.log(num_visiteur);

    MetierModel.editer_metier(code_metier, function (result) {
        // render= il envoye le donner dans le views
        response.json(result);
    });

});


// /modifier metier
router.post("/modifier_metier", (requet, response) => {
    MetierModel.modifier_metier(requet.body, function (result) {
        // render= il envoye le donner dans le views
        response.send(result);
    });

});


//controller
router.get("/code_metier", (request, response) => {
    MetierModel.code_metier(function (result) {
        response.json(result);
    });
});




module.exports = router;