// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var arraySumaUno = [];
  for (var i = 0; i < array.length; i++) {
    var suma = array[i] + 1;
    arraySumaUno.push(suma);
  }
  return arraySumaUno;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var palabra = '';
  var suma = '';
  var frase = '';

  for (var i = 0; i < (palabras.length - 1); i++) {
    palabra = palabras[i];
    suma += palabra + ' ';
  }
  frase = suma + (palabras[palabras.length - 1])
  return frase;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (var i = 0; i < array.length; i++) {
    if (array[i] === elemento) {
      return true;
    }
  } return false;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var numero = 0;
  var suma = 0;
  for (var i = 0; i < numeros.length; i++) {
    numero = numeros[i];
    suma += numero; 
  }
  return suma;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var resultado = 0;
  var suma = 0;
  var promedio = 0;

  for (var i = 0; i < resultadosTest.length; i++) {
    resultado = resultadosTest[i];
    suma += resultado;
    promedio = suma / resultadosTest.length;
  }
  return promedio;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var maximo = Math.max(...numeros);
  return maximo;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if (arguments[0] === undefined) {
    return 0; 
  }else
 
  var producto = 1;

  for (i = 0; i < arguments.length; i++) {
    producto *= arguments[i];
  }
  return producto;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var guardar = [];
  var cantidad = 0;

  for (var i = 0; i < arreglo.length; i++) {
     if (arreglo[i] > 18) {
       guardar.push(arreglo[i]);
     }
  } 
  
  cantidad = guardar.length
  return cantidad;

}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if (numeroDeDia === 1 || numeroDeDia === 7) {
    return "Es fin de semana";
  }else return "Es dia Laboral"
  
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var digitos = [];
  digitos = Array.from(String(n))

  if (digitos[0] === '9') {
    return true;
  }else return false;
  
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var resultado = 0;
  var suma = 0;
  var promedio = 0;

  for (var i = 0; i < arreglo.length; i++) {
    resultado = arreglo[i];
    suma += resultado;
    promedio = suma / arreglo.length;
  }

  if (arreglo[0] === promedio) {
   return true; 
  }else return false;
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var extraidos = [];

  for (var i = 0; i < array.length; i++) {
    if (array[i] === 'Marzo') {
      extraidos.push(array[i]);
    }
  }

  for (var i = 0; i < array.length; i++) {
    if (array[i] === 'Noviembre') {
      extraidos.push(array[i]);
    }
  }

  for (var i = 0; i < array.length; i++) {
    if (array[i] === 'Enero') {
      extraidos.push(array[i]);
    }
  }
  
  if (extraidos.length === 3) {
    return extraidos;
  }else return "No se encontraron los meses pedidos"
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var mayoresACien = [];

  for (var i = 0; i < array.length; i++) {
    if (array[i] > 100) {
      mayoresACien.push(array[i]);
    }
  }

  return mayoresACien;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:

  var suma = 0;
  var array = [];

  for (var i = 0; i < 10; i++) {
    suma = numero +((i + 1) * 2); 
    array.push(suma);
    if (suma === i) {
      return "Se interrumpió la ejecución";
    }
  }
  return array;

  // var i = 0;
  // var j = 0;
  // var suma = 0;
  // var arraySuma = [];

  // do {
  //  i = i + 1;
  //  j = i * 2;
  //  suma = numero + j;
  //  arraySuma.push(suma);
  //  if (suma === i) {
  //   return "Se interrumpió la ejecución";}
  //  }while (i < 10);

  // return arraySuma;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var suma = 0;
  var array = [];

  for (var i = 0; i < 9; i++) {
    suma = numero + ((i + 1)* 2); 
    array.push(suma);      
    }
    return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

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
  mayorACien,
  breakStatement,
  continueStatement
};
