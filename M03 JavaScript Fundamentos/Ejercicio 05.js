/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*5️⃣ EJERCICIO 05 5️⃣*/

function esPositivo(num) {
   // La función recibe un entero. Devuelve como resultado un string que indica si el número
   // es positivo o negativo.
   // Si el número es positivo ---> "Es positivo".
   // Si el número es negativo ---> "Es negativo".
   // Si el número es 0, devuelve false.
   // Tu código:
   if (num > 0) {
      return 'Es positivo';
   }else{
      if (num < 0) {
         return 'Es negativo';
      } else {
         return false;
      }
   }
}
console.log(esPositivo(5));
console.log(esPositivo(-5));
console.log(esPositivo(0));

function agregarSimboloExclamacion(str) {
   // Agrega un símbolo de exclamación al final del string "str" y retórnalo
   // Ejemplo: "hello world" ---> "hello world!"
   // Tu código:
   return str + '!';
}
console.log(agregarSimboloExclamacion('Hola Mundo'));

function combinarNombres(nombre, apellido) {
   // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
   // Ejemplo: ("Soy", "Henry") ---> "Soy Henry"
   // Tu código:
   return (nombre + ' ' + apellido);
}
console.log(combinarNombres('Alberto', 'Collazos'));

function obtenerSaludo(nombre) {
   // Toma el string "nombre" y concatena otra string en la cadena para que tome la siguiente forma:
   // Ejemplo: "Martin" ---> "Hola Martin!"
   // Tu código:
   return ('hola' + ' ' + nombre + '!' );
}
console.log(obtenerSaludo('Beto'));

function obtenerAreaRectangulo(alto, ancho) {
   // Retornar el área de un rectángulo teniendo su altura y ancho.
   // Tu código:
   return ('El area del rectangulo es: ' + (alto * ancho));
}
console.log(obtenerAreaRectangulo(5, 2));

function retornarPerimetro(lado) {
   // La función recibe como argumento la medida de un lado de un cuadrado.
   // Debes retornar su perímetro.
   // Tu código:
   return ('El perimetro del area es: ' + lado*4);
}
console.log(retornarPerimetro(5));

function areaDelTriangulo(base, altura) {
   // Calcula el área de un triángulo y retorna el resultado.
   // Tu código:
   return ('El area del triangulo es: ' + ((base * altura) / 2));
}
console.log(areaDelTriangulo(5, 2));

function deEuroAdolar(euro) {
   // Supongamos que 1 euro equivale a 1.20 dólares.
   // Debes calcular el valor recibido como argumento pasándolo a dolares.
   // Tu código:
   return (euro + ' euros, son igual a ' + (euro * 1.2) + ' dolares');
}
console.log(deEuroAdolar(100));

function esVocal(letra) {
   // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
   // Si el usuario ingresa un string de más de un caracter debes retornar el mensaje: "Dato incorrecto".
   // Si no es vocal, tambien debe retornar "Dato incorrecto".
   // Tu código:
   if (['a', 'e', 'i', 'o', 'u'].includes(letra.toLowerCase())) {
      return true;
   }else{
      return false;
   }
}
console.log(esVocal('a'));
console.log(esVocal('A'));
console.log(esVocal('j'));

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   esPositivo,
   agregarSimboloExclamacion,
   combinarNombres,
   obtenerSaludo,
   obtenerAreaRectangulo,
   retornarPerimetro,
   areaDelTriangulo,
   deEuroAdolar,
   esVocal,
};
