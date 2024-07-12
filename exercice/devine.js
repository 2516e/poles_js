let text = "";
document.querySelector("form").addEventListener("submit", function (jeu){
    jeu.preventDefault();
    let text = document.querySelector("input").value
        if (isNaN(text)){
            alert("Ce n'est pas un nombre");
        } else {
            let i = aleatoire(1,10);
            if (i == text){
                alert("Bravo tu as trouvé le nombre : " + text);
            } else{
                alert("Raté, essaye encore...")
            }
        }
    })
