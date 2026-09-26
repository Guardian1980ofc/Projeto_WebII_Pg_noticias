// ============================================================
// WEB NEWS - SCRIPT PRINCIPAL
// ============================================================

console.log('Script do Web News carregado!');

// ============================================================
// FUNCIONALIDADE 1: BOTÃO VOLTAR AO TOPO
// ============================================================

const btnTopo = document.getElementById('btn-topo');

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        btnTopo.classList.remove('hidden');
    } else {
        btnTopo.classList.add('hidden');
    }
});

btnTopo.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ============================================================
// FUNCIONALIDADE 2: RECOLHER/EXPANDIR SIDEBAR
// ============================================================

const sidebar = document.getElementById('sidebar');
const btnSidebarClose = document.getElementById('btn-sidebar-close');
const btnSidebarOpen = document.getElementById('btn-sidebar-open');

btnSidebarClose.addEventListener('click', () => {
    sidebar.classList.add('hidden');
    btnSidebarOpen.classList.remove('hidden');
});

btnSidebarOpen.addEventListener('click', () => {
    sidebar.classList.remove('hidden');
    btnSidebarOpen.classList.add('hidden');
});

// ============================================================
// FUNCIONALIDADE 3: MARCAR PÁGINA ATIVA NO MENU
// ============================================================
// Detecta em qual página o usuário está e destaca o link
// correspondente na sidebar automaticamente.
// ============================================================

// Pega todos os links do menu da sidebar
const menuLinks = document.querySelectorAll('#sidebar nav a');

// Pega o nome do arquivo atual (ex: "reviews.html")
// window.location.pathname retorna "/caminho/reviews.html"
// split('/') divide em partes
// pop() pega o último elemento (o nome do arquivo)
const paginaAtual = window.location.pathname.split('/').pop() || 'index.html';

// Classes que definem o link "ativo"
const classesAtivo = ['bg-blue-100', 'text-blue-950', 'font-bold'];

// Classes que definem o link "normal"
const classesNormal = ['text-blue-100', 'hover:bg-blue-900/60', 'hover:text-white'];

// Percorre cada link do menu
menuLinks.forEach(link => {

    // Pega o href do link (ex: "../reviews.html")
    const href = link.getAttribute('href');

    // Extrai só o nome do arquivo do href (ex: "reviews.html")
    const arquivoDoLink = href.split('/').pop();

    // Se o arquivo do link bate com a página atual...
    if (arquivoDoLink === paginaAtual) {

        // ...aplica as classes de ATIVO
        link.classList.add(...classesAtivo);

        // E remove as classes de normal
        link.classList.remove(...classesNormal);

    } else {

        // Se não bate, garante que ele tá no estado normal
        link.classList.remove(...classesAtivo);
        link.classList.add(...classesNormal);

    }
});

// ============================================================
// FUNCIONALIDADE 4: BUSCA FUNCIONAL
// ============================================================
// Filtra os cards da página conforme o usuário digita no campo
// de busca. Mostra só os que batem com o texto digitado.
// ============================================================

// Pega o campo de busca
const campoBusca = document.getElementById('campo-busca');

// Pega todos os cards que devem ser filtrados (têm data-card)
const cards = document.querySelectorAll('[data-card]');

// Cria o aviso de "nenhum resultado" (só se ainda não existir)
let semResultado = document.getElementById('sem-resultado');

if (campoBusca && cards.length > 0) {

    // Só cria o aviso se não existir no HTML
    if (!semResultado) {
        semResultado = document.createElement('p');
        semResultado.id = 'sem-resultado';
        semResultado.className = 'hidden text-center text-blue-300 py-8 text-lg';
        semResultado.textContent = 'Nenhum resultado encontrado.';
        
        // Insere o aviso depois do último card
        cards[cards.length - 1].parentElement.appendChild(semResultado);
    }

    // Escuta cada tecla digitada no campo de busca
    campoBusca.addEventListener('input', () => {

        // Texto digitado, em minúsculas (pra comparação não diferenciar maiúsculas)
        const texto = campoBusca.value.toLowerCase().trim();

        // Conta quantos cards ficaram visíveis
        let visiveis = 0;

        // Percorre cada card
        cards.forEach(card => {

            // Pega o texto do título dentro do card
            const titulo = card.querySelector('[data-titulo]');
            const textoTitulo = titulo ? titulo.textContent.toLowerCase() : '';

            // Verifica se o título contém o texto digitado
            if (textoTitulo.includes(texto)) {
                // Bateu: mostra o card
                card.classList.remove('hidden');
                visiveis++;
            } else {
                // Não bateu: esconde o card
                card.classList.add('hidden');
            }
        });

        // Mostra ou esconde o aviso de "nenhum resultado"
        if (visiveis === 0) {
            semResultado.classList.remove('hidden');
        } else {
            semResultado.classList.add('hidden');
        }
    });
}
