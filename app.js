let textoIngresado;
let textoEncriptado;
let textoSaliente;
let campoMunecoSalida;
let campoTextoSalida;

function salidaTexto() {
    document.getElementById("TextoOut").value = textoSaliente;
    campoMunecoSalida = document.getElementById("MunecoBuscando").style.display = "none";
    campoTextoSalida = document.getElementById("CampoSalida").style.display = "flex";    
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
textoDesencriptado = textoDesencriptado.replaceAll('ai', 'a');
textoDesencriptado = textoDesencriptado.replaceAll('enter', 'e');
textoDesencriptado = textoDesencriptado.replaceAll('imes', 'i');
textoDesencriptado = textoDesencriptado.replaceAll('ober', 'o');
textoDesencriptado = textoDesencriptado.replaceAll('ufat', 'u');

textoSaliente = textoDesencriptado;
salidaTexto();
}

