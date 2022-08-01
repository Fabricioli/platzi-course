var j = require("johnny-five");
var circuito = new j.Board();
var bombillo, motor, celda;
var turno = 0;

circuito.on("ready", prender);

function prender()
{
	// variable local del tipo json
	var config = {pin: "AO", freq: 50}; 
	// pin: recibe la informacion de la celda (A0)
	// freq: frecuencia a la que funciona el censor (existen distintos
	// tipos de censores, pero en este curso usamos el de luz)
	celda = new j.Sensor(config);

	bombillo = new j.Led(13);
	bombillo.on();

	motor = new j.Servo(9);
	motor.to(0); // posicion en la que se mueve el cerbo

	mover();
}

function mover()
{
	cosole.log("Luz: " + celda.value);

	var luz = celda.value;
	if (luz > 800) // si hay mucha luz, ondear
	{
		if (turno == 1)
		{
			turno = 0; 
			motor.to(70);
		}
		else
		{
			turno = 1; 
			motor.to(110);
		}
	}
	else // sino, bajar
	{
		aaaaaaaaa
	}

	setTimeout(ondear, 1000);
	// una funcion que se invoque a si misma multiple veces por una 
	// cantidad de tiempo que le asignemos