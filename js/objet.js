/* Je veux pouvoir créer des objets qui auront les propriétés suivantes : nom, prénom, age.
Chaque objet aura des valeurs différentes pour ces propriétés */

function creer_objet_personne(arg_nom, arg_prenom, arg_age){
    return {
        nom: arg_nom,
        prenom: arg_prenom,
        age: arg_age,
        bonjour(){
            return "Bonjour tout le monde,";
        },
        identite(){
            let str = "je m'appelle " + this.prenom + " " + this.nom;
            return str;
        },
        augmenter_age(annees){
        this.age = this.age + annees;
            return this.age
        }
    };
}

let p1 = creer_objet_personne("Cérien", "Jean", 33);
let p2 = creer_objet_personne("Mahleb", "Enzo", 21);

console.log(p1, p2);

console.log(anneeNaissance(p1), anneeNaissance(p2));

console.log(p1.bonjour(), p1.identite());
console.log(p2.bonjour(), p2.identite());
console.log(p1.augmenter_age(10));
document.write(p1.identite() + " et j'ai " + p1.age + " ans")