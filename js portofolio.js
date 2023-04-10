document.getElementById("message").addEventListener("submit", function(e) {
    e.preventDefault();
    var erreur;
    var mail = document.getElementById("mail");
    if (!mail.value) {
        erreur = "Veuillez renseigner un mail";
    }

        if (erreur) {
            e.preventDefault();
            document.getElementById("erreur").innerHTML = erreur;
            return false;
        }

else {
        
    alert('Formulaire envoyé !'); 
}



});