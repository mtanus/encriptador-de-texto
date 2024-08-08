// Declaración de variables
let areaDeTextoEntrada = document.querySelector('.entrada__texto');
let textoNingunMensaje = document.querySelector('.salida__ningun__texto');
let textoDeSalida = document.querySelector('.salida__texto__resultado');
let botonEncriptar = document.querySelector('.entrada__btn__encriptar');
let botonDesencriptar = document.querySelector('.entrada__btn__desencriptar');

// Declaración de funciones
function encriptarTexto(textoAEncriptar) {
    let textoEncriptado = "";

    for (let indice = 0; indice < textoAEncriptar.length; indice++) {
        let letra = textoAEncriptar[indice];

        switch (letra) {
            case "a":
                // La letra "a" es convertida para "ai"
                textoEncriptado += "ai";
                break;
            case "e":
                // La letra "e" es convertida para "enter"
                textoEncriptado += "enter";
                break;
            case "i":
                // La letra "i" es convertida para "imes"
                textoEncriptado += "imes";
                break;
            case "o":
                // La letra "o" es convertida para "ober"
                textoEncriptado += "ober";
                break;
            case "u":
                // La letra "u" es convertida para "ufat"
                textoEncriptado += "ufat";
                break;                                
            default:
                textoEncriptado += letra;
                break;
        }
    }

    return textoEncriptado;
}

function desencriptarTexto(textoADesencriptar) {
    let textoDesencriptado = "";
    
    // La secuencia "ai" es convertida a letra "a"
    textoDesencriptado = textoADesencriptar.replaceAll("ai", "a");
    // La secuencia "enter" es convertida a letra "e"
    textoDesencriptado = textoDesencriptado.replaceAll("enter", "e");
    // La secuencia "imes" es convertida a letra "i"
    textoDesencriptado = textoDesencriptado.replaceAll("imes", "i");
    // La secuencia "ober" es convertida a letra "o"
    textoDesencriptado = textoDesencriptado.replaceAll("ober", "o");
    // La secuencia "ufat" es convertida a letra "u"
    textoDesencriptado = textoDesencriptado.replaceAll("ufat", "u");

    return textoDesencriptado;
}

function obtenerTextoDeEntrada() {
    return areaDeTextoEntrada.value;
}

function mostrarTextoDeSalida(texto) {
    textoNingunMensaje.style.display = "none";
    // textoDeSalida.setAttribute('display', "inline"); // Cambia sólo el atributo en HTML pero NO en CSS
    textoDeSalida.style.display = "inline";
    textoDeSalida.innerHTML = texto;
}

function setearInicioDeApp() {
    // areaDeTextoEntrada.value = "";
    // mostrarTextoDeSalida(
    //     `<span class="salida__texto__resaltado">Ningún mensaje fue encontrado</span>
    //     Ingresa el texto que desees encriptar o desencriptar.`);
}

// Manejo de eventos
botonEncriptar.addEventListener('click', function() {
    let texto = obtenerTextoDeEntrada();
    console.log(obtenerTextoDeEntrada());
    
    if (texto != "") {
        console.log("El texto a encriptar será: " + texto);
        console.log("El texto encriptado resultante es: " + encriptarTexto(texto));

        mostrarTextoDeSalida(encriptarTexto(texto));
    }
});

botonDesencriptar.addEventListener('click', function() {
    let texto = obtenerTextoDeEntrada();
    console.log(obtenerTextoDeEntrada());

    if (texto != "") {
        console.log("El texto a desencriptar será: " + texto);
        console.log("El texto desencriptado resultante es: " + desencriptarTexto(texto));

        mostrarTextoDeSalida(desencriptarTexto(texto));
    }
});


setearInicioDeApp();