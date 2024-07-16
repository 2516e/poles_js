let films = [];

films[0] = "star wars";
films[10] = "Terminator 2";
console.log(films[10]);

films.push("Jurassic Park");
films.push("Indiana Jones");
films.push("Robocop");
console.log("films");

films = [];
films.push([5, "Hook ou la revanche du capitaine crochet", "Steven Spielberg"]);
films.push([2, "total recall", "paul verhoven"]);
films.push([8, "L'arme fatale", "Richard Donner"]);
films.push([3, "58 minutes pour vivre", "Renny Harlin"]);
films.push([9, "Retour vers le futur part 2", "Robert Zemechis"]);
films.push([8, "Le cinquieme element", "Luc Besson"]);
films.push([1, "Last Action Hero", "John Mc tiernan"]);
films.push([8, "Aliens", "James Cameron"]);

films[0][1] = "waterworld";



console.log(films.length);

/*
[   [8, "L'arme fatale", "Richard Donner"],
    [9, "Retour vers le futur part 2", "Robert Zemechis"],
    films.push([8, "Le cinquieme element", "Luc Besson"],
]


*/
console.log("mon film d'action favori est " + films[3][1]); 


for (let indice = 0; indice < films.length; indice++){
    console.log(films[indice][1]);
};

films.forEach(function (element, indice) {
    console.log(indice, element[1]); 

});
films[0][1]="waterworld"; 
console.log(films[0][1]);


films.push([2, "hudson hawk gentleman et cambrioleur", "Michael Lehmann"]);

document.querySelector("#btActualiser").addEventListener("click", function (){

    const tbody = document.querySelector("table").querySelector("tbody");

    for (let i = 0; i < films.length ; i++){
        //je crée un élément HTML <tr> 
        const ligne = document.createElement("tr");

        //je crée un élément HTML <td> 
        const cellule = document.createElement("td");

        //je change le contenu de cet élément 
        cellule.innerHTML = films[i][0]; //ID du film
        ligne.appendChild(cellule);

        const cellule2 = document.createElement("td")
        cellule2.innerHTML = films[i][1]; //titre du film
        ligne.appendChild(cellule2);

        const cellule3 = document.createElement("td")
        cellule3.innerHTML = films[i][2]; //réalisateur du film
        ligne.appendChild(cellule3);

        //j'ajoute la ligne <tr> à <tbody>

        tbody.appendChild(ligne)
        console.log(ligne)
    }
})