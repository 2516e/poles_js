/*
    Les opérateurs arithmétiques sont :
        "+" addition
        "-" soustraction
        "*" multiplication
        "/" division
        "%" modulo

    Ces opérateurs s'utilisent avec des expressions de type number 
*/

// let a = 5;
// let b = 10;


// let addition = a + "+" + b + "=" + (a+b)
// document.write(addition + "<br>")

// let soustraction = a + "-" + b + "=" + (a-b)
// document.write(soustraction + "<br>")

// let multiplication = a + "*" + b + "=" + (a*b)
// document.write(multiplication + "<br>");

// let division = a + "/" + b + "=" + (a/b)
// document.write(division + "<br>");

// let modulo = a + "%" + b + "=" + (a%b)
// document.write( modulo + "<br>");


/* Exercice :
1. Déclarez les variables nb1 et nb2 avec les valeurs suivantes:
12 et 4

2. Affichez le résultat de toutes les opérations sous la forme : 
    • ... + ... = ...
    • ... - ... = ...
    • ... x ... = ...
    • ... / ... = ...
*/

let a = 12;
let b = 4;


let addition = a + " + " + b + " = " + (a+b)
let soustraction = a + " - " + b + " = " + (a-b)
let multiplication = a + " * " + b + " = " + a*b
let division = a + " / " + b + " = " + a/b
let modulo = a + " % " + b + " = " + a%b

document.write("<li>" + addition + "<li>" + soustraction + "<li>" + multiplication + "<li>" + division + "<li>" + modulo)

