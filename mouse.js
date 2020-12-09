
const  conseguirColor = () =>{
    colorLineas = areTexto.value.toLowerCase();
    console.log(colorLineas);
}


const dibujarLineas = (color, xInicial, yInicial, xFinal, yFinal, lienzo) =>{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
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

    console.log("DEDO ABAJO ", + coorX, coorY);
}


const moverMouse = (evento)  =>{
    if (estado){ 
        dibujarLineas(colorLineas, coorX, coorY, evento.layerX, evento.layerY, cuadroDibujo);
        coorX = evento.layerX;
        coorY = evento.layerY; 
        console.log("estado de las var con movermouse ", + coorX, coorY);
    }
}

const dedoArriba = () =>{
    coorX = 0;
    coorY = 0;
    estado = false
    console.log("DEDO ARRIBA ", + coorX, coorY);
}



// Variables
const dibujo = document.getElementById("areaDibujo");
const cuadroDibujo = dibujo.getContext("2d");
const botonColor = document.getElementById("boton");
const areTexto = document.getElementById("texto");
let coorX = 0;
let coorY = 0;
let colorLineas = "yellow";
let estado = false;

 

// Eventos
dibujo.addEventListener("mousedown", dedoAbajo);
dibujo.addEventListener("mousemove", moverMouse);
dibujo.addEventListener("mouseup", dedoArriba);
botonColor.addEventListener("click", conseguirColor);


dibujarLineas(colorLineas, 0, 0, 300, 0, cuadroDibujo);
dibujarLineas(colorLineas, 300, 0, 300, 300, cuadroDibujo);
dibujarLineas(colorLineas, 300, 300, 0, 300, cuadroDibujo);
dibujarLineas(colorLineas, 0, 300, 0, 0, cuadroDibujo);
