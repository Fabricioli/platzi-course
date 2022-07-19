var texto = document.getElementById('text_line');
var botoncito = document.getElementById('boton');
boton.addEventListener("click", dibujoPorClick); 
// existen multiples eventos, pero ahora elegimos el click
/* al pasar la funcion sin los parentesis (dibujoPorClick()) solo la estoy
referenciando para que se ejecute cuando se active el evento*/

var d = document.getElementById('dibujito'); // guardo el id en una variable
var ancho = d.width;
var lienzo = d.getContext("2d"); 
// accedo a la variable previa (se pueden dibujar 2d y 3d)

/*lienzo.beginPath(); // se le llama a iniciar un trazo
lienzo.strokeStyle = "red";
lienzo.moveTo (100, 100); // metodo para mover el lapiz (punto de inicio)
lienzo.lineTo (200, 200); // metodo para trazar linea (punto final)
lienzo.stroke(); // dibujar con el estilo elegido (stroke)
lienzo.closePath(); // finalizar el trazo (levantar el lapiz)*/

function dibujarLinea(color, xini, yini, xfin, yfin) { //declaro variables
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo (xini, yini);
	lienzo.lineTo (xfin, yfin);
	lienzo.stroke();
	lienzo.closePath();
}

function dibujoPorClick(){
	var lineas = parseInt(texto.value);
	alert("has ingresado: " + lineas);

	var l = 0;
	var yi, xf;
	var espacio = ancho / lineas;

	for (l = 0; l < lineas; l++){
		yi = espacio * l;
		xf = espacio * (l + 1);
		dibujarLinea("black", 0, yi, xf, 300);
		console.log("linea " + l);
}

	dibujarLinea ("blue", 1, 1, 1, 300);
	dibujarLinea ("blue", 1, 299, 299, 299);
}
