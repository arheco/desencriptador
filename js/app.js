let textoIngresado;
let textoEncriptado;
let textoSaliente;
let campoMunecoSalida;
let campoTextoSalida;
let botonCopiar;
let copiar;
let err; 
const valtex = /[^A-z\s\d][\\\^]?/g;
let inputtext;
let validado;
var vatx = '';


function salidaTexto() {
    document.getElementById("TextoOut").value = textoSaliente;
    campoMunecoSalida = document.getElementById("MunecoBuscando").style.display = "none";
    campoTextoSalida = document.getElementById("CampoSalida").style.display = "flex"; 
    botonCopiar = document.getElementById("7").style.display= "flex";   
}

function reset() {
    document.getElementById("TextoOut").value = textoSaliente;
    campoMunecoSalida = document.getElementById("MunecoBuscando").style.display = "flex";
    campoTextoSalida = document.getElementById("CampoSalida").style.display = "none"; 
    botonCopiar = document.getElementById("7").style.display= "none";   
}

function busquedaEncriptar() {
    textoIngresado = document.getElementById("EntradaTexto").value;
    textoEncriptado = textoIngresado; 
    textoEncriptado = textoEncriptado.replaceAll('a', 'ai');
    textoEncriptado = textoEncriptado.replaceAll('e', 'enter');
    textoEncriptado = textoEncriptado.replaceAll('i', 'imes');
    textoEncriptado = textoEncriptado.replaceAll('o', 'ober');
    textoEncriptado = textoEncriptado.replaceAll('u', 'ufat');

textoSaliente = textoEncriptado;
vatx = validaTexto();
    if (vatx == false){
        console.log("El encriptado se detuvo por un error en la validación.");
        return;
    }
        else{
            console.log("La encriptación se completó correctamente.");
            salidaTexto();
    }
}

function busquedaDesencriptar() {
    textoIngresado = document.getElementById("EntradaTexto").value;
    textoDesencriptado = textoIngresado; 
    textoDesencriptado = textoDesencriptado.replaceAll('ufat', 'u');
    textoDesencriptado = textoDesencriptado.replaceAll('ober', 'o');
    textoDesencriptado = textoDesencriptado.replaceAll('imes', 'i');
    textoDesencriptado = textoDesencriptado.replaceAll('enter', 'e');
    textoDesencriptado = textoDesencriptado.replaceAll('ai', 'a');

textoSaliente = textoDesencriptado;
vatx = validaTexto();
    if (vatx == false){
        console.log("El desencriptado se detuvo por un error en la validación.");
        return;
    }
        else{
            console.log("La desencriptación se completó correctamente.");
            salidaTexto();
            vatx = 0;
    }
}

async function CopiarTexto(){
    try {
        copiar = textoSaliente;
        await navigator.clipboard.writeText(copiar);
        alert('Se ha copiado el texto al portapapeles.')
    }
        catch (err) {
            console.error ('Error al copiar', err);
    }
}

function validaTexto(){
    inputtext = document.getElementById("EntradaTexto").value;
    validado = valtex.test(inputtext);    
if (validado == false) {
        console.log("Validación OK.");
        return true;
    } 
    else {
        reset();
        alert("Tu texto contiene caracteres no admitidos, revisa que solo tengas minúsculas sin acentos y sin signos.");
        return false;
    }
}