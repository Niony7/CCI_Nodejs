
const express = require('express');
const router = express.Router();
const StageModel = require("../model/StageModel");
const bodyParser = require('body-parser');
// const moment = require("moment");

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// 
router.get("/liste_stage", (requet, response) => {

    StageModel.list_stage(function (rows) {
        // render= il envoye le donner dans le views
        //console.log(rows);

        response.render("./pages/template/list_stage_view.ejs", { rows: rows });
    });

});

// /ajout apprenti
router.post("/ajout_stage", (requet, response) => {

    StageModel.ajout_stage(requet.body, function (result) {
        // render= il envoye le donner dans le views
        response.send(result);
    });

});



router.get("/suprimer_stage/:id", (requet, response) => {
    var id_stage = requet.params.id;
    StageModel.supprimer_stage(id_stage, function (result) {
        // render= il envoye le donner dans le views
        response.send(result);
    });

});


// editer stage
router.get("/editer_stage/:id", (requet, response) => {
    var id_stage = requet.params.id;
    //  console.log(num_visiteur);

    StageModel.editer_stage(id_stage, function (result) {
        // render= il envoye le donner dans le views
        response.json(result);
    });

});


// /modifier stage
router.post("/modifier_stage", (requet, response) => {
    console.log(requet.body);
    StageModel.modifier_Stage(requet.body, function (result) {
        // render= il envoye le donner dans le views
        response.send(result);
    });

});


//controller
router.get("/id_stage", (requet, response) => {
    StageModel.id_stage(function (result) {
        response.json(result);
    });
});




module.exports = router;