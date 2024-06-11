function invertirLista (listaNumeros){
let listareves = [];
let hola;
for(i=0;i<listaNumeros.length;i++){
    hola = listaNumeros[i];
    listareves.unshift(hola);
}
return listareves;
}

function calcularPromedio(listaNumeros) {
    let acum=0;
    for(i=0;i<listaNumeros.length;i++){
        acum = acum+listaNumeros[i];
    }
    prom=acum/listaNumeros.length;
    return prom     
}

function crearListaDeNumeros(inicio,final) {
    ListaNumeros = [];
    let ñ = inicio;
    let listaNumeros = []
    for(i=inicio;i<=final;i++){
        listaNumeros.push(ñ);
        ñ++;     
    }
    return listaNumeros;    
}

function ordenarDeMayorAMenor(listaDeNumeros) {
    listaDeNumeros.sort((a , b ) => { return b - a });
}

function encontrarNumeroMayor(listaDeNumeros) {
    let NumMayor = 0;
    for(i=0;i<listaDeNumeros.length;i++){
        if(NumMayor<listaDeNumeros[i]){
            NumMayor= listaDeNumeros[i];
        }
    }
    return NumMayor;
}

function ordenarPalabrasPorLongitud(listaDePalabras) {
    let listaordenada = [];
    listaordenada.sort(( listaDePalabras) => a < b );
} return listaordenada


function encontrarPalabraMasCorta(listaDeNumeros) {
    let LetraCorta = 'aasdjihajhjadnkladnm';
    for(i=0;i<listaDeNumeros.length;i++){
        if(LetraCorta.length > listaDeNumeros[i].length){
            LetraCorta = listaDeNumeros[i];
        }
    }
    return LetraCorta;
}
