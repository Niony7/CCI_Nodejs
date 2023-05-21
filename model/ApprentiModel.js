const Connection = require('mysql');
var connection = require('./ConnectionDb');


class ApprentiModel {
    // listage des visiteurs

    static list_apprenti(callback) {

        connection.query("select * from apprenti order by matApp", (err, rows) => {
            if (err) throw err;
            callback(rows);
        });

    }

    static ajout_apprenti(data, callback) {

        connection.query("insert into apprenti() values(?,?,?,?,?,?,?,?)", [data.matricule_appreti, data.nom_apprenti, data.prenom_apprenti, data.date_naiss, data.bacc_serie, data.anne_bacc, data.num_phone, data.e_mail], (err, result) => {
            if (err) throw err;
            result = "L'apprenti a été ajouteé avec succes";
            callback(result);
        });

    }


    static supprimer_apprenti(matricule_appreti, callback) {

        connection.query("DELETE from apprenti where matApp=?", [matricule_appreti], (err, result) => {
            if (err) throw err;
            result = "apprenti a ete supprimer avec succes";
            callback(result);
        });

    }



    static editer_apprenti(matricule_appreti, callback) {

        connection.query("select *from apprenti where matApp=?", [matricule_appreti], (err, result) => {
            if (err) throw err;
            callback(result);
        });

    }


    static modifier_apprenti(data, date, callback) {

        connection.query("update apprenti set nomApp=?,prenomApp=?,dateNaiss=?,baccSerie=?,anneBacc=?,numPhon=?,Email=? where matApp=?", [data.nom_apprenti, data.prenom_apprenti, date, data.bacc_serie, data.anne_bacc, data.num_phone, data.e_mail, data.matricule_appreti], (err, result) => {
            if (err) throw err;

            result = "apprenti modifier avec avec succes";
            callback(result);
        });

    }

    //model
    //Recuperations des numero des visiteur
    static num_apprenti(callback) {

        connection.query("SELECT matApp FROM apprenti ORDER BY matApp DESC", (err, rows) => {
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





module.exports = ApprentiModel;