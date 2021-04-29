document.write("<h1 style='color: red;' >Hola Mundo</h1>");
console.log("Hola Mundo en la consola");

let enteros = [24, 26, 27, 30, 31, 50, 12, 13, 64, 27, 68];
for (let i = 0; i < enteros.length; i++) {
  if (enteros[i] > 30) enteros.push(1);
}
