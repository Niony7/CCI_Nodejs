$(document).ready(function () {
    graph();

});

function liste_apprenti() {
    $.ajax({
        url: "/apprenti/liste_apprenti",
        dataType: "html",
        success: function (data) {
            console.log(data);
            $("#main-content").html(data);
        }

    });
}
//Ajout ds apprentis

function ajout_apprenti() {
    var matricule_appreti = $("#matricule-apprenti").val();
    var nom_apprenti = $("#nom-apprenti").val();
    var prenom_apprenti = $("#prenom-apprenti").val();
    var date_naiss = $("#date-naiss").val();
    var bacc_serie = $("#bacc-serie").val();
    var anne_bacc = $("#anne-bacc").val();
    var num_phone = $("#num-phone").val();
    var e_mail = $("#e-mail").val();

    if (matricule_appreti == "" || nom_apprenti == "" || prenom_apprenti == "" || date_naiss == "" || bacc_serie == "" || anne_bacc == "" || num_phone == "", e_mail == "") {
        console.log(matricule_appreti);
        alert("veuillez saisir tous les champs");

    } else {
        $.ajax({
            url: "/apprenti/ajout_apprenti",
            method: "POST",
            data: { matricule_appreti: matricule_appreti, nom_apprenti: nom_apprenti, prenom_apprenti: prenom_apprenti, date_naiss: date_naiss, bacc_serie: bacc_serie, anne_bacc: anne_bacc, num_phone: num_phone, e_mail: e_mail },
            success: function (data) {
                alert(data);
                liste_apprenti();
                $("#matricule-apprenti").val("");
                $("#nom-apprenti").val("");
                $("#prenom-apprenti").val("");
                $("#date-naiss").val("");
                $("#bacc-serie").val("");
                $("#anne-bacc").val("");
                $("#num-phone").val("");
                $("#e-mail").val("");

            }

        });
    }
}
// supprimer apprentis

function suppr_apprenti(num) {
    var matricule_appreti = num;
    var yes = confirm("voulez vous vraiment suprimer les apprentis?");
    if (yes) {
        $.ajax({
            url: "/apprenti/suprimer_apprenti/" + matricule_appreti,
            success: function (data) {
                alert(data);
                liste_apprenti();
            }

        });
    }


}

// EDITER  Apprentis


function editer_apprenti(num) {
    var matricule_appreti = num;

    $.ajax({
        url: "/apprenti/editer_apprenti/" + matricule_appreti,
        dataType: "json",
        success: function (data) {
            // console.log('Nom de l\'App : ' + data['nomApp']);
            $("#editer-mat-apprenti").val(data[0].matApp);
            $("#editer-nom-apprenti").val(data[0].nomApp);
            $("#editer-prenom-apprenti").val(data[0].prenomApp);

            $("#editer-date-naiss").val(data[0].dateNaiss);
            $("#editer-bacc-serie").val(data[0].baccSerie);
            $("#editer-anne-bacc").val(data[0].anneBacc);

            $("#editer-num-phon").val(data[0].numPhon);
            $("#editer-e-mail").val(data[0].Email);

        }

    });

}


function modifier_apprenti() {
    let matricule_appreti = $("#editer-mat-apprenti").val();
    let nom_apprenti = $("#editer-nom-apprenti").val();
    let prenom_apprenti = $("#editer-prenom-apprenti").val();
    var date_naiss = $("#editer-date-naiss").val();
    var bacc_serie = $("#editer-bacc-serie").val();
    var anne_bacc = $("#editer-anne-bacc").val();
    var num_phone = $("#editer-num-phon").val();
    var e_mail = $("#editer-e-mail").val();

    if (matricule_appreti == "" || nom_apprenti == "" || prenom_apprenti == "" || date_naiss == "" || bacc_serie == "" || anne_bacc == "" || num_phone == "" || e_mail == "") {
        alert("veuillez saisir tous les champs");

    } else {
        $.ajax({
            url: "/apprenti/modifier_apprenti",
            method: "POST",
            data: { matricule_appreti: matricule_appreti, nom_apprenti: nom_apprenti, prenom_apprenti: prenom_apprenti, date_naiss: date_naiss, bacc_serie: bacc_serie, anne_bacc: anne_bacc, num_phone: num_phone, e_mail: e_mail },
            success: function (data) {
                alert(data);
                liste_apprenti();
                $("#editer-mat-apprenti").val("");
                $("#editer-nom-apprenti").val("");
                $("#editer-prenom-apprenti").val("");
                $("#editer-date-naiss").val("");
                $("#editer-bacc-serie").val("");
                $("#editer-anne-bacc").val("");
                $("#editer-num-phon").val("");
                $("#editer-e-mail").val("");

            }

        });
    }
}

// *************MATIERE******************

function liste_matiere() {
    console.log("clique");
    $.ajax({
        url: "/matiere/liste_matiere",
        dataType: "html",
        success: function (data) {
            //console.log(data);
            $("#main-content").html(data);
        }

    });
}
function rech_matiere() {
    var mat_app = $("#matApp-mat").val();
    $.ajax({
        url: "/matiere/rech_matiere",
        data: { mat_app: mat_app },
        method: 'post',
        dataType: "html",
        success: function (data) {
            console.log(data);
            $("#tbody-matiere").html(data);
        }

    });
}
//Ajout de matiere

function ajout_matiere() {
    var code_matiere = $("#code-matiere").val();
    var matricule_app = $("#matricule-app-matier").val();
    var code_metier = $("#code-metier-mat").val();
    var nom_matiere = $("#nom-matiere").val();
    var note_matiere = $("#note-matiere").val();
    var coef_matiere = $("#coef-matiere").val();
    if (code_matiere == "" || matricule_app == "" || code_metier == "" || nom_matiere == "" || note_matiere == "" || coef_matiere == "") {
        alert("veuillez saisir tous les champs");

    } else {
        $.ajax({
            url: "/matiere/ajout_matiere",
            method: "POST",
            data: { code_matiere: code_matiere, matricule_app: matricule_app, code_metier: code_metier, nom_matiere: nom_matiere, note_matiere: note_matiere, coef_matiere: coef_matiere },
            success: function (data) {
                alert(data);
                liste_matiere();
                $("#code-matiere").val("");
                $("#matricule-app-matier").val("");
                $(".form-control.code-metier").val("");
                $("#nom-matiere").val("");
                $("#note-matiere").val("");
                $("#coef-matiere").val("");

            },
            error: function (err) {
                console.log(err);
            }

        });
    }
}
// supprimer matier

function suppr_matiere(num) {
    var code_matiere = num;
    var yes = confirm("voulez vous vraiment suprimer cette champ?");
    if (yes) {
        $.ajax({
            url: "/matiere/suprimer_matiere/" + code_matiere,
            success: function (data) {
                alert(data);
                liste_matiere();
            }

        });
    }


}

// EDITER 


function editer_matiere(num) {
    var code_matiere = num;
    console.log(num);
    num_metier();
    $.ajax({
        url: "/matiere/editer_matiere/" + code_matiere,
        dataType: "json",
        success: function (data) {
            $("#editer-code-matiere").val(data[0].codeMat);
            $("#editer-code-metier").val(data[0].codeMet);
            $("#editer-nom-matiere").val(data[0].NomMat);
            $("#editer-note-matiere").val(data[0].NoteMat);
            $("#editer-coef-matiere").val(data[0].CoefMat);
        }

    });
    console.log("editer-code-metier");
}


function modifier_matiere() {
    var code_matiere = $("#editer-code-matiere").val();
    var code_metier = $("#code-metier-mat").val();
    var nom_matiere = $("#editer-nom-matiere").val();
    var note_matiere = $("#editer-note-matiere").val();
    var coef_matiere = $("#editer-coef-matiere").val();
    if (code_matiere == "" || code_metier == "" || nom_matiere == "" || note_matiere == "" || coef_matiere == "") {
        alert("veuillez saisir tous les champs");

    } else {
        $.ajax({
            url: "/matiere/modifier_matiere",
            method: "POST",
            data: { code_matiere: code_matiere, code_metier: code_metier, nom_matiere: nom_matiere, note_matiere: note_matiere, coef_matiere: coef_matiere },
            success: function (data) {
                alert(data);
                liste_matiere();
                $("#editer-code-matiere").val("");
                $("#code-metier-mat").val("");
                $("#editer-nom-matiere").val("");
                $("#editer-note-matiere").val("");
                $("#editer-coef-matiere").val("");

            }

        });
    }
}


//  **********************STAGE***************************


function liste_stage() {
    $.ajax({
        url: "/stage/liste_stage",
        dataType: "html",
        success: function (data) {
            console.log(data);
            $("#main-content").html(data);
            // liste_stage();
        }

    });
}
//Ajout de stage

function ajout_stage() {
    var nom_entr = $("#nom-entr").val();
    var mat_app = $("#mat-app-stage").val();
    var note_stage = $("#note-stage").val();
    var code_met = $("#code-metier").val();

    if (nom_entr == "" || code_met == "" || mat_app == "" || note_stage == "") {
        alert("veuillez saisir tous les champs");

    } else {
        $.ajax({
            url: "/stage/ajout_stage",
            method: "POST",
            data: { nom_entr: nom_entr, code_met: code_met, note_stage: note_stage, mat_app: mat_app },
            success: function (data) {
                alert(data);
                liste_stage();
                $("#nom-entr").val("");
                $("#design-metier").val("");
                $("#note-stage").val("");
                $("#mat-app-stage").val("");

            }

        });
    }
}

// supprimer stage

function suppr_stage(num) {
    var id_stage = num;
    var yes = confirm("voulez vous vraiment suprimer cette champ?");
    if (yes) {
        $.ajax({
            url: "/stage/suprimer_stage/" + id_stage,
            success: function (data) {
                alert(data);
                liste_stage();
            }

        });
    }


}

// EDITER stage


function editer_stage(num) {
    var id_stage = num;

    $.ajax({
        url: "/stage/editer_stage/" + id_stage,
        dataType: "json",
        success: function (data) {
            $("#edt-id-stage").val(data[0].idStage);
            $("#edt-nom-entr").val(data[0].nomEntreprise);
            $("#edt-mat-app-stage").val(data[0].matApp);
            $("#edt-note-stage").val(data[0].noteStage);
            $("#edt-code-metier").val(data[0].codeMet);
        }

    });

}


function modifier_stage() {
    var id_stage = $("#edt-id-stage").val();
    var nom_entrr = $("#edt-nom-entr").val();
    var mat_app = $("#edt-mat-app-stage").val();
    var code_met = $("#edt-code-metier").val();
    var note_stagee = $("#edt-note-stage").val();
    if (nom_entrr == "" || mat_app == "" || code_met == "" || note_stagee == "") {
        alert("veuillez saisir tous les champs");

    } else {
        $.ajax({
            url: "/stage/modifier_stage",
            method: "POST",
            data: { nom_entrr: nom_entrr, mat_app: mat_app, code_met: code_met, note_stagee: note_stagee, id_stage: id_stage },
            success: function (data) {
                alert(data);
                liste_stage();
                $("#edt-id-stage").val("");
                $("#edt-nom-entr").val("");
                $("#edt-mat-app-stage").val("");
                $("#edt-code-metier").val("");
                $("#editer-note-stage").val("");

            }

        });
    }
}


// *************************METIER*************************
function liste_metier() {
    $.ajax({
        url: "/metier/liste_metier",
        dataType: "html",
        success: function (data) {
            console.log(data);
            $("#main-content").html(data);
            list_metier();
        }

    });
}


// /Ajout de metier

function ajout_metier() {
    var code_metier = $(".form-control.code-metier").val();
    var design_metier = $(".form-control.design-metier").val();
    console.log();
    if (code_metier == "" || design_metier == "") {
        alert("veuillez saisir tous les champs");

    } else {
        $.ajax({
            url: "/metier/ajout_metier",
            method: "POST",
            data: { code_metier: code_metier, design_metier: design_metier },
            success: function (data) {
                alert(data);
                liste_metier();
                $(".form-control.code-metier").val("");
                $("#design-metier").val("");

            },
            error: function (err) {
                console.log(err);
            }

        });
    }
}


// supprimer metier

function suppr_metier(num) {
    var code_metier = num;
    var yes = confirm("voulez vous vraiment suprimer cette champ?");
    if (yes) {
        $.ajax({
            url: "/metier/suprimer_metier/" + code_metier,
            success: function (data) {
                alert(data);
                liste_metier();
            }

        });
    }


}

// EDITER metier


function editer_metier(num) {
    var code_metier = num;

    $.ajax({
        url: "/metier/editer_metier/" + code_metier,
        dataType: "json",
        success: function (data) {
            $(".form-control.edit-code-met").val(data[0].codeMet);
            $("#editer-design-metier").val(data[0].designMet);

        }

    });

}


function modifier_metier() {
    var code_metier = $("#editer-code_metier").val();
    var design_metier = $("#editer-design-metier").val();

    if (code_metier == "" || design_metier == "") {
        alert("veuillez saisir tous les champs");

    } else {
        $.ajax({
            url: "/metier/modifier_metier",
            method: "POST",
            data: { code_metier: code_metier, design_metier: design_metier },
            success: function (data) {
                alert(data);
                liste_metier();
                $("#editer-code-metier").val("");
                $("#editer-design-metier").val("");

            }

        });
    }
}

/// pour afficher les liste des code metier dans un section code matier
function num_metier() {

    $.ajax({
        url: "/metier/code_metier",
        method: "GET",
        success: function (response) {
            console.log(response);

            for (var i = 0; i < response.length; i++) {
                $("#code-metier-mat").val("");
                $("#code-metier-mat").append('<option value="' + response[i].codeMet + '">' + response[i].codeMet + '</option>');
                $("#code-metier-mat-edt").val("");
                $("#code-metier-mat-edt").append('<option value="' + response[i].codeMet + '">' + response[i].codeMet + '</option>')
            }
        }

    });
}



// *************************FORMATION*************************
function liste_formation() {
    $.ajax({
        url: "/formation/liste_formation",
        dataType: "html",
        success: function (data) {
            console.log(data);
            $("#main-content").html(data);
        }

    });
}





//  **********************FORMATION***************************


function liste_formation() {
    $.ajax({
        url: "/formation/liste_formation",
        dataType: "html",
        success: function (data) {
            console.log(data);
            $("#main-content").html(data);
        }

    });
}
//Ajout de formation

function ajout_formation() {
    var mat_app = $("#new-mat-appr").val();
    var id_stage = $("#new-id-stage").val();
    var code_metier = $("#new-code-met").val();
    var date_form = $("#new-date-form").val();
    if (mat_app == "" || id_stage == "" || code_metier == "" || date_form == "") {
        alert("veuillez saisir tous les champs");

    } else {
        $.ajax({
            url: "/formation/ajout_formation",
            method: "POST",
            data: { mat_app: mat_app, id_stage: id_stage, code_metier: code_metier, date_form: date_form },
            success: function (data) {
                alert(data);
                liste_formation();
                $("#new-mat-appr").val("");
                $("#new-id-stage").val("");
                $("#new-code-met").val("");
                $("#new-code-matier").val("");
                $("#new-date-form").val("");

            }

        });
    }
}


// supprimer formation

function suppr_formation(num) {
    var yes = confirm("voulez vous vraiment suprimer cette champ? ");
    if (yes) {
        $.ajax({
            url: "/formation/suprimer_formation/" + num,
            success: function (data) {
                alert(data);
                liste_formation();
            }

        });
    }


}

// EDITER formation


function editer_formation(num) {
    var code_formation = num;

    $.ajax({
        url: "/formation/editer_formation/" + code_formation,
        dataType: "json",
        success: function (data) {
            $("#editer-id-form").val(data[0].idForm);

            $("#editer-date-form").val(data[0].dateFormt);
        }

    });

}


function modifier_formation() {
    var id_form = $("#editer-id-form").val();
    var date_form = $("#editer-date-form").val();

    if (id_form == "" || date_form == "") {
        alert("veuillez saisir tous les champs");

    } else {
        $.ajax({
            url: "/formation/modifier_formation",
            method: "POST",
            data: { id_form: id_form, date_form: date_form },
            success: function (data) {
                alert(data);
                liste_formation();
                $("#editer-id-form").val("");
                $("#editer-date-form").val("");

            }

        });
    }
}

/// pour afficher les liste des code metier dans un section code FORMATION
function num_metier() {

    $.ajax({
        url: "/metier/code_metier",
        method: "GET",
        success: function (response) {
            console.log(response);

            for (var i = 0; i < response.length; i++) {
                $("#code-metier-mat").val("");
                $("#code-metier-mat").append('<option value="' + response[i].codeMet + '">' + response[i].codeMet + '</option>');
                $("#code-metier-mat-edt").val("");
                $("#code-metier-mat-edt").append('<option value="' + response[i].codeMet + '">' + response[i].codeMet + '</option>')
            }
        }

    });
}



//************ACCEAUILLL**********/
function accueil() {
    $.ajax({
        type: 'GET',
        url: "/",
        dataType: "html",
        success: function (data) {
            console.log(data);
            $("#container").html(data);
        }

    });
}
//graph
function graph() {
    $.ajax({
        type: 'GET',
        url: "/formation/graph",
        dataType: "JSON",
        success: function (data) {
            console.log(data);
            $("#compta-titr").html(data[0].designMet);
            $("#compta-value").html(data[0].nbrForm);

            $("#secret-titr").html(data[1].designMet);
            $("#secret-value").html(data[1].nbrForm);

            $("#hotel-titr").html(data[2].designMet);
            $("#hotel-value").html(data[2].nbrForm);

        }

    });
}
