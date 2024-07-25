let user = prompt("Qu'elle âge avez vous?").toLowerCase();

if (user >= 18) {
    alert("ça passe");
} else if (user < 18) {
    alert(user = "ça dégage");
    window.location.href="https://www.toysrus.fr/";
}

