// Declaración de variables
let areaDeTextoEntrada = document.querySelector('.entrada__texto');
let textoAvisoNingunMensaje = document.querySelector('.salida__ningun__texto');
let textoDeSalida = document.querySelector('.salida__texto__resultado');
let botonEncriptar = document.querySelector('.entrada__btn__encriptar');
let botonDesencriptar = document.querySelector('.entrada__btn__desencriptar');
let linkImagenSalida = document.querySelector('.salida__link');
let imagenDelChat = document.querySelector('.salida__imagen__chat');
let botonCopiar = document.querySelector('.salida__btn__copiar');
let contenedorImagen = document.querySelector('.salida__contenedor__imagen');

let ningunMensaje = true;
let anchoDeVentana = window.innerWidth;

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
    // textoDeSalida.setAttribute('display', "inline"); // Cambia sólo el atributo en HTML como estilo inline pero NO en CSS
    // textoDeSalida.classList.remove('elemento__oculto');
    // textoDeSalida.classList.add('elemento__inline');
    visibilizarElemento(textoDeSalida);
    textoDeSalida.innerHTML = texto;
}

// function mostrarMensajeNingunTexto() {    
//     ocultarElemento(textoDeSalida);
//     visibilizarElemento(textoAvisoNingunMensaje);

// }

function visibilizarElemento(elemento) {
    if (elemento.classList.contains('elemento__oculto')) {
        elemento.classList.remove('elemento__oculto');        
    }
    elemento.classList.add('elemento__inline');
}

function ocultarElemento(elemento) {
    if (elemento.classList.contains('elemento__inline')) {
        elemento.classList.remove('elemento__inline');        
    }
    elemento.classList.add('elemento__oculto');
}

function visibilizarImagen() {
    if (anchoDeVentana >= 1200 && areaDeTextoEntrada.value === "") {
        visibilizarElemento(contenedorImagen);
        // visibilizarElemento(linkImagenSalida);
        // visibilizarElemento(imagenDelChat);
    } else {
        ocultarElemento(contenedorImagen);
        // ocultarElemento(linkImagenSalida);
        // ocultarElemento(imagenDelChat);
    }
}

function setearInicioDeApp() {
    areaDeTextoEntrada.value = "";

    // Verifico si estoy en pantallas pc desktop para agregar la imagen del chat
    if (anchoDeVentana >= 1200) {
        visibilizarElemento(contenedorImagen);
        // visibilizarElemento(linkImagenSalida);
        // visibilizarElemento(imagenDelChat);
    }
    // if (window.innerWidth >= 1200) {
    //     // linkImagenSalida.style.display = "inline"; // Agrega estilos en línea o inline. Es mejor usar clases CSS
    //     linkImagenSalida.classList.add('elemento__inline');
    //     imagenDelChat.classList.add('elemento__inline');    
    // } else {
    //     linkImagenSalida.classList.add('elemento__oculto');
    //     imagenDelChat.classList.add('elemento__oculto');    
    // }

    // textoAvisoNingunMensaje.innerHTML = `<span class="salida__texto__resaltado">Ningún mensaje fue encontrado</span>Ingresa el texto que desees
    //             encriptar o desencriptar.`;
    // textoAvisoNingunMensaje.style.display = "inline";
    // textoDeSalida.style.display = "none";
}

// Manejo de eventos
botonEncriptar.addEventListener('click', function() {
    let texto = obtenerTextoDeEntrada();
    console.log(obtenerTextoDeEntrada());
    
    if (texto != "") {
        console.log("El texto a encriptar será: " + texto);
        console.log("El texto encriptado resultante es: " + encriptarTexto(texto));

        mostrarTextoDeSalida(encriptarTexto(texto));
        visibilizarElemento(botonCopiar);
    }
});

botonDesencriptar.addEventListener('click', function() {
    let texto = obtenerTextoDeEntrada();
    console.log(obtenerTextoDeEntrada());

    if (texto != "") {
        console.log("El texto a desencriptar será: " + texto);
        console.log("El texto desencriptado resultante es: " + desencriptarTexto(texto));

        mostrarTextoDeSalida(desencriptarTexto(texto));
        visibilizarElemento(botonCopiar);
    }
});

function validarTextoDeEntrada(texto) {
    // Busco si hay caracteres distintos a minúsculas, espacios, punto o coma. Es decir, textos inválidos.
    const expresionRegular = /[^a-z\s.,]+/g;
    // console.log("El texto " + texto + " verifica la búsqueda de caracteres inválidos: " + expresionRegular.test(texto));

    // Invierto su valor de verdad para conocer si el texto es válido
    return !expresionRegular.test(texto);
}

validarTextoDeEntrada("HOLA");
validarTextoDeEntrada("hola como andas");
validarTextoDeEntrada("hola, como andas.");
validarTextoDeEntrada("hola, cómo andas.");
validarTextoDeEntrada("hola, como andas?");

function acondicionarSalida() {
    let textoEscrito = obtenerTextoDeEntrada();
    
    if (textoEscrito === "") {
        visibilizarImagen();
        visibilizarElemento(textoAvisoNingunMensaje);
        ocultarElemento(textoDeSalida);
        ocultarElemento(botonCopiar);
    } else {
        ocultarElemento(contenedorImagen);
        ocultarElemento(textoAvisoNingunMensaje);
        visibilizarElemento(textoDeSalida);
        ocultarElemento(botonCopiar);
    }

}

areaDeTextoEntrada.addEventListener('keyup', function() {
    acondicionarSalida();

    let texto = obtenerTextoDeEntrada();
    if (texto === "") {
        // ningunMensaje = true;
        console.log("Ingresó un texto vacío");
        // ocultarElemento(textoDeSalida);
        // visibilizarElemento(textoAvisoNingunMensaje);
    
        // mostrarMensajeNingunTexto();
        // ocultarElemento(botonCopiar);
    } else {
        // ningunMensaje = false;
        console.log("Ingresé un texto con caracteres para validar");

        let textoValido = validarTextoDeEntrada(texto);
        console.log("El texto " + texto + " es válido: " + textoValido);

        if (textoValido) {
            if (areaDeTextoEntrada.classList.contains('alerta')) {
                areaDeTextoEntrada.classList.remove('alerta');                
            }
            mostrarTextoDeSalida(`<span class="salida__texto__resaltado texto__centrado">Texto listo para ser encriptado o desencriptado.</span>`);
        } else {
            areaDeTextoEntrada.classList.add('alerta');
            mostrarTextoDeSalida(`<span class="salida__texto__resaltado texto__centrado">Verifique el texto a ser encriptado o desencriptado.</span>`);    
        }
    }
});

// Actualizo el ancho de la ventana al redimensionarla y actualizo la presencia de la imagen
window.onresize = verificarPresenciaImagen;
function verificarPresenciaImagen() {
    console.log("Ventana redimensionada, mide " + window.innerWidth + "px de ancho");
    anchoDeVentana = window.innerWidth;
    visibilizarImagen();
}

botonCopiar.addEventListener("click", () => escribirTextoAlPortapapeles(textoDeSalida.innerHTML));

async function escribirTextoAlPortapapeles(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    console.error(error.message);
  }
}

// console.log("Clases de un elemento: " + textoDeSalida.classList);
// console.log("Prueba en las clases de texto de salida: " + textoDeSalida.classList.contains('Prueba'));
// console.log("PRUEBA en las clases de texto de salida: " + textoDeSalida.classList.contains('PRUEBA'));

// textoDeSalida.classList.toggle('PRUEBA'); // Quita o agrega la clase PRUEBA 
// console.log("Clases de un elemento: " + textoDeSalida.classList);

setearInicioDeApp();