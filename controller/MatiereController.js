
const express = require('express');
const router = express.Router();
const MatiereModel = require("../model/MatiereModel");
const bodyParser = require('body-parser');
const moment = require("moment");

// PDF generate
// const pdf = require('pdf-creator-node');
// const path = require('path');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// 
router.get("/liste_matiere", (requet, response) => {

    MatiereModel.list_matiere(function (rows) {
        // render= il envoye le donner dans le views
        //console.log(rows);

        response.render("./pages/template/list_matiere_view.ejs", { rows: rows });
    });

});
router.get("/testa", (requet, response) => {

    MatiereModel.list_matiere(function (rows) {
        // render= il envoye le donner dans le views
        //console.log(rows);

        response.render("./pages/template/testa.ejs", { rows: rows });
    });

});
router.post("/rech_matiere", (requet, response) => {

    MatiereModel.rech_matiere(requet.body, function (rows) {
        // render= il envoye le donner dans le views
        var notMultCoef = 0;
        var someCoef = 0;
        var moy = 0;
        for (var i = 0; i < rows.length; i++) {
            notMultCoef = notMultCoef + (rows[i].noteMat * rows[i].coefMat);
            someCoef = someCoef + rows[i].coefMat;
        }
        moy = notMultCoef / someCoef;
        rows.push(moy);
        console.log(requet.body);

        response.render("./pages/template/rech_apprenti_matiere_view.ejs", { rows: rows });
    });

});

// /ajout matiere
router.post("/ajout_matiere", (requet, response) => {
    // console.log(requet.body);

    MatiereModel.ajout_matiere(requet.body, function (result) {
        // render= il envoye le donner dans le views
        response.send(result);
    });

});



router.get("/suprimer_matiere/:id", (requet, response) => {
    var code_matiere = requet.params.id;
    MatiereModel.supprimer_matiere(code_matiere, function (result) {
        // render= il envoye le donner dans le views
        response.send(result);
    });

});


// editer matiere
router.get("/editer_matiere/:id", (requet, response) => {
    var code_matiere = requet.params.id;
    console.log(code_matiere);

    MatiereModel.editer_matiere(code_matiere, function (result) {
        // render= il envoye le donner dans le views
        response.json(result);
    });

});


// /modifier matiere
router.post("/modifier_matiere", (requet, response) => {

    MatiereModel.modifier_matiere(requet.body, function (result) {
        // render= il envoye le donner dans le views
        response.send(result);
    });

});


//controller
router.get("/code_matiere", (request, response) => {
    MatiereModel.code_matiere(function (result) {
        response.json(result);
    });
});




module.exports = router;