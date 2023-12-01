/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
}
console.log(devolverPrimerElemento([1, 2, 3, 4, 5, 6, 7, 8, 9]));

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[array.length - 1];
}
console.log();
console.log(devolverUltimoElemento([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(devolverUltimoElemento([1, 2, 3, 4, 5, 6, 7]));

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}
console.log();
console.log(devolverUltimoElemento([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   return array.forEach(element => {
      console.log(element + 1);
   });
}
console.log();
console.log(incrementarPorUno([1, 2, 3, 4]));

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}
console.log();
console.log(agregarItemAlFinalDelArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'elementoFinal'));

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}
console.log();
console.log(agregarItemAlComienzoDelArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'elementoInicial'));

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   return palabras.join(' ')
}
console.log();
console.log(dePalabrasAFrase(['Beto', 'aprende', 'con', 'Henry']));

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   return array.includes(elemento);
}
console.log();
console.log(arrayContiene(['Beto', 'aprende', 'con', 'Henry'], 'Beto'));
console.log(arrayContiene(['Beto', 'aprende', 'con', 'Henry'], 'beto'));

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   let element = 0;
   for (let i = 0; i < arrayOfNums.length; i++) {
      element += arrayOfNums[i];     
   }
   return element;
}
console.log();
console.log(agregarNumeros([1, 2, 3, 4]));

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   let element = 0;
   for (let i = 0; i < resultadosTest.length; i++) {
      element += resultadosTest[i];      
   }
   return element / resultadosTest.length;
}
console.log();
console.log(promedioResultadosTest([4.5, 3.8, 3.2, 4.3]));

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   return Math.max(...arrayOfNums);
}
console.log();
console.log(numeroMasGrande([4.5, 3.8, 3.2, 4.3]));

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   let element = 0;
   for (let i = 0; i < array.length; i++) {   
     if (array[i] > 18) {
         element += 1;
     };         
   }
   return element;
}
console.log();
console.log(cuentoElementos([1, 20, 3, 40, 5, 60, 7, 80]));

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if (numeroDeDia == 1 || numeroDeDia == 7) {
         return 'si el día corresponde a Sábado o Domingo';
   } else {
      return 'Es dia laboral';
   }
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   let numero = num.toString();
   return numero[0] == '9';
}
console.log();
console.log(empiezaConNueve(987));
console.log(empiezaConNueve(87));

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   
   let meses = [];
   let element = 0;

   for (let i = 0; i < array.length; i++) {
      array[i] = array[i].toLowerCase();      
   }

   // Enero
   if (array.includes('enero')) {
      meses[element] = 'Enero';
   } else {
      meses[element] = 'Enero no se encontro'
   }
   element++;

   // Marzo
   if (array.includes('marzo')) {
      meses[element] = 'Marzo';
   } else {
      meses[element] = 'Marzo no se encontro'
   }
   element++;

   // Noviembre
   if (array.includes('noviembre')) {
      
      meses[element] = 'Noviembre';
   } else {
      meses[element] = 'Noviembre no se encontro'
   }
   element++;

   return meses;   
}
console.log();
console.log(mesesDelAño(['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septirmbre', 'Octubre', 'Noviembre', 'Diciembre']));
console.log(mesesDelAño(['Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septirmbre', 'Octubre', 'Noviembre', 'Diciembre']));
console.log(mesesDelAño(['Enero', 'Febrero', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septirmbre', 'Octubre', 'Noviembre', 'Diciembre']));
console.log(mesesDelAño(['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septirmbre', 'Octubre', 'Diciembre']));

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   let multuolicacion = [];
   for (let i = 0; i <= 60; i++) {
      multuolicacion[i] = 6 * i;          
   }
   for (let i = 0; i < multuolicacion.length; i++) {
      console.log('6 * ' + i + ' = ' + multuolicacion[i])
      
   }
}
console.log();
tablaDelSeis()

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   let arrayMayorCien = [];
   let elemento = 0;
   for (let i = 0; i < array.length; i++) {
      
      if (array[i] > 100) {
         arrayMayorCien[elemento] = array[i];
         elemento++
      }
            
   }
   return arrayMayorCien;
}
console.log();
const arrayAleatorio = Array.from({length: 8}, () => (Math.floor(Math.random() * 100)) * 2);
console.log(mayorACien(arrayAleatorio));

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
