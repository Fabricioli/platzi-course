// C++ code
int amarillo = 13; // direccion del led amarillo
int rojo = 7; // led rojo
int milisegundos = 300; // intervalo en el que va a parpadear

void setup() // funcion que se ejecuta al iniciar la pc
{
  // indico (puerto, (recibir/ enviar electricidad))
  pinMode(amarillo, OUTPUT); 
  pinMode(rojo, OUTPUT); 

}

void loop() // funcion que se ejecuta todo el tiempo
{
  // hago que un led encienda cuando el otro esta apagado
  // indico (pueto, voltaje)
  digitalWrite(amarillo, HIGH); // high para encender
  digitalWrite(rojo, LOW);
  delay(milisegundos); //tiempo de espera
  
  digitalWrite(amarillo, LOW); // low para apagar/ disminuir
  digitalWrite(rojo, HIGH);
  delay(milisegundos * 2);
}