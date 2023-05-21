const Connection = require('mysql');
var connection = require('./ConnectionDb');


class MatiereModel {
    // listage des matiere

    static list_matiere(callback) {

        connection.query("select codeMat,nomApp,nomMat,coefMat,noteMat,designMet from matiere,metier,apprenti " +
            "where matiere.codeMet=metier.codeMet and apprenti.matApp=matiere.matApp order by codeMat", (err, rows) => {
                if (err) throw err;
                callback(rows);
            });

    }
    static rech_matiere(data, callback) {

        connection.query("select codeMat,nomMat,nomApp,coefMat,noteMat,designMet from apprenti,matiere,metier" +
            " where matiere.matApp=? and matiere.codeMet=metier.codeMet" +
            " and apprenti.matApp=matiere.matApp order by codeMat", [data.mat_app], (err, rows) => {
                if (err) throw err;
                callback(rows);
            });

    }
    static ajout_matiere(data, callback) {

        connection.query("insert into matiere() values(?,?,?,?,?,?)", [data.code_matiere, data.code_metier, data.matricule_app, data.nom_matiere, data.note_matiere, data.coef_matiere], (err, result) => {
            if (err) throw err;
            result = "La matiere a été ajouteé avec succes";
            callback(result);
        });

    }


    static supprimer_matiere(code_matiere, callback) {

        connection.query("DELETE from matiere where codeMat=?", [code_matiere], (err, result) => {
            if (err) throw err;
            result = "matière éte supprimer avec succes";
            callback(result);
        });

    }



    static editer_matiere(code_matiere, callback) {

        connection.query("select *from matiere where codeMat=?", [code_matiere], (err, result) => {
            if (err) throw err;
            callback(result);
        });

    }


    static modifier_matiere(data, callback) {

        connection.query("update matiere set NomMat=?,NoteMat=?,CoefMat=? where codeMat=?", [data.nom_matiere, data.note_matiere, data.coef_matiere, data.code_matiere], (err, result) => {
            if (err) throw err;

            result = "matiere modifier avec avec succes";
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
}





module.exports = MatiereModel;