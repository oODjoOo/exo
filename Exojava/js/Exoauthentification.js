// let prénom = "jordan";
// let age = "18";

// let write = prompt("Prénom");
// if (write = prénom) {
//     alert(`c'est bon`);
// } else if (write != prénom) {
//     alert(user = "ça dégage");
// }

    // Demander le prénom et l'âge
    let prenom = prompt("Entrez votre prénom :");
    let age;

    // Conditions d'authentification
    let prenomAttendu = "jordan"; // Remplacez par le prénom attendu
    let ageAttendu = "18"; // Remplacez par l'âge attendu

    // Vérification de l'authentification
    if (prenom === prenomAttendu) {
        
        age = prompt("l'age");
        if (age >= ageAttendu) {
            alert("Bienvenue, " + prenom + "!");
        } else{
            alert("Échec de l'authentification. Veuillez vérifier votre âge.");
        }
    } else {
        alert("Échec de l'authentification. Veuillez vérifier votre prénom.");
        window.location.href="https://www.toysrus.fr/";
    }
