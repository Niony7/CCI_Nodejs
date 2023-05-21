const Connection = require('mysql');
var connection = require('./ConnectionDb');


class StageModel {
    // listage des stage

    static list_stage(callback) {


        connection.query("select stage.idStage,apprenti.nomApp,metier.designMet,stage.nomEntreprise,stage.noteStage from metier ,stage,apprenti" +
            " where stage.matApp=apprenti.matApp and stage.codeMet=metier.codeMet order by idStage", (err, rows) => {
                if (err) throw err;
                callback(rows);
            });

    }

    static ajout_stage(data, callback) {

        connection.query("insert into stage() values(NULL,?,?,?,?)", [data.mat_app, data.code_met, data.nom_entr, data.note_stage], (err, result) => {
            if (err) throw err;
            result = "Le Stage a été ajouteé avec succes";
            callback(result);
        });

    }


    static supprimer_stage(id_stage, callback) {

        connection.query("DELETE from stage where idStage=?", [id_stage], (err, result) => {
            if (err) throw err;
            result = "stage a ete supprimer avec succes";
            callback(result);
        });

    }



    static editer_stage(id_stage, callback) {

        connection.query("select *from stage where idStage=?", [id_stage], (err, result) => {
            if (err) throw err;
            callback(result);
        });

    }


    static modifier_Stage(data, callback) {

        connection.query("update stage set matApp=?,nomEntreprise=?,noteStage=?,codeMet=? where idStage=?", [data.mat_app, data.nom_entrr, data.note_stagee, data.code_met, data.id_stage], (err, result) => {
            if (err) throw err;

            result = "stage modifier avec avec succes";
            callback(result);
        });

    }

    //model
    //Recuperations des numero des stage
    static id_stage(callback) {

        connection.query("SELECT idStage FROM stage ORDER BY idStage DESC", (err, rows) => {
            if (err) throw err;

            callback(rows);

        });
    }

    //osc 
    static date(date1, date2) {
        connection.query("select stage.NomVisiteur,DateVisite,TarifJourn,NbJrn,(TarifJourn*NbJrn) as montant from visite,site,visteur where visiter.idsite=site.idsite and visiter.idvisiteur=visiteur.idvisiteur and DateVisite betwen date1=? AND date2=?", (err, rows) => {
            if (err) throw err;
            callback(date1, date2)
        })
    }
}





module.exports = StageModel;