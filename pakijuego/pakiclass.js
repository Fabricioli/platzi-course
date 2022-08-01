// copia la clase en un archivo externo
class Pakiman // creo una clase
{
	constructor(n, v, a)
	{
		this.imagen = new Image();
		this.nombre = n;
		this.vida = v;
		this.ataque = a;

		this.imagen.src = imagenes[this.nombre];
	}

	hablar()
	{
		if (this.nombre = "chuu")
		{
			alert("chuu chuu");
		}
	}

	mostrar()
	{
		document.body.appendChild(this.imagen); // hijo de p
		// necesito acceder al body del document
		document.write("<br /><strong>" + this.nombre + "</strong><br />");
		document.write("Vida: " + this.vida + "<br />");
		document.write("Ataque: " + this.ataque + "<hr />");
	}
}