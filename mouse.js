


const dibujarLineas = (color, xInicial, yInicial, xFinal, yFinal, lienzo) =>{
    lienzo.beginPath();
    lienzo.strokeStryle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xInicial, yInicial);
    lienzo.lineTo(xFinal, yFinal);
    lienzo.stroke();
    lienzo.closePath();
}


const dibujarClick = (evento) =>{
    console.log(evento);
    console.log(evento.layerX);
} 




// Variables
let dibujo = document.getElementById("areaDibujo");
let lienzo = dibujo.getContext("2d");
let coorX;
let cooY;
let movimiento = 10;

// Evento
dibujo.addEventListener("mouseup", dibujarClick);

