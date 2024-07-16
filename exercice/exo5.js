function superieur(a,b) {
    if (a>b){
        return true
    } else  {
        return false
    }
}

console.log(superieur(46,17))
console.log(superieur(17,46))
console.log(superieur(17,17))

$nb1 = 15; $nb2 = 7;
superieur($nb1,$nb2)
function resultat (){
    let sup = $nb1 + " est supérieur à" + $nb2 + "<br>"
    let inf = $nb1 + " est inférieur à" + $nb2 + "<br>"
    if ($nb1>$nb2){
        document.querySelector("body").innerHTML = sup
    } else {
        document.querySelector("body").innerHTML = inf
    }
}
$nb1 = 52; $nb2 = 324;
$nb1 = 9; $nb2 = 10;
$nb1 = 4; $nb2 = -52;
