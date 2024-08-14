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
// let ningunMensaje = true;
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
    visibilizarElemento(textoDeSalida);
    textoDeSalida.innerHTML = texto;
}

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
    } else {
        ocultarElemento(contenedorImagen);
    }
}

function setearInicioDeApp() {
    areaDeTextoEntrada.value = "";

    // Verifico si estoy en pantallas pc desktop para agregar la imagen del chat
    if (anchoDeVentana >= 1200) {
        visibilizarElemento(contenedorImagen);
    }
    // contenedorImagen.style.display = "inline"; // Agrega estilos en línea o inline. Es mejor usar clases CSS
}

// Manejo de eventos
botonEncriptar.addEventListener('click', function() {
    let texto = obtenerTextoDeEntrada();
    console.log(obtenerTextoDeEntrada());
    
    if (texto !== "" && validarTextoDeEntrada(texto)) {
        console.log("El texto a encriptar será: " + texto);
        console.log("El texto encriptado resultante es: " + encriptarTexto(texto));

        mostrarTextoDeSalida(encriptarTexto(texto));
        visibilizarElemento(botonCopiar);
    }
});

botonDesencriptar.addEventListener('click', function() {
    let texto = obtenerTextoDeEntrada();
    console.log(obtenerTextoDeEntrada());

    if (texto !== "" && validarTextoDeEntrada(texto)) {
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
        if (areaDeTextoEntrada.classList.contains('alerta')) {
            areaDeTextoEntrada.classList.remove('alerta');
        }
        
        console.log("Ingresó un texto vacío");
        } else {
            
            console.log("Ingresé un texto con caracteres para validar");

            let textoValido = validarTextoDeEntrada(texto);
            console.log("El texto " + texto + " es válido: " + textoValido);

            if (textoValido) {
                if (areaDeTextoEntrada.classList.contains('alerta')) {
                    areaDeTextoEntrada.classList.remove('alerta');
                }
                mostrarTextoDeSalida(`<span class="salida__texto__resaltado">Texto listo para ser encriptado o desencriptado.</span>`);
            } else {
                areaDeTextoEntrada.classList.add('alerta');
                mostrarTextoDeSalida(`<span class="salida__texto__resaltado">Verifique los caracteres del texto.</span>`);
            }
        }
});

// Actualizo el ancho de la ventana al redimensionarla y actualizo la presencia de la imagen
// Asigno un evento al redimensionar la ventana
window.onresize = verificarPresenciaImagen;
function verificarPresenciaImagen() {
    console.log("Ventana redimensionada, mide " + window.innerWidth + "px de ancho");
    anchoDeVentana = window.innerWidth;
    visibilizarImagen();
}

// Asigno un evento al clickear el botón copiar mediante una función flecha
botonCopiar.addEventListener("click", () => escribirTextoAlPortapapeles(textoDeSalida.innerHTML));
async function escribirTextoAlPortapapeles(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    console.error(error.message);
  }
}

setearInicioDeApp();