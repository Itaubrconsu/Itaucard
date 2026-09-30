function mostrarAcao(acao) {

    const mensagem =
        document.getElementById("actionMessage");

    mensagem.textContent =
        "✓ " + acao +
        " — opção selecionada saldo devendo Pix não liberado.";

    mensagem.style.display = "block";


    // Remove a mensagem depois de alguns segundos
    clearTimeout(window.mensagemTimer);

    window.mensagemTimer = setTimeout(() => {

        mensagem.style.display = "none";

    }, 3000);
}
