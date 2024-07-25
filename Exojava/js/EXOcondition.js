// let jourEntree = prompt("Quel jour sommes-nous ?")
// let jourSuivant = "";

// if (jourEntree = "lundi") {
//     jourSuivant = "mardi";
// }
// if (jourEntree = "mardi") {
//     jourSuivant = "mercredi";
// }
// if (jourEntree = "mercredi") {
//     jourSuivant = "jeudi";
// }
// if (jourEntree = "jeudi") {
//     jourSuivant = "vendredi";
// }
// if (jourEntree = "vendredi") {
//     jourSuivant = "samedi";
// }
// if (jourEntree = "samedi") {
//     jourSuivant = "dimanche";
// }
// if (jourEntree = "dimanche") {
//     jourSuivant = "lundi";
// } else {
//     jourSuivant = ("Veuillez entrer un jour valide.");
// }
 
// document.write(`<p>Demain nous serons ${jourSuivant}`);


    let jourEntree = prompt("Quel jour sommes-nous ?").toLowerCase();
    let jourSuivant = "";

    if (jourEntree === "lundi") {
        jourSuivant = "Mardi";
    } else if (jourEntree === "mardi") {
        jourSuivant = "Mercredi";
    } else if (jourEntree === "mercredi") {
        jourSuivant = "Jeudi";
    } else if (jourEntree === "jeudi") {
        jourSuivant = "Vendredi";
    } else if (jourEntree === "vendredi") {
        jourSuivant = "Samedi";
    } else if (jourEntree === "samedi") {
        jourSuivant = "Dimanche";
    } else if (jourEntree === "dimanche") {
        jourSuivant = "Lundi";
    } else {
        jourSuivant = "Veuillez entrer un jour valide.";
    }

    alert("Le jour suivant est : " + jourSuivant);
