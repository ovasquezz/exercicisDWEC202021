//1 Numero signe   Escriu un codi que indiqui si un nombre introduït per l’usuari és positiu, negatiu o igual a 0
function signe() {
    let input1 = document.getElementById("input1").value;

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

//2 Es número   Escriu un codi que verifiqui si el que introdueix l’usuari en una casella és un nombre
function nombre() {
    let input1 = parseInt(document.getElementById("input1").value, 10);

    if (!isNaN(input1)) {
        document.getElementById("results").innerHTML = "Es un número"
    } else {
        document.getElementById("results").innerHTML = "No es un número"
    }
}

//3 Número part entera   Escriu un codi que donat un número real, mostri només la part sencera (esborri els decimals).
function entero() {
    let input1 = document.getElementById("input1").value;

    document.getElementById("results").innerHTML = Math.trunc(input1);
}

//4 Numero part decimals   Escriu un codi que donat un numero real, mostri només els decimals.
function decimales() {
    let input1 = Math.abs(document.getElementById("input1").value);

    let decimal = (input1 - Math.floor(input1)).toFixed(4);

    document.getElementById("results").innerHTML = decimal;

}

//5 xx_amb 3 decimals   Escriu un codi que divideixi per 19 el número introduït i mostri el resultat exactament amb 3 decimals
function division() {
    let input1 = document.getElementById("input1").value;

    let division = (input1 / 19).toFixed(4);

    document.getElementById("results").innerHTML = division;
}

//6 String buit   Escriu un codi que digui si un string és buit o no
function string() {
    let input1 = document.getElementById("input1").value;

    if (input1 === "") {
        document.getElementById("results").innerHTML = "String vacio"
    } else {
        document.getElementById("results").innerHTML = "String no esta vacio"
    }
}

//7 Invertir string   Escriu un codi que inverteixi un string.
function rev() {
    let input1 = document.getElementById("input1").value;

    document.getElementById("results").innerHTML = input1.split("").reverse().join("");
}

//8 Quantes a   Escriu un codi que compti el número d’ocurrències de la lletra “a” que hi ha en un string
function anum() {
    let input1 = document.getElementById("input1").value;
    let contador = 0;

    for (let i = 0; i < input1.length; i++) {
        if (input1[i].toLowerCase() === "a") {
            contador++;
        }
    }

    document.getElementById("results").innerHTML = contador;
}

//9 Abans a   Escriu un codi que extregui els caràcters que hi ha abans de la primera ocurrència de la lletra “a”.  
function finsa() {
    let input1 = document.getElementById("input1").value;
    let primeraA = input1.toLowerCase().indexOf("a");
    document.getElementById("results").innerHTML = input1.slice(0, primeraA);

}

//10 Primera i darrera a   Escriu un codi que retorni en quina posició se troba la primera i l'última ocurrència de la lletra “a” en un string
function primeraUltimaA() {
    let input1 = document.getElementById("input1").value;
    let primeraA = input1.toLowerCase().indexOf("a");
    let ultimaA = input1.toLowerCase().lastIndexOf("a");

    document.getElementById("results").innerHTML = "Primera a: " + primeraA + "<br />" + "Última a: " + ultimaA;

}

//11 Esborra substring   Escriu un codi que extregui totes les ocurrències de “la” a dins d’un String.
function delLa() {
    let input1 = document.getElementById("input1").value;

    document.getElementById("results").innerHTML = input1.replace(/la/g, "");

}

//12 substitueix substring   Escriu un codi que substitueixi totes les ocurrències de “la” a dins d’un String per un asterisc 
function subsLa() {
    let input1 = document.getElementById("input1").value;

    document.getElementById("results").innerHTML = input1.replace(/la/g, "*");

}

//13 Cap i cua   Escriu un codi que donat un String, creï un nou string a partir del primer en el qual se li hagi afegit al 
//principi i al final la primera lletra d’aquell string
function capicua() {
    let input1 = document.getElementById("input1").value;
    let cap = input1.charAt(0);

    document.getElementById("results").innerHTML = cap + input1 + cap;

}

//14 No espais   Escriu un codi que elimini tots els espais d’un String
function noEspacios() {
    let input1 = document.getElementById("input1").value;

    document.getElementById("results").innerHTML = input1.replace(/ /g, "");

}

//15frase amb guions   Escriu un codi que converteixi un String format per paraules separades per un o varis espais en un
// String en què les paraules estiguin separades per un guió. 
function guiones() {
    let input1 = document.getElementById("input1").value;

    document.getElementById("results").innerHTML = input1.replace(/\s+/g, "-");
    // \s+ se refiere a todos los espacios en blanco
}

//16 Acronim     Escriu un codi que agafi totes les paraules d’un String i construeixi un acrònim en majúscules.
function acronimo() {
    let input1 = document.getElementById("input1").value;
    let acronimo = "";

    acronimo += input1.charAt(0);
    for (let i = 0; i < input1.length; i++) {
        if (input1[i] == " ") {
            acronimo += input1[i + 1];
        }
    }

    document.getElementById("results").innerHTML = acronimo.toUpperCase();
}

//17 Email     Escriu un codi que validi en un correu electrònic només les següents coses: 
function email() {
    let input1 = document.getElementById("input1").value;
    let contadorArroba = 0;
    let posicionArroba = input1.indexOf("@");
    let posicionPunto = input1.indexOf(".");

    for (let i = 0; i < input1.length; i++) {
        if (input1[i] == "@") {
            contadorArroba++
            if (contadorArroba == 1) {
                if (posicionArroba < posicionPunto) {
                    if (input1.search(/.org|.net|.com/) != -1) {
                        if (input1.endsWith(".org")||input1.endsWith(".net")||input1.endsWith(".com") == true) {
                            document.getElementById("results").innerHTML = "Es una dirreccion de correo valida"
                        } else {
                            document.getElementById("results").innerHTML = "No es una direccion de correo valida"
                        }
                    } else {
                        document.getElementById("results").innerHTML = "Extension no valida"
                    }
                } else {
                    document.getElementById("results").innerHTML = "La extension no esta en el lugar correcto/Falta extension"
                }
            } else {
                document.getElementById("results").innerHTML = "El email introducido tiene mas de un @"
            }
        }

    }

}