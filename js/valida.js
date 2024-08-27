//Este script presenta errores que deben ser corregidos.
const valtex = /[^A-z\s\d][\\\^]?/g;
let inputtext;
let validado;

validaTexto(){
    inputtext = document.getElementById("EntradaTexto").value;
    validado = valtex.test(inputtext);
    
    if validado == true {
        console.log("Todos los datos han sido validados y aceptados. No se requiere ninguna acción por parte del usuario.");
        else
            alert("Tu texto contiene caracteres no admitidos, revisa que solo tengas minusculas sin acentos y sin signos.");
    }
}