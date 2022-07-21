var teclas = {
	UP: 38, 
	DOWN:40, 
	LEFT:37, 
	RIGTH:39
}; // una solo linea de codigo desplegada

console.log(teclas);

document.addEventListener("keydown", dibujarTeclado);
var cuadro = document.getElementById("area_de_dibujo");
var papel = cuadro.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea("black", 149, 149, 151, 151, papel); //punto de inicio

function dibujarLinea(color, xini, yini, xfin, yfin, lienzo) 
{
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.lineWidth = 3; // grosor de la linea
	lienzo.moveTo (xini, yini);
	lienzo.lineTo (xfin, yfin);
	lienzo.stroke();
	lienzo.closePath();
}

// registra todos los datos internos en la variable evento (parametro)
function dibujarTeclado(evento) 
{
	// version usando if 
	/*
	if(evento.keyCode == teclas.UP){
		console.log("sube");
	}

	if(evento.keyCode == teclas.DOWN){
		console.log("baja");
	}

	if(evento.keyCode == teclas.RIGTH){
		console.log("izquierda");
	}

	if(evento.keyCode == teclas.LEFT){
		console.log("derecha");
	}
	*/

	// version usando switch
	var colorcito = "red";
	var movimiento = 1;
	switch(evento.keyCode){
		case teclas.UP:
			dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
			y = y - movimiento;
		break;
		case teclas.DOWN:
			dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
			y = y + movimiento;
		break;
		case teclas.RIGTH:
			dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
			x = x + movimiento;
		break;
		case teclas.LEFT:
			dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
			x = x - movimiento;
		break;
		default:
			console.log("otra tecla");
		break;
	}
}

