const Connection = require('mysql');
const { connect } = require('./ConnectionDb');
var connection = require('./ConnectionDb');


class FormationModel {
    // listage des formation

    static list_formation(callback) {
        var sql = "SELECT formation.resultForm,metier.designMet,apprenti.nomApp,formation.idForm,apprenti.prenomApp,stage.noteStage," +
            "formation.dateFormt ,sum( matiere.NoteMat*matiere.CoefMat) / sum(matiere.CoefMat) as moyen from formation," +
            " matiere,metier,stage,apprenti where metier.codeMet=formation.codeMet and apprenti.matApp=formation.matApp and" +
            " stage.idStage=formation.idStage and matiere.matApp=(SELECT DISTINCT apprenti.matApp)  GROUP BY apprenti.matApp";
        //var sql3 = "select stage.noteStage FROM apprenti,stage,formation,metier,matiere where stage.idStage=formation.idStage and apprenti.matApp=formation.matApp and metier.codeMet=formation.codeMet and matiere.codeMat=formation.codeMat";

        connection.query(sql, (err, rows) => {
            if (err) throw err;

            callback(rows);
        });


    }

    static ajout_formation(data, callback) {

        connection.query("insert into formation() values(NULL,?,?,?,?,?)", [data.mat_app, data.id_stage, data.code_metier, data.date_form, ""], (err, result) => {
            if (err) throw err;
            result = "La formation a été ajouteé avec succes";
            callback(result);
        });

    }


    static supprimer_formation(code_formation, callback) {

        connection.query("DELETE from formation where idForm=?", [code_formation], (err, result) => {
            if (err) throw err;
            result = "formation éte supprimer avec succes";
            callback(result);
        });

    }



    static editer_formation(id_form, callback) {

        connection.query("select *from formation where idForm=?", [id_form], (err, result) => {
            if (err) throw err;
            callback(result);
        });

    }


    static modifier_formation(data, callback) {

        connection.query("update formation set dateFormt=? where idForm=?", [data.date_form, data.id_form], (err, result) => {
            if (err) throw err;

            result = "la formation a ètè  modifièe avec avec succes";
            callback(result);
        });

    }
    //mise a jour des resulatats automatiquement
    static update_result(result, id_form, callback) {

        connection.query("update formation set resultForm=? where idForm=?", [result, id_form], (err, result) => {
            if (err) throw err;
            callback(result);
        });

    }
    //model
    //Recuperations des numero des visiteur
    static code_matiere(callback) {

        connection.query("SELECT codeMat FROM matiere ORDER BY codeMat DESC", (err, rows) => {
            if (err) throw err;

            callback(rows);

        });
    }

    //osc 
    static date(date1, date2) {
        connection.query("select visiteur.NomVisiteur,DateVisite,TarifJourn,NbJrn,(TarifJourn*NbJrn) as montant from visite,site,visteur where visiter.idsite=site.idsite and visiter.idvisiteur=visiteur.idvisiteur and DateVisite betwen date1=? AND date2=?", (err, rows) => {
            if (err) throw err;
            callback(date1, date2)
        })
    }
    static nombre_formation(callback) {
        connection.query("SELECT metier.designMet ,count(formation.idForm) as nbrForm FROM formation,apprenti,metier,stage where apprenti.matApp=formation.matApp and metier.codeMet=formation.codeMet" +
            " and stage.idStage=formation.idStage group by metier.designMet", (err, rows) => {
                if (err) throw err;
                callback(rows);
            });
    }
}





module.exports = FormationModel;