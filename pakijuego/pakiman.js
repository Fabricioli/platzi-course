// creo una biblioteca / array asociativo != array numerico
var imagenes = [];
imagenes["chuu"] = "vaca.png";
imagenes["arnold"] = "pollo.png";
imagenes["centurion"] = "cerdo.png";

// creo dos objetos que vienen de la misma instancia
var coleccion = [];
coleccion.push(new Pakiman("chuu", 300, 80));
coleccion.push(new Pakiman("arnold", 150, 90));
coleccion.push(new Pakiman("centurion", 225, 85));

//recorro el array usando of, in
for (var fred of coleccion)
{
	fred.mostrar();
}