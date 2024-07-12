window.addEventListener("load", function() {
    // document.getElementById("resultat").innerHTML = "formulaire de connexion";

    // let test = document.getElementsByTagName("input");
    // for (let i=0 ; i<test.length; i++) {
    //     test[i].style.backgroundColor = "blue"
    // }

    //Méthode forEach
    document.querySelector("#resultat").innerHTML = "formulaire de connexion";

    let test2 = document.querySelectorAll("input");
    test2.forEach(function (tests2) {
        tests2.style.backgroundColor = "blue"
    })


    document.querySelector("form").addEventListener("submit", function(eventSubmit) {
        /* La méthode preventDefault() qui existe pour tous les objets de type évènements, d'annuler le comportement par défaut d'un évènement.
        Par exemple, le comportement par défaut de l'évènement "submit" d'une balise <form> est d'envoyer le formulaire vers l'URL défini dans 'action'. Donc si aucun URL ,'est défini dans action, la page est rechargée.

        Autre exemple : le comportement par défaut de l'évènement "click" sur une balise <a> est de rediriger vers la page définie dans 'href'. */
        eventSubmit.preventDefault();
        let texte = "";
        document.querySelectorAll("input").forEach(function (inputElement) {
            texte += inputElement.name + " = " + inputElement.value + "<br>";
        });
        console.log(texte);
        document.querySelector("#resultat").innerHTML = texte;
    });
})