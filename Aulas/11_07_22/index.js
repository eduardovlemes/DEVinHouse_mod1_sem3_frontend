function cumprimentar() {
  console.log("oi");
}
cumprimentar();

function soma() {
  console.log(a + b);
}
soma(1, 2);

// Exercício 1 - alunos
var informarParImpar = function (num1) {
  if (num1 % 2 == 0) {
    return "Par";
  } else if (num1 % 2 == 1) {
    return "Ímpar";
  } else {
    return "Invalido";
  }
};
console.log(informarParImpar());



// Exercício 2 -  alunos
function imprimeElementosDaLista(lista = []) {
  for (let item of lista) {
    console.log(item);
  }
  let quantidade = "A quantidade de elementos da lista são " + lista.length;
  return quantidade;
}
console.log(imprimeElementosDaLista(["oi", "turu", "bom"]));
