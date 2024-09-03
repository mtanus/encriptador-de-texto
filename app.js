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
let textoCopiado = document.querySelector('.salida__texto__copiado');

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
    
    if (texto !== "" && validarTextoDeEntrada(texto)) {
        mostrarTextoDeSalida(encriptarTexto(texto));
        visibilizarElemento(botonCopiar);
    }
});

botonDesencriptar.addEventListener('click', function() {
    let texto = obtenerTextoDeEntrada();

    if (texto !== "" && validarTextoDeEntrada(texto)) {
        mostrarTextoDeSalida(desencriptarTexto(texto));
        visibilizarElemento(botonCopiar);
    }
});

function validarTextoDeEntrada(texto) {
    // Busco si hay caracteres distintos a minúsculas, espacios, punto o coma. Es decir, textos inválidos.
    const expresionRegular = /[^a-zñ\s.,]+/g;

    // Invierto su valor de verdad para conocer si el texto es válido
    return !expresionRegular.test(texto);
}

function acondicionarSalidaSegunEntrada(textoEntrada) {
    // let textoEscrito = obtenerTextoDeEntrada();
    
    if (textoEntrada === "") {
        visibilizarImagen();
        visibilizarElemento(textoAvisoNingunMensaje);
        ocultarElemento(textoDeSalida);
        ocultarElemento(botonCopiar);
    } else {
        ocultarElemento(contenedorImagen);
        ocultarElemento(textoAvisoNingunMensaje);
        visibilizarElemento(textoDeSalida);
        ocultarElemento(botonCopiar);

        let textoValido = validarTextoDeEntrada(textoEntrada);
        if (textoValido) {
            mostrarTextoDeSalida(`<span class="salida__texto__resaltado">Texto listo para ser encriptado o desencriptado.</span>`);
        } else {
            mostrarTextoDeSalida(`<span class="salida__texto__resaltado">Verifique los caracteres del texto.</span>`);
        }

    }

}

function agregarContornoAlerta(elemento){
    if (!elemento.classList.contains('contorno--alerta')) {
        elemento.classList.add('contorno--alerta');
    }
}

function removerContornoAlerta(elemento){
    if (elemento.classList.contains('contorno--alerta')) {
        elemento.classList.remove('contorno--alerta');
    }
}

function agregarContornoValido(elemento){
    if (!elemento.classList.contains('contorno--valido')) {
        elemento.classList.add('contorno--valido');
    }
}

function removerContornoValido(elemento){
    if (elemento.classList.contains('contorno--valido')) {
        elemento.classList.remove('contorno--valido');
    }
}

function quitarContornoAElemento(elemento){
    if (!elemento.classList.contains('sin__contorno')) {
        elemento.classList.add('sin__contorno');
    }
}

function controlarContornoAlerta(textoEntrada) {
    if (textoEntrada === "") {
        removerContornoAlerta(areaDeTextoEntrada);
        agregarContornoValido(areaDeTextoEntrada);
    } else {
        let textoValido = validarTextoDeEntrada(textoEntrada);

        if (textoValido) {
            removerContornoAlerta(areaDeTextoEntrada);
            agregarContornoValido(areaDeTextoEntrada);
        } else {
            removerContornoValido(areaDeTextoEntrada);
            agregarContornoAlerta(areaDeTextoEntrada);
        }
    }
}

areaDeTextoEntrada.addEventListener('keyup', function() {
    let texto = obtenerTextoDeEntrada();
    
    acondicionarSalidaSegunEntrada(texto);
    controlarContornoAlerta(texto);

    // if (texto === "") {
    //     removerContornoAlerta(areaDeTextoEntrada);
    //     agregarContornoValido(areaDeTextoEntrada);
    // } else {
    //     let textoValido = validarTextoDeEntrada(texto);

    //     if (textoValido) {
    //         removerContornoAlerta(areaDeTextoEntrada);
    //         agregarContornoValido(areaDeTextoEntrada);
    //         // mostrarTextoDeSalida(`<span class="salida__texto__resaltado">Texto listo para ser encriptado o desencriptado.</span>`);
    //     } else {
    //         removerContornoValido(areaDeTextoEntrada);
    //         agregarContornoAlerta(areaDeTextoEntrada);
    //         // mostrarTextoDeSalida(`<span class="salida__texto__resaltado">Verifique los caracteres del texto.</span>`);
    //     }
    // }
});

// Agrego eventos al enfocar o desenfocar la entrada de texto
areaDeTextoEntrada.addEventListener('focus', function() {
    let texto = obtenerTextoDeEntrada();

    controlarContornoAlerta(texto);
});

areaDeTextoEntrada.addEventListener('blur', function() {
    let texto = obtenerTextoDeEntrada();

    if (texto === "") {
        removerContornoAlerta(areaDeTextoEntrada);
        removerContornoValido(areaDeTextoEntrada);
    } else {
        acondicionarSalidaSegunEntrada(texto);
    }
});

// Agrego evento al pegar texto de entrada
areaDeTextoEntrada.addEventListener('paste', function(evento) {
    // Prevenir el comportamiento predeterminado (opcional)
    // evento.preventDefault();

    // Obtener el contenido pegado
    const textoPegado = (evento.clipboardData || window.clipboardData).getData('text');
    acondicionarSalidaSegunEntrada(textoPegado);
    controlarContornoAlerta(textoPegado);
});


// Actualizo el ancho de la ventana al redimensionarla y actualizo la presencia de la imagen
// Asigno un evento al redimensionar la ventana
window.onresize = verificarPresenciaImagen;
function verificarPresenciaImagen() {
    // console.log("Ventana redimensionada, mide " + window.innerWidth + "px de ancho");
    anchoDeVentana = window.innerWidth;
    visibilizarImagen();
}

// Asigno un evento al clickear el botón copiar mediante una función flecha
botonCopiar.addEventListener("click", () => escribirTextoAlPortapapeles(textoDeSalida.innerHTML));
async function escribirTextoAlPortapapeles(text) {
  try {
    await navigator.clipboard.writeText(text);

    // Muestro el mensaje de texto copiado!
    visibilizarElemento(textoCopiado);
    setTimeout(() => {
        ocultarElemento(textoCopiado);
    }, 750);

  } catch (error) {
    console.error(error.message);
  }
}

setearInicioDeApp();