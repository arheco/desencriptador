let textoIngresado;
let textoEncriptado;
let textoSaliente;
let campoMunecoSalida;
let campoTextoSalida;
let botonCopiar;
let copiar;
let err; 

function salidaTexto() {
    document.getElementById("TextoOut").value = textoSaliente;
    campoMunecoSalida = document.getElementById("MunecoBuscando").style.display = "none";
    campoTextoSalida = document.getElementById("CampoSalida").style.display = "flex"; 
    botonCopiar = document.getElementById("7").style.display= "flex";   
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
salidaTexto();
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
salidaTexto();
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
