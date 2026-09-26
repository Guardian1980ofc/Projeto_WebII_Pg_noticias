// ============================================================
// WEB NEWS - SCRIPT PRINCIPAL
// ============================================================

console.log('Script do Web News carregado!');

// ============================================================
// FUNCIONALIDADE 1: BOTÃO VOLTAR AO TOPO
// ============================================================
// Um botão flutuante que aparece quando o usuário rola a página
// pra baixo e volta suavemente ao topo quando clicado.
// ============================================================

// Pega o botão pelo ID
const btnTopo = document.getElementById('btn-topo');

// Escuta o evento de "scroll" da página
window.addEventListener('scroll', () => {

    // Se o usuário rolou mais de 400px pra baixo...
    if (window.scrollY > 400) {
        // Mostra o botão (remove a classe 'hidden')
        btnTopo.classList.remove('hidden');
    } else {
        // Esconde o botão (adiciona a classe 'hidden' de volta)
        btnTopo.classList.add('hidden');
    }
});

// Escuta o clique no botão
btnTopo.addEventListener('click', () => {

    // Rola suavemente até o topo da página
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});