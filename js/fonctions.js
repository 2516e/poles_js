function bonjour() {
    document.write("Bonjour le monde ! <br>");
  }
  document.write("<h1> Les fonctions </h1>");
  // appel de la fonction bonjour
  bonjour();
  bonjour();
  
  document.write("<hr>");
// déclaration d'une fonction avec des arguments
function salut(prenom) {
  document.write("<p>Salut " + prenom + ",  bienvenue</p>");
}
// appel de la fonction salut
salut("Greg");
salut("Ilhem");
let prenom = "Sirine";
salut(prenom);
document.write("<hr>");

// déclaration d'une fonction avec plusieurs arguments
function phrase(mot1, mot2, mot3) {
  document.write(mot1 + " " + mot2 + " " + mot3 + " ");
}

let fin = "d'aller manger";
let debut = "Il est";
let milieu = "l'heure";
//EXO : utiliser la fonction phase et les variables fin, debut, milieu, pour afficher "Il est l'heure d'aller manger"

phrase(debut, milieu, fin);

/* EXO : appeler la fonction phrase pour afficher "on a faim" */
phrase("on a faim", "", "");

function phrase2(mot1, mot2, mot3) {
  let str = mot1;
  if (mot2 != undefined) {
    str = str + " " + mot2;
  }
    if (mot3 != undefined) {
    //   str = str + " "+
    str = str + " " + mot3;
  }
  document.write(str + "<br>");
}
document.write("<hr>");

//
function nbAuCarre(nb) {
    if(isNaN(nb)){
    document.write("'" + nb + "'" + " n'est pas un nombre. ")
    } else {
        return nb * nb;
    }
}

let resultat = nbAuCarre(5);
document.write("Le carré de 5 est = " + resultat + "<br>")

document.write("<p>Le théorème de pythagore :</p>");
document.write("Un triangle rectangle dont les côtés ont pour longueur 2 et 5." + "<br>");
document.write("Le carré de l'hypothénuse de ce triangle rectangle vaut : " + (nbAuCarre(2)+nbAuCarre(5)) + "°" + "<br>");

document.write("<hr>");

/*Exo : affichez la liste des carrés des nombres de 1 à 100 
            pour la présentation on ira seulement jusqu'à 10 */
for(i=1; i<=10; i++){
    document.write(i + "² = " + nbAuCarre(i) + "<br>")
}
document.write("<hr>");

/* Exo : écrire une fonction nomée tva qui prend un prix en argument et qui retourne la tva calculée sur ce prix :
            prix * 20 /100
            prix * 0.2 */
function tva(prix){
    return prix * 0.2
}
let tvaCalcule = tva(100)
document.write(tvaCalcule)