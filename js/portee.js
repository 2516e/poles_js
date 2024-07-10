function tva(prix){
    let resultat = prix * 0.2
    return resultat
}

let prix = 5;
console.log("prix", prix);
console.log("tva(prix)", tva(prix));
let resultat = prix - tva(prix);
console.log("resultat", resultat);