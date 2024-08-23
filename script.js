let limpiar = document.querySelector('#limpiar');
let ingresoTexto = document.getElementById('ingreso_texto');
let copiar = document.querySelector('#copiar');
let salidaTexto = document.querySelector('p');
let botonPegar = document.getElementById('pegar');

var llaves = [
    [ 'e', 'enter'], 
    [ 'i', 'imes'], 
    [ 'a', 'ai'], 
    [ 'o', 'ober'], 
    [ 'u', 'ufat']
]
const restricciones = /[^a-z\s]/;
function botonLimpiar() {
    ingresoTexto.value = ''; 
    salidaTexto.innerText = 'Texto Encriptado'; 
    return;  
}
function botonCopiar() {
    navigator.clipboard.writeText(salidaTexto.innerText);
    return;
}
botonPegar.addEventListener("click", async () => {
    try {
        const textoAPegar = await navigator.clipboard.readText();
        ingresoTexto.value = textoAPegar;
        console.log("Texto pegado");
    } catch (error) {
        console.log("Imposible acceder al portapapeles");
    }
});
function botonEncriptar() {
    if (restricciones.test(ingresoTexto.value) || ingresoTexto.value === '' ){
        alert('verifique el contenido ingresado, por favor');
    }else {
        let textoEncriptar = encriptar(ingresoTexto.value);
        salidaTexto.innerText = textoEncriptar;
    }
    return;
}
function encriptar(textoEncriptar) {
    textoEncriptar = textoEncriptar.toLowerCase();

    for (let i = 0; i < llaves.length; i++) {
        if (textoEncriptar.includes(llaves[i][0])) {
        textoEncriptar = textoEncriptar.replaceAll(llaves[i][0], llaves[i][1]);          
        }
        
    }
    return textoEncriptar;
}
function botonDesencriptar() {
    if (restricciones.test(ingresoTexto.value) || ingresoTexto.value === ''){
        alert('verifique el contenido ingresado, por favor');
    }else {
    let textoDesencriptar = desencriptar(ingresoTexto.value);
    salidaTexto.innerText = textoDesencriptar;
    }
    return;
}
function desencriptar(textoDesencriptar) {  
    textoDesencriptar = textoDesencriptar.toLowerCase();

    for (let i = 0; i < llaves.length; i++) {
        if (textoDesencriptar.includes(llaves[i][1])) {
        textoDesencriptar = textoDesencriptar.replaceAll(llaves[i][1], llaves[i][0]);          
        }
        
    }
    return textoDesencriptar;  
}