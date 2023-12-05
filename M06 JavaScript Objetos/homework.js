/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function crearGato(nombre, edad) {
   // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
   // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
   // Además, agregar una propiedad con el nombre "meow".
   // La propiedad "meow" será una función que retorne el string: "Meow!".
   // Retornar el objeto.
   // Tu código:
   let gato = {
      nombre: nombre,
      edad: edad,
      meow: () => {return 'Meow!'}
   }
   console.log(gato.meow());
   return gato;
}
console.log(crearGato('felix', 3));

function nuevoUsuario(nombre, email, password) {
   // Debes crear un nuevo objeto.
   // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
   // Retornar el objeto.
   // Tu código:
   let usuario = {
      nombre: nombre,
      email: email,
      password: password
   }
   return usuario
}
console.log();
console.log(nuevoUsuario('Beto', 'albertocd1284@', 'betoclau'));

function agregarPropiedad(objeto, propiedad) {
   // Recibirás un objeto por parámetro.
   // Debes agregarle una propiedad con el nombre recibido por parámetro.
   // Esta propiedad será igual al valor `null`.
   // Retornar el objeto.
   // Tu código:
   objeto.propiedad = [propiedad];
   return objeto;
}
let objeto = {};
console.log();
console.log(agregarPropiedad(objeto, 'null'));

function invocarMetodo(objeto, metodo) {
   // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
   // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
   // [NOTA]: no necesitar retornar nada.
   // Tu código:
   objeto[metodo] = console.log('Beto esta estudiando en Henry')
   // (() => {})
   console.log(objeto);
}
console.log();
let obj = {};
invocarMetodo(obj, 'metodo')

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
   // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
   // Debes multiplicar este número por 5 y retornar el resultado.
   // Tu código:
   objetoMisterioso.numeroMisterioso = [(Math.floor(Math.random() * 100)) * 2];
   console.log(objetoMisterioso);
   return objetoMisterioso.numeroMisterioso * 5;
}
console.log();
let ojbMisterioso = {};
console.log(multiplicarNumeroDesconocidoPorCinco(ojbMisterioso))

function eliminarPropiedad(objeto, propiedad) {
   // El parámetro "propiedad" es una propiedad del objeto que recibes.
   // Debes eliminarla del objeto y retornarlo finalmente.
   // Tu código:
   objeto[propiedad] = 'Beto';
   console.log(objeto);
   delete objeto.propiedad;
   return objeto;
}
console.log();
let obj_1 = {};
console.log(eliminarPropiedad(obj_1, 'propiedad'));

function tieneEmail(objetoUsuario) {
   // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   objetoUsuario.email;
   console.log(objetoUsuario);
   console.log(objetoUsuario.hasOwnProperty('email'));
   objetoUsuario.email = 'alberocd1284@';
   console.log(objetoUsuario);
   console.log(objetoUsuario.hasOwnProperty('email'));

}
console.log();
let obj_2 = {}
tieneEmail(obj_2);

function tienePropiedad(objeto, propiedad) {
   // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
}

function verificarPassword(objetoUsuario, password) {
   // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
}

function actualizarPassword(objetoUsuario, nuevaPassword) {
   // Reemplaza la contrseña guardada en la propiedad "password" del "objetoUsuario".
   // La nueva contraseña la recibes por parámetro.
   // Retornar el objeto.
   // Tu código:
   console.log(objetoUsuario);
   objetoUsuario.password = nuevaPassword;
   return objetoUsuario;
}
console.log();
let obj_3 = {password: 'Beto1284'};
console.log(actualizarPassword(obj_3, 'nuevaClave'));


function agregarAmigo(objetoUsuario, nuevoAmigo) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
   // Debes agregar el "nuevoAmigo" al final de este arreglo.
   // Retornar el objeto.
   // Tu código:
   objetoUsuario.amigos.push(nuevoAmigo);
   return objetoUsuario;
}
console.log();
let obj_4 = {amigos: []};
console.log(agregarAmigo(obj_4, 'Beto'));
console.log(agregarAmigo(obj_4, 'Claudia'));
console.log(agregarAmigo(obj_4, 'Santi'));

function pasarUsuarioAPremium(objetoMuchosUsuarios) {
   // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
   // Cada usuario tiene una propiedad llamada "esPremium".
   // Define esta propiedad de todos los usuarios como true.
   // Retornar el arreglo.
   // Tu código:
   objetoMuchosUsuarios = [usuarios = {esPremium: true}, usuarios = {esPremium: true}, usuarios = {esPremium: true}, usuarios = {esPremium: true}];
   console.log(objetoMuchosUsuarios);
}
console.log();
let obj_5 = {}
console.log(pasarUsuarioAPremium(obj_5));

function sumarLikesDeUsuario(objetoUsuario) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
   // Este arreglo contiene objetos (post).
   // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
   // Debes sumar los likes de todos los post y retornar el resultado.
   // Tu código:
   const num = 4;
   
   for (let i = 0; i < num; i++) {
      const element = {likes: ((Math.floor(Math.random() * 100)) * 2)};
      const post = element;
      
      objetoUsuario.posts.push(post);
   }
   console.log(objetoUsuario.posts);
   let suma = 0;
   const array = objetoUsuario.posts;
   for (let i = 0; i < array.length; i++) {
      const element = array[i].likes;
      suma += element;
   }
   return suma;
}
console.log();
let obj_6 = {posts: []}
console.log(sumarLikesDeUsuario(obj_6));

function agregarMetodoCalculoDescuento(objetoProducto) {
   // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
   // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
   // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
   // Luego debes restar del precio total del producto ese valor de descuento.
   // Retornar el precio final.
   // Ejemplo:
   // Precio ---> 10
   // PorcentajeDeDescuento ---> 0.2
   // Precio final ---> 8
   // Tu código:
   let element_1 = objetoProducto.precio = 100;
   let element_2 = objetoProducto.porcentajeDeDescuento = 50;
   objetoProducto.calcularPrecioDescuento = () => {
      return element_1 * ((100 - element_2) / 100);
   }
   return objetoProducto.calcularPrecioDescuento();
}
console.log();
let obj_7 = {}
console.log(agregarMetodoCalculoDescuento(obj_7));
/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearGato,
   nuevoUsuario,
   agregarPropiedad,
   invocarMetodo,
   multiplicarNumeroDesconocidoPorCinco,
   eliminarPropiedad,
   tieneEmail,
   tienePropiedad,
   verificarPassword,
   actualizarPassword,
   agregarAmigo,
   pasarUsuarioAPremium,
   sumarLikesDeUsuario,
   agregarMetodoCalculoDescuento,
};
