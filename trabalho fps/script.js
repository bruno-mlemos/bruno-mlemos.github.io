document.addEventListener("DOMContentLoaded", function() {
    const botao = document.getElementById("botaoMensagem");
    const areaMensagem = document.getElementById("areaMensagem");

    if (botao) {
        botao.style.display = "block";
        botao.style.margin = "32px auto";
    }
    if (areaMensagem) {
        areaMensagem.style.textAlign = "center";
        areaMensagem.style.margin = "24px auto";
        areaMensagem.style.fontWeight = "bold";
        areaMensagem.style.fontSize = "20px";
        areaMensagem.style.maxWidth = "500px";
    }
    if (botao && areaMensagem) {
        botao.addEventListener("click", function() {
            areaMensagem.textContent = "prazer em te conhecer! :)";
        });
    }
});