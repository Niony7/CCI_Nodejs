
const express = require('express');
const router = express.Router();
const ApprentiModel = require("../model/ApprentiModel");
const bodyParser = require('body-parser');
var moment = require("moment");

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// 
router.get("/liste_apprenti", (requet, response) => {

    ApprentiModel.list_apprenti(function (rows) {
        // render= il envoye le donner dans le views
        //console.log(rows);
        var data = rows;
        for (var i = 0; i < data.length; i++) {
            data[i].dateNaiss = moment(data[i].dateNaiss).format("DD-MM-YYYY");
        }
        /*
        var data = rows;
        for (var i = 0; i < data.length; i++) {
            data[i].anneBacc = moment(data[i].anneBacc).format("YYYY");
        } */
        response.render("./pages/template/list_apprenti_view.ejs", { rows: rows });
    });

});

// /ajout apprenti
router.post("/ajout_apprenti", (requet, response) => {
    // console.log(requet.body);
    var data = requet.body;
    for (var i = 0; i < data.length; i++) {
        data[i].dateNaiss = moment(data[i].dateNaiss).format("DD-MM-YYYY");
    }
    ApprentiModel.ajout_apprenti(data, function (result) {
        // render= il envoye le donner dans le views
        response.send(result);
    });


});



router.get("/suprimer_apprenti/:id", (requet, response) => {
    var matricule_apprenti = requet.params.id;
    ApprentiModel.supprimer_apprenti(matricule_apprenti, function (result) {
        // render= il envoye le donner dans le views
        response.send(result);
    });

});


// editer apprenti
router.get("/editer_apprenti/:id", (requet, response) => {
    var matricule_apprenti = requet.params.id;
    //  console.log(num_visiteur);

    ApprentiModel.editer_apprenti(matricule_apprenti, function (result) {
        //render= il envoye le donner dans le views
        var data = result;
        for (var i = 0; i < data.length; i++) {
            result[i].dateNaiss = moment(data[i].dateNaiss).format("DD/MM/YYYY");
        }
        /*
        var data_1 = result;
        for (var i = 0; i < data.length; i++) {
            result[i].anneBacc = moment(data_1[i].anneBacc).format("YYYY");
        } */
        //console.log(result);
        response.json(result);
    });

});


// /modifier visiteur
router.post("/modifier_apprenti", (requet, response) => {

    var dateNaiss = requet.body.date_naiss;
    //dateNaiss = moment(dateNaiss).format("YYYY/MM/DD");
    var date = requet.body.date_naiss;
    date = moment(date).format("YYYY/MM/DD");
    console.log(date);

    ApprentiModel.modifier_apprenti(requet.body, date, function (result) {
        // render= il envoye le donner dans le views
        response.send(result);
    });

});


//controller
router.get("/num_apprenti", (request, response) => {
    ApprentiModel.matricule_apprenti(function (result) {
        response.json(result);
    });
});


router.get("/testa", (request, response) => {
    response.render("./pages/template/testa.ejs")
});

module.exports = router;