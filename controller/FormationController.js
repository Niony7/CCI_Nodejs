
const express = require('express');
const router = express.Router();
const FormationModel = require("../model/FormationModel");
const bodyParser = require('body-parser');
const moment = require("moment");

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// 
router.get("/liste_formation", (requet, response) => {

    FormationModel.list_formation(function (rows) {
        // render= il envoye le donner dans le views

        moy = 0;
        var data = rows;
        var result = "";
        console.log(data);
        for (var i = 0; i < data.length; i++) {
            data[i].dateFormt = moment(data[i].dateFormt).format("DD-MM-YYYY");
            moy = (data[i].moyen + data[i].noteStage) / 2;
            if (moy >= 10) {
                result = "REUSSI";
                FormationModel.update_result(result, data[i].idForm, function (ligns) {

                });
            } else {
                result = "ECHOUE";
                FormationModel.update_result(result, data[i].idForm, function (lign) {

                });
            }
            data[i].noteForm = moy;
        }
        console.log(data);
        response.render("./pages/template/list_formation_view.ejs", { rows: data });
    });

});

// /ajout formation
router.post("/ajout_formation", (requet, response) => {

    FormationModel.ajout_formation(requet.body, function (result) {
        // render= il envoye le donner dans le views
        response.send(result);
    });

});



router.get("/suprimer_formation/:id", (requet, response) => {
    var id_form = requet.params.id;
    console.log(id_form);
    FormationModel.supprimer_formation(id_form, function (result) {
        // render= il envoye le donner dans le views
        response.send(result);
    });

});


// editer formation
router.get("/editer_formation/:id", (requet, response) => {
    var id_form = requet.params.id;
    //  console.log(num_visiteur);

    FormationModel.editer_formation(id_form, function (result) {
        // render= il envoye le donner dans le views
        var data = result;
        for (var i = 0; i < data.length; i++) {
            data[i].dateFormt = moment(data[i].dateFormt).format("DD/MM/YYYY");
        }
        response.json(data);
    });

});


// /modifier visiteur
router.post("/modifier_formation", (requet, response) => {

    FormationModel.modifier_formation(requet.body, function (result) {
        // render= il envoye le donner dans le views
        response.send(result);
    });

});


//controller
router.get("/num_apprenti", (request, response) => {
    ApprentiModel.mat_apprenti(function (result) {
        response.json(result);
    });
});
router.get("/graph", (request, response) => {
    FormationModel.nombre_formation(function (result) {
        console.log(result);
        // response.render("./pages/template/accueil_views.ejs", { rows: result });
        response.json(result);

    });
})




module.exports = router;