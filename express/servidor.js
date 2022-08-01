const express = require('express') 
// require busca los frameworks instalados en el navegador o proyecto
const app = express()

// ingreso la url, la funcion para iniciar(lo que recibo) 
// y de resultado(lo que envio al servidor)
app.get('/', function (req, res) { 
  res.send('Hello World') // mesaje que imprimo
})

// puedo crear mas de una url
app.get('/cursos', cursos);

function cursos(peticion, resultado)
{ 
  resultado.send('Estos son los <n>cursos</n>');
}

app.listen(8989); //puerto en el que se ejecuta el servidor