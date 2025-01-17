/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function obtenerMayor(x, y) {
   // "x" e "y" son números enteros.
   // Retornar el número más grande.
   // Si son iguales, retornar cualquiera de los dos.
   // Tu código:
   if (x <= y) {
      return y;
   } else {
      return x;
   }
}
console.log(obtenerMayor(4, 5));
console.log(obtenerMayor(6, 6));
console.log(obtenerMayor(9, 5));

function mayoriaDeEdad(edad) {
   // Determinar si la persona puede ingresar al evento según su edad.
   // Si tiene 18 años ó más debe retornar el string: "Allowed".
   // Caso contrario: "Not allowed".
   // Tu código:
   if (edad >= 18) {
      return 'Allowed';
   }else{
      return 'Not allowed';
   }
}
console.log(mayoriaDeEdad(18));
console.log(mayoriaDeEdad(17));
console.log(mayoriaDeEdad(20));

function conection(status) {
   // El argumento "status" representa el estado de conexión de un usuario.
   // Si el estado es igual a 1, el usuario está "Online".
   // Si el estado es igual a 2, el usuario está "Away".
   // De lo contrario, presumimos que el usuario está "Offline".
   // Retornar el estado de conexión del usuario.
   // Tu código:
   switch (status) {
      case 1:
         return 'Online';
         break;
      case 2:
         return 'Away';   
      default:
         return 'Offline';
         break;
   }
}
console.log();
console.log(conection(1));
console.log(conection(2));
console.log(conection(20));

function saludo(idioma) {
   // Retornar un saludo en tres diferentes lenguajes:
   // Si "idioma" es "aleman", devuelve "Guten Tag!".
   // Si "idioma" es "mandarin", devuelve "Ni Hao!".
   // Si "idioma" es "ingles", devuelve "Hello!".
   // Si "idioma" no es ninguno de los anteriores o es `undefined` devuelve "Hola!".
   // Tu código:
   
   switch (idioma.toLowerCase()) {
      case 'aleman':
         return 'Guten Tag!';
         break;
      case 'mandarin':
            return 'Ni Hao!';
         break;
      case 'ingles':
            return 'Hello!';
         break;
      default:
         return 'Hola!';
         break;
}
}
console.log();
console.log(saludo('AleMan'));
console.log(saludo('ale man'));
console.log(saludo('mandarin'));
console.log(saludo('INGles'));

function colors(color) {
   // La función recibe un color. Retornar el string correspondiente:
   // En caso que el color recibido sea "blue"   --> "This is blue".
   // En caso que el color recibido sea "red"    --> "This is red".
   // En caso que el color recibido sea "green"  --> "This is green".
   // En caso que el color recibido sea "orange" --> "This is orange".
   // Si no es ninguno de esos colores           --> "Color not found".
   // IMPORTANTE: utilizar el statement SWITCH.
   // Tu código:
   switch (color.toLowerCase()) {
      case 'blue':
         return 'This is blue';
         break;
      case 'red':
         return 'This is red';
         break;
      case 'green':
         return 'This is green';
         break;
      case 'orange':
         return 'This is orange';
         break;         
      default:
         return 'Color not found';
         break;
   }
}
console.log();
console.log(colors('red'));
console.log(colors('BLue'));
console.log(colors(' green'));
console.log(colors('orange'));

function esDiezOCinco(num) {
   // Retornar true si "num" es 10 o 5.
   // De lo contrario, retornar false.
   // Tu código:
   if (num == 10 || num == 5) {
      return true
   } else {
      return false
   }
}
console.log();
console.log(esDiezOCinco(10));
console.log(esDiezOCinco(5));
console.log(esDiezOCinco(8));

function estaEnRango(num) {
   // Retornar true si "num" es menor que 50 y mayor que 20.
   // De lo contrario, retornar false.
   // Tu código:
   if (20 < num && num < 50) {
      return 'Esta en el rango';
   } else {
      return 'NO esta en el rango';
   }
}
console.log();
console.log(estaEnRango(25));
console.log(estaEnRango(100));

function esEntero(num) {
   // Retornar true si "num" es un entero, ya sea positivo, negativo o cero.
   // Ejemplo: 0.8   ---> false
   // Ejemplo: 1     ---> true
   // Ejemplo: (-10) ---> true
   // De lo contrario, retorna false.
   // Tu código:
   if (Number.isInteger(num)) {
      return true;
   } else {
      return false;
   }
}
console.log();
console.log(esEntero(10.1));
console.log(esEntero(-10));
console.log(esEntero(10));
console.log(esEntero(0));

function fizzBuzz(num) {
   // Si "num" es divisible entre 3, retorna "fizz".
   // Si "num" es divisible entre 5, retorna "buzz".
   // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
   // De lo contrario, retorna false.
   // Tu código:
   switch (true) {
      case (Number.isInteger(num / 3) && Number.isInteger(num / 5)):
            return 'fizzbuzz';
            break;
      case (Number.isInteger(num / 3)):
         return 'fizz';
         break;
      case (Number.isInteger(num / 5)):
         return 'buzz';
         break;      
      default:
         return false;
         break;
   }
}

console.log();
console.log(fizzBuzz(10));
console.log(fizzBuzz(9));
console.log(fizzBuzz(15));
console.log(fizzBuzz(8));


function operadoresLogicos(num1, num2, num3) {
   // La función recibe tres números distintos.
   // Si num1 es mayor a num2 y a num3, y además es positivo, retornar ---> "Numero 1 es mayor y positivo".
   // Si alguno de los tres números es negativo, retornar ---> "Hay negativos".
   // Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
   // POR LA PRIMERA CONDICION LA SIGUIENTE NO SE PUEDE CUMPLIR
   // Si todos los argumentos son cero, retornar ---> "Error".
   // Si no se cumple ninguna de las condiciones anteriores, retornar false.
   // Tu código:
   while (num1 != num2 && num2 != num3) {
      switch (true) {
         case (num1 >= 0 && Math.max(num1, num2, num3)==num1):
            return 'Numero 1 es mayor y positivo';
            break;
         case (num1<0 || num2<0 || num3<0):
            return 'Hay negativos';
            break;
         case (Math.max(num1, num2, num3)==num3):
            return ('El nuevo valor del numero 3 es ' + (num3 + 1));
            break;
         default:
            return false;
            break;
      }
   }  
}
console.log();
console.log(operadoresLogicos(10,9,8));
console.log(operadoresLogicos(-10,9,8));
console.log(operadoresLogicos(10,9,80));
console.log(operadoresLogicos(1,1,1)+'maricon');

function esPrimo(num) {
   // Retornar true si "num" es primo.
   // De lo contrario retorna false.
   // [Pista 1]: un número primo sólo es divisible por sí mismo y por 1.
   // [Pista 2]: puedes resolverlo utilizando un `bucle for`.
   // [Nota]: los números negativos, 0 y 1 NO son números primos.
   // Tu código:
   let primo;
   for (let i = 2; i < num; i++) {
      primo = Number.isInteger(num/i);
      if (primo) {
         return 'el numero no es primo';
         break;
      }
   }
   if(primo==false){
      return 'el numero es primo';
   }
}
console.log();
console.log(esPrimo(43));
console.log(esPrimo(33));

function esVerdadero(valor) {
   // Si "valor" es verdadero retornar "Soy verdadero".
   // Caso contrario, retornar "Soy falso".
   // Tu código:
}

function tieneTresDigitos(num) {
   // Si el número recibido tiene tres dígitos retornar true.
   // Caso contrario, retornar false.
   // Tu código:
   //SI EL NUMERO ES MAYOR O IGUAL A 100
}

function doWhile(num) {
   // Implementar una función que aumente el valor recibido en 5 hasta un límite de 8 veces.
   // Retornar el valor final.
   // Utilizar el bucle Do-While.
   // Tu código:
   let i = 0;
   do {
      num += 5;
      i++;
   } while (i < 8);
   return num;
}
console.log();
console.log(doWhile(1));

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   obtenerMayor,
   mayoriaDeEdad,
   conection,
   saludo,
   colors,
   esDiezOCinco,
   estaEnRango,
   esEntero,
   fizzBuzz,
   operadoresLogicos,
   esPrimo,
   esVerdadero,
   tieneTresDigitos,
   doWhile,
};
