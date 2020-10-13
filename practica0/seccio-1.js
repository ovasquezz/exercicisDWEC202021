//Numero signe   Escriu un codi que indiqui si un nombre introduït per l’usuari és positiu, negatiu o igual a 0
function signe() {
    input1 = document.getElementById("input1").value;

    if (input1 > 0) {
        document.getElementById("results").innerHTML = "Positivo"
    } else {
        if (input1 < 0) {
            document.getElementById("results").innerHTML = "Negativo"
        } else {
            document.getElementById("results").innerHTML = "Es cero"
        }
    }
}

//Es número   Escriu un codi que verifiqui si el que introdueix l’usuari en una casella és un nombre
function nombre() {
    input1 = parseInt(document.getElementById("input1").value, 10);

    if (!isNaN(input1)) {
        document.getElementById("results").innerHTML = "Es un número"
    } else {
        document.getElementById("results").innerHTML = "No es un número"
    }
}

//Número part entera   Escriu un codi que donat un número real, mostri només la part sencera (esborri els decimals).
function entero(){
    input1 = document.getElementById("input1").value;

    document.getElementById("results").innerHTML = Math.trunc(input1);
}
