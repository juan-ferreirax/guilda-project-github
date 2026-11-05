let contador = 0;

document.getElementById('meuBotao').addEventListener('click', function() {
    contador++;
    const mensagem = document.getElementById('mensagem');
    mensagem.textContent = `Botão clicado ${contador} vez(es). Funcionalidade adicionada com sucesso!`;
    mensagem.style.color = '#a6e3a1';
});