document.addEventListener("keydown",movimiento);
var canvas = document.getElementById('fondo');
var lapiz = canvas.getContext('2d');
var matriz = new Array(6);
const DIMENSION = 80;
var x = random(0,5) * DIMENSION;
var y = random(0,5) * DIMENSION;
iniciarMatriz();
inicializarCerdos();
inicializarVacas();
var fondo = {
    url: './imagenes/tile.png',
    imagen: Image,
    cargaOk: false
};

var vaca = {
    url: './imagenes/vaca.png',
    imagen: Image,
    cargaOk: false
};

var cerdo = {
    url: './imagenes/cerdo.png',
    imagen: Image,
    cargaOk: false
};

var llave = {
    url: './imagenes/llave.png',
    imagen: Image,
    cargaOk: false
}

fondo.imagen = new Image();
vaca.imagen = new Image();
cerdo.imagen = new Image();
llave.imagen = new Image();
fondo.imagen.src = fondo.url;
vaca.imagen.src = vaca.url;
cerdo.imagen.src = cerdo.url;
llave.imagen.src = llave.url;
fondo.imagen.addEventListener("load",function(){
    fondo.cargaOk = true;
    dibujar();
});
vaca.imagen.addEventListener("load",function(){
    vaca.cargaOk = true;
    dibujar();
});
cerdo.imagen.addEventListener("load",function(){
    cerdo.cargaOk = true;
    dibujar();
});
llave.imagen.addEventListener("load",function(){
    llave.cargaOk = true;
    dibujar();
});
function dibujar(){
    if(fondo.cargaOk == true){
        lapiz.drawImage(fondo.imagen,0,0);
        dibujarMatriz();
    }
    if(llave.cargaOk == true){
        lapiz.drawImage(llave.imagen,x,y);
    }
}

var tecla = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    ENTER: 13
}

function movimiento(evento){
    switch(evento.keyCode){
        case tecla.LEFT:
            x = x - DIMENSION;
            dibujar();
            break;
        case tecla.UP:
            y = y - DIMENSION;
            dibujar();
            break;
        case tecla.RIGHT:
            x = x + DIMENSION; 
            dibujar();
            break;
        case tecla.DOWN:
            y = y + DIMENSION;
            dibujar();
            break;
        case tecla.ENTER:            
            alert(random(1,10));
            break;
    }
}

function random(minimo,maximo){
    return Math.floor(Math.random() * (maximo - minimo +1)) + minimo;
}

function iniciarMatriz(){
    for(var i = 0; i < matriz.length; i++){
        matriz[i] = new Array(6);
        for(var j = 0; j < matriz.length; j++){
            matriz[i][j]='x';
            console.log(matriz[i][j]);
        }
    }
}

function inicializarCerdos(){
    var numero = random(0,10);
    for(var i = 1; i <= numero; i++){
        var fila = random(0,5);
        var columna = random(0,5);
        if(matriz[fila][columna] == 'x'){
            matriz[fila][columna] = 'c';
        }
    }
}
function inicializarVacas(){
    var numero = random(0,10);
    for(var i = 1; i <= numero; i++){
        var fila = random(0,5);
        var columna = random(0,5);
        if(matriz[fila][columna] == 'x'){
            matriz[fila][columna] = 'v';
        }
    }
}

function dibujarMatriz(){
    for(var i = 0; i < matriz.length; i++) {
        for(var j = 0; j < matriz.length; j++) {            
            if(matriz[i][j] == 'v'){
                lapiz.drawImage(vaca.imagen,i * DIMENSION, j * DIMENSION);       
            }else if(matriz[i][j] == 'c'){
                lapiz.drawImage(cerdo.imagen,i * DIMENSION, j * DIMENSION);       
            }
        }
    }
}







