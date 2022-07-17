//Crie uma função que recebe um array de números e retorna a quantidade de números pares e a quantidade de números ímpares.Em seguida imprima na tela uma string informando a quantidade de valores informados, os ímpares e os pares.(ex: A quantidade informada foi _____, a de valores pares foi ___, e a de valores ímpares foi __).

var lista = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function contarParImpar(lista = []) {
  var listaTamanho = lista.length;
  var contadorPar = 0;
  var contadorImpar = 0;
  var invalido = 0;
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] % 2 == 0) {
      contadorPar++;
    } else if (lista[i] % 2 == 1) {
      contadorImpar++;
    } else {
      invalido++;
    }
  }
  return [contadorPar, contadorImpar, listaTamanho];
}
var par = contarParImpar(lista)[0];
var impar = contarParImpar(lista)[1];
var listaqtt = contarParImpar(lista)[2];

console.log(`A quantidade total de números informados foram ${listaqtt}, dos quais ${par} são números pares e ${impar} são números ímpares`);