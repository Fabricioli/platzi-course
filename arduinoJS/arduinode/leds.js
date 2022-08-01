var five = require("johnny-five");
var circuito = new five.Board();

circuito.on("ready", prender); // cuando el circuito prenda...

function prender()
{
  var ledAmarillo = new five.Led(9); // direccion del puerto
  var ledRojo = new five.Led(13);

  ledAmarillo.blink(200); // milisegundos
  ledRojo.blink(700);
};