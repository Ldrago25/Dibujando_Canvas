var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

console.log(lienzo);

function dibujar_linea(xInicio, yInicio, xFinal, yFinal, color) {
    lienzo.beginPath();

    lienzo.strokeStyle = color;
    lienzo.moveTo(xInicio, yInicio);
    lienzo.lineTo(xFinal, yFinal);
    lienzo.stroke();

    lienzo.closePath();

}



/*dibujar_linea(100, 100, 200, 200, "red");
dibujar_linea(100, 100, 100, 200, "blue");
dibujar_linea(100, 200, 200, 200, "green");*/


var lineas = parseInt(prompt("Cuantas lineas quieres hacer: "));

var i;
var x, y, x_f, y_f;
var color;
for (i = 0; i < lineas; i++) {

    x = parseInt(prompt("Linea numero: " + parseInt(i + 1) + "Coordenada inicial en x: "));
    y = parseInt(prompt("Linea numero: " + parseInt(i + 1) + "Coordenada inicial en y: "));
    x_f = parseInt(prompt("Linea numero: " + parseInt(i + 1) + "Coordenada Final en x: "));
    y_f = parseInt(prompt("Linea numero: " + parseInt(i + 1) + "Coordenada Final en y: "));
    color = prompt("Color: ");
    dibujar_linea(x, y, x_f, y_f, color);
}