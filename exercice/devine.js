let text = "";
let i = aleatoire(1,10);
let tentative = 1
let historique = []
let once = true
setTimeout(function(timer) {
                document.querySelector("#error").innerHTML = "";
            },4000)


            
document.querySelector("form").addEventListener("submit", function (jeu){

    jeu.preventDefault();

    let text = document.querySelector("input").value

    historique.push(text)


    console.log(i)

    if ( text != i) {

        if (isNaN(text)){

            document.querySelector("#error").innerHTML = 
            "⚠️ Ce n'est pas un nombre ⚠️";

            this.timer

            document.querySelector("input").value = ""

        } else if ( text<1 || text>10 ) {

            document.querySelector("#error").innerHTML =
            "⚠️ Veuillez saisir un nombre compris entre 1 et 10 ! ⚠️ "
            
            this.timer
            
            document.querySelector("input").value = ""

        }  else {

            document.querySelector("#affichage").innerHTML = 
            "Raté, essaye encore..." + "<br>" + "Nombre de tentatives : " + tentative++;

            document.querySelector("input").value = ""

        }

    } else {

        if (once === true){

            let resultat = 
            "Bravo tu as trouvé le nombre : <strong>" + text + "</strong>" + "<br>" + "Nombre de tentatives : " + tentative++ + "<br>" + "Toutes les tentatives : ";

            for (let tentatives = 0; tentatives < historique.length ; tentatives++){
                resultat +=  "<br>" + historique[tentatives] ;
            }

            document.querySelector("#affichage").innerHTML = resultat

            let button = document.querySelector(".btn").innerHTML += "<button id='reload'>Rejouez ?</button>";

            document.querySelector("#reload").addEventListener("click",function(){
                location.reload();
            });

            once = false;

        }
    } 
});

