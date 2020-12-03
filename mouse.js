const dibujarLineas = (color, xInicial, yInicial, xFinal, yFinal, lienzo) =>{
    lienzo.beginPath();
    lienzo.strokeStryle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xInicial, yInicial);
    lienzo.lineTo(xFinal, yFinal);
    lienzo.stroke();
    lienzo.closePath();
}




// Variables
let dibujo = document.getElementById("areaDibujo");
let cuadroDibujo = dibujo.getContext("2d");

let movimiento = 10;

// Evento
dibujo.addEventListener("mousedown", dibujarClick);

