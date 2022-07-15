//Crie uma função nomeada que recebe um array de elementos, imprima cada um dos elementos e em seguida retorne a quantidade de elementos no array (seu tamanho).


function imprimirElementosDoArray( array = []) {
    for (let posiçãoDoElemento of array) {
      console.log(posiçãoDoElemento)
    }
    let quantidadeElementos = `Temos no total ${array.length} neste array.`
    return quantidadeElementos
  }
  console.log(imprimirElementosDoArray(["DEVinHouse", "SENAI", "Clamed", "HTML", "CSS", "JS"]))