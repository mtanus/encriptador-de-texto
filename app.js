// Declaración de variables
let areaDeTextoEntrada = document.querySelector('.entrada__texto');
let textoDeSalida = document.querySelector('.salida__texto');
let botonEncriptar = document.querySelector('.entrada__btn__encriptar');

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

// Manejo de eventos
botonEncriptar.addEventListener('click', function() {
    let texto = areaDeTextoEntrada.value;
    console.log(areaDeTextoEntrada.value);
    
    if (texto != "") {
        console.log("El texto a encriptar será: " + texto);
        console.log("El texto encriptado resultante es: " + encriptarTexto(texto));

        textoDeSalida.innerHTML = encriptarTexto(texto);
    }
});
