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