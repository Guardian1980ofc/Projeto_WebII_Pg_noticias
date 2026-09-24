// ============================================================
// EFEITO DE ZOOM NOS CARDS DE NOTÍCIA
// Quando o mouse passa sobre o card, a imagem dá um zoom suave.
// Quando sai, volta ao normal.
// ============================================================

// 1. Pega todos os cards da página
const cards = document.querySelectorAll('.card-noticia');

// 2. Pra cada card, adiciona os eventos de mouse
cards.forEach(card => {

    // Pega a imagem dentro deste card específico
    const imagem = card.querySelector('.card-imagem');

    // Quando o mouse ENTRA no card
    card.addEventListener('mouseenter', () => {
        imagem.classList.add('scale-110');   // dá zoom na imagem
    });

    // Quando o mouse SAI do card
    card.addEventListener('mouseleave', () => {
        imagem.classList.remove('scale-110'); // tira o zoom
    });

});