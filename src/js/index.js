const botaoAlterarTema = document.getElementById("botao-alterar-tema")

const body = document.querySelector("body")

console.log(body);

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {

    const modoescuroativo = body.classList.contains("modoescuro");

    body.classList.toggle("modoescuro")

    if (modoescuroativo) {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png")
    }
    else {

        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
    }
})






