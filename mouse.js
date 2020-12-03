const dibujarLineas = (color, xInicial, yInicial, xFinal, yFinal, lienzo) =>{
    lienzo.beginPath();
    lienzo.strokeStryle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xInicial, yInicial);
    lienzo.lineTo(xFinal, yFinal);
    lienzo.stroke();
    lienzo.closePath();
}


const dedoAbajo = (evento) =>{

    coorX = evento.layerX;
    coorY = evento.layerY;
    estado = true;
}


const moverMouse = (evento)  =>{
    if (estado){ 
        dibujarLineas("blue", coorX, coorY, evento.layerX, evento.layerY, cuadroDibujo);
        coorX = evento.layerX;
        coorY = evento.layerY; 
    }
}

const dedoArriba = () =>{
    coorX = 0;
    coorY = 0;
    estado = false
}



// Variables
const dibujo = document.getElementById("areaDibujo");
const cuadroDibujo = dibujo.getContext("2d");
let coorX = 0;
let coorY = 0;
let estado = false;

 

// Evento
dibujo.addEventListener("mousedown", dedoAbajo);
dibujo.addEventListener("mousemove", moverMouse);
dibujo.addEventListener("mouseup", dedoArriba);


dibujarLineas('red', 0, 0, 300, 0, cuadroDibujo);
dibujarLineas('red', 300, 0, 300, 300, cuadroDibujo);
dibujarLineas('red', 300, 300, 0, 300, cuadroDibujo);
dibujarLineas('red', 0, 300, 0, 0, cuadroDibujo);
