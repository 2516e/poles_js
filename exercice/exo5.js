function superieur(a , b) {
        return a > b
}

let $nb1
let $nb2
document.querySelector("#resultat").innerHTML += superieur(46,17) + "<br>"
document.querySelector("#resultat").innerHTML += superieur(17,46) + "<br>"
document.querySelector("#resultat").innerHTML += superieur(17,17) + "<br>"




document.querySelector("#resultat").innerHTML += "<hr>"



function resultat (a , b){
    let sup = $nb1 + " est supérieur à " + $nb2 + "<br>"
    let inf = $nb1 + " est inférieur à " + $nb2 + "<br>"
    if ($nb1>$nb2){
        document.querySelector("#resultat").innerHTML += sup
    } else {
        document.querySelector("#resultat").innerHTML += inf
    }
}

$nb1 = 15; $nb2 = 7;
superieur($nb1,$nb2)
resultat($nb1,$nb2)

$nb1 = 52; $nb2 = 324;
superieur($nb1,$nb2)
resultat($nb1,$nb2)

$nb1 = 9; $nb2 = 10;
superieur($nb1,$nb2)
resultat($nb1,$nb2)

$nb1 = 4; $nb2 = -52;
superieur($nb1,$nb2)
resultat($nb1,$nb2)

document.querySelector("#resultat").innerHTML += "<hr>"



function plusGrand (a , b){
    if (a > b) {
        document.querySelector("#resultat").innerHTML += a + "<br>"
    } else {
        document.querySelector("#resultat").innerHTML += b + "<br>"
    }
}



$nb1 = 15; $nb2 = 7;
plusGrand($nb1 , $nb2)

$nb1 = 52; $nb2 = 324;
plusGrand($nb1 , $nb2)

$nb1 = 4; $nb2 = -52;
plusGrand($nb1 , $nb2)

$nb1 = 9; $nb2 = 10;
plusGrand($nb1 , $nb2)



document.querySelector("#resultat").innerHTML += "<hr>"



function derniereValeur($tableau){
    for ( let i = $tableau.length - 1 ; i < $tableau.length ; i++){
        document.querySelector("#resultat").innerHTML += $tableau[i] + "<br>"
    }
}

$nombres = [ 15, 7, 52, 324, 4, -52, 9, 10 ];
derniereValeur($nombres);

$tableau = [ 4, "32", 65.2, "fin"];
derniereValeur($tableau);

$jours = ["lundi", "mardi", "mercredi", "jeudi", "samedi", "dimanche"]
derniereValeur($jours);



document.querySelector("#resultat").innerHTML += "<hr>"



function plusPetit($tableau){
    let $plusPetiteValeur = $tableau[0];
    for ( let i = 0 ; i < $tableau.length ; i++){
        if ( $plusPetiteValeur > $tableau[i] ){
            $plusPetiteValeur = $tableau[i]
        }
    }
    document.querySelector("#resultat").innerHTML += "La plus petite valeur du tableau [ " + $tableau + " ] est " + $plusPetiteValeur + ".<br>"
}

$nombres = [ 15, 7, 52, 324, 4, -52, 9, 10 ];
plusPetit($nombres)

$notes = [ 12, 17, 4, 15, 20, 5 ];
plusPetit($notes)