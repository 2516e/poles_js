// Fonction retourne un nombre aléatoire compris entre un 'min' et 'max
function aleatoire(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

// Fonction retourne une couleur aléatoire
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}