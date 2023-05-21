const express = require('express');

var app = express();

const path = require('path')

const PORT = 8888;
app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/views/pages/login.html");

});

app.get("/profile", (req, res) => {
    res.sendFile(__dirname + "/views/pages/profile.html");

});

const apprenti = require('./controller/ApprentiController');
const model_apprenti = require("./model/ApprentiModel");

app.use('/apprenti/', apprenti);

const matiere = require('./controller/MatiereController');
const model_matiere = require('./model/MatiereModel');

app.use('/matiere/', matiere);


const stage = require('./controller/StageController');
const Stage_Model = require("./model/StageModel");

app.use('/stage/', stage);

const metier = require('./controller/MetierController');
const MetierModel = require("./model/MetierModel");
const MatiereModel = require("./model/MatiereModel");

app.use('/metier/', metier);
app.get("/testa", (req, res) => {
    MatiereModel.list_matiere(function (rows) {
        res.render("./pages/template/testa.ejs", { rows: rows });
    });
})

const formation = require('./controller/FormationController');
const FormationModel = require("./model/FormationModel");

app.use('/formation/', formation);




// pour configurer les dossier du fichier css et js
app.use(express.static('public'));

// cofiguerer le moteur template
app.set('view engine', 'ejs');


app.get('/', function (rq, resp) {

    //aficher la page ou la page template   
    resp.render('./pages/index');

});


//ecouter l port 8888
app.listen(PORT, function () {
    console.log("server demarée sur le port " + PORT);
});