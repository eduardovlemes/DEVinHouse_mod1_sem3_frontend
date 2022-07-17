//Faça um site com uma lista de itens (por exemplo, de brinquedos), que tenha: um campo de input do item um botão para criar um item na lista
function adicionar(){
    const input = document.getElementById('meu-input')
    const divPai = document.getElementById('divPai')
    divPai.innerHTML=(input.value)
}