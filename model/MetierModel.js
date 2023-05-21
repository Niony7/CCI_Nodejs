const Connection = require('mysql');
var connection = require('./ConnectionDb');


class MetierModel {
    // listage de metier

    static list_metier(callback) {


        connection.query("select * from metier order by codeMet", (err, rows) => {
            if (err) throw err;
            callback(rows);
        });

    }

    static ajout_metier(data, callback) {

        connection.query("insert into metier() values(?,?)", [data.code_metier, data.design_metier], (err, result) => {
            if (err) throw err;
            result = "Le metier a été ajouteé avec succes";
            callback(result);
        });

    }


    static supprimer_metier(code_metier, callback) {

        connection.query("DELETE from metier where codeMet=?", [code_metier], (err, result) => {
            if (err) throw err;
            result = "metier a ete supprimer avec succes";
            callback(result);
        });

    }



    static editer_metier(code_metier, callback) {

        connection.query("select *from metier where codeMet=?", [code_metier], (err, result) => {
            if (err) throw err;
            callback(result);
        });

    }


    static modifier_metier(data, callback) {

        connection.query("update metier set designMet=? where codeMet=?", [data.design_metier, data.code_metier], (err, result) => {
            if (err) throw err;

            result = "METIER modifier avec avec succes";
            callback(result);
        });

    }

    //model
    //Recuperations des numero des visiteur
    static code_metier(callback) {

        connection.query("SELECT codeMet FROM metier ORDER BY codeMet DESC", (err, rows) => {
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





module.exports = MetierModel;