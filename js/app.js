var canvas = document.getElementById('fondo');
var lapiz = canvas.getContext('2d');

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
    }
    if(vaca.cargaOk == true){
        lapiz.drawImage(vaca.imagen,150,100);
    }
    if(cerdo.cargaOk == true){
        lapiz.drawImage(cerdo.imagen,250,200);
    }
    if(llave.cargaOk == true){
        lapiz.drawImage(llave.imagen,50,50);
    }
}

