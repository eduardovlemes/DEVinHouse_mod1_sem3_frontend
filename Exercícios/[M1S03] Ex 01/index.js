//Crie uma função não nomeada que recebe um número e devolva uma string dizendo se é par ou ímpar.

var descobrirSeEParOuImpar = function (numero) {
    if (numero % 2 == 0) {
      return "Par"
    } else if (numero % 2 == 1) {
      return "Ímpar"
    } else {
      return "Invalido"
    }
  }
  console.log(descobrirSeEParOuImpar(5))