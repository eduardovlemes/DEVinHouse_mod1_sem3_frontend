

function criarDivsComTextos (lista = []) {
    const divTexto = document.getElementById('textos')
    for (var elemento of lista) {
        const texto = document.createElement('div')
        texto.innerHTML = elemento
        divTexto.append(texto)
    }
}
criarDivsComTextos(['texto1, texto2, texto3, texto4, texto5'])