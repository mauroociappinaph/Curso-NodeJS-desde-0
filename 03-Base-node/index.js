const fs = require("fs");

/*Este código importa el módulo fs de la 
biblioteca estándar de Node.js y lo 
asigna a una variable constante llamada fs. 
El módulo fs proporciona funciones para 
interactuar con el sistema de archivos en 
JavaScript.
*/

//? Hacer tabla del 5 e imprimir en la consola

const base = 5;
let salida = "";

for (let i = 1; i <= 10; i++) {
  console.log(`${base} * ${i} = ${base * i}`);
}

fs.writeFile("tabla.txt", salida, (err) => {
  if (err) throw err;

  console.log("Archivo tabla.txt creado");
});
