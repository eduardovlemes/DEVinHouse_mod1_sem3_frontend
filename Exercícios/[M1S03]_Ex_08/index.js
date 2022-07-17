//Crie um site com os seguintes requisitos:
//1) um campo de texto (input) onde o usuário irá digitar uma mensagem
//2) três botões:
//  - um botão “adicionar”, que no momento do clique insira a mensagem na tela
//
//  - um botão “salvar mensagem”, que no momento do clique salve as informações no localStorage
//Opcional: se o texto estiver vazio (length), deve mostrar uma mensagem ao usuário solicitando a inserção de algum texto.
//  - um botão “mostrar mensagem”, que após o recarregamento da página, no momento do clique busque a mensagem no localStorage e exiba na tela
//Opcional: se não houver mensagem cadastrada no localStorage, deve mostrará na tela: “não há ítens salvos”.

// Function para imprimir mensagem
function adicionar () {
    const input = document.getElementById("meu-input");
    const divPai = document.getElementById("pai");
    divPai.innerHTML = (input.value);
}

// Botao para salvar msg
const botao2 = document.getElementById("botao-salvar"); 
botao2.addEventListener("click", function() {
    const input = document.getElementById("meu-input");
    localStorage.setItem("mensagem", JSON.stringify(input.value))
  })

// Botao mostrar msg
function mostrar () {
    const input = document.getElementById("meu-input");
    const divPai = document.getElementById("pai");
    const texto = localStorage.getItem("mensagem");
    divPai.innerHTML = JSON.parse(texto);
}