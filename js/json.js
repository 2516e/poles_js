//JSON => JavaScript Object Notation

const films = [
    {
        "id": 1,
        "titre": "Star Wars",
        "realisateur": "George Lucas",
    },
    {
        "id": 2,
        "titre": "Terminator 2",
        "realisateur": "James Cameron",
    },
    {
        "id": 5,
        "titre": "Robocop",
        "realisateur": "Paul Verhoeven",
    }
];

function actualiserFilms() {
    const tbody = document.querySelector("table > tbody");
    let html = "";
    films.forEach( function (film) {
        html += "<tr>";
        html += "<td>" + film.id + "</td>"
        html += "<td>" + film.titre + "</td>"
        html += "<td>" + film.realisateur + "</td>"
        html += "</tr>";
    });
    tbody.innerHTML = html;
}

document.querySelector("#btActualiser").addEventListener("click", actualiserFilms);