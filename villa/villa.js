var vp = document.getElementById("villa-platzi");
var papel = vp.getContext("2d");

var fondo = {
	url: "tile.png",
	cargaOK: false // introduccion a los boolean (F o V)
};

var vaca = {
	url: "vaca.png",
	cargaOK: false
};

var pollo = {
	url: "pollo.png",
	cargaOK: false
};

var cerdo = {
	url: "cerdo.png",
	cargaOK: false
};

var cant = aleatorio(5, 15);

//fondo
fondo.objeto = new Image(); // creo un objeto del tipo imagen
fondo.objeto.src = fondo.url; // le paso la direccion de la imagen al objeto
fondo.objeto.addEventListener("load", cargarFondo); // nombre y funcion como parametros

//vaca
vaca.objeto = new Image(); // para no reasignar vaca escribo vaca.objeto
vaca.objeto.src = vaca.url;
vaca.objeto.addEventListener("load", cargarVacas);

//pollo
pollo.objeto = new Image();
pollo.objeto.src = pollo.url;
pollo.objeto.addEventListener("load", cargarPollos);

//cerdo
cerdo.objeto = new Image();
cerdo.objeto.src = cerdo.url;
cerdo.objeto.addEventListener("load", cargarCerdos);

function cargarFondo()
{
	fondo.cargaOK = true;	// una vez cargada la imagen
	dibujar(); 				// invoco la funcion
}

function cargarVacas()
{
	vaca.cargaOK = true;
	dibujar();
}

function cargarPollos()
{
	pollo.cargaOK = true;
	dibujar();
}

function cargarCerdos()
{
	cerdo.cargaOK = true;
	dibujar();
}

function dibujar()
{
	if (fondo.cargaOK) 
	{
		papel.drawImage(fondo.objeto, 0, 0); 	// el objeto y la posicion de la imagen
	}// indico la posicion x e y en 0 para que cargue la imagen completa
	
	if (vaca.cargaOK)
	{
		for (var v = 0; v < cant; v++)
		{
			var x = aleatorio(0, 7);
			var y = aleatorio(0, 7);
			var x = x * 40; // evito que las imagenes se superpongan
			var y = y * 40;
			papel.drawImage(vaca.objeto, x, y);
		}
	}
}
function aleatorio(min , max)
{
	var resultado;
	resultado =  Math.floor(Math.random() * (max - min + 1)) + min;
	return resultado;
}
// no se por que no se ejecuta