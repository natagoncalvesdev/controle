// Função para carregar a sidebar em todas as páginas
function carregarSidebar() {
  // Determina qual página está ativa baseado na URL
  const paginaAtual = window.location.pathname.split('/').pop() || 'index.html';
  
  // HTML da sidebar
  const sidebarHTML = `
    <aside class="sidebar">
      <h1>💰 Controle</h1>

      <div class="mobile-nav">
        <button class="mobile-nav-toggle" onclick="toggleMobileMenu()">☰ Menu</button>
        <div class="mobile-nav-menu" id="mobileNavMenu">
          <a href="index.html">Home</a>
          <a href="financeiro.html">Financeiro</a>
          <a href="veiculos.html">Veículos</a>
          <a href="relatorio.html">Relatório</a>
        </div>
      </div>
      
      <div class="desktop-nav">     
        <a href="index.html" class="btn-sidebar ${paginaAtual === 'index.html' ? 'active' : ''}" style="text-align: center;">Home</a>
        <a href="financeiro.html" class="btn-sidebar ${paginaAtual === 'financeiro.html' ? 'active' : ''}" style="text-align: center;">Financeiro</a>
        <a href="relatorio.html" class="btn-sidebar ${paginaAtual === 'relatorio.html' ? 'active' : ''}" style="text-align: center;">Relatório</a>
        <a href="veiculos.html" class="btn-sidebar ${paginaAtual === 'veiculos.html' ? 'active' : ''}" style="text-align: center;">Veículos</a>
      </div>
    </aside>
  `;

  // Insere a sidebar no início do body
  document.body.insertAdjacentHTML('afterbegin', sidebarHTML);
}

// Função para toggle do menu mobile (se não existir)
if (typeof toggleMobileMenu === 'undefined') {
  window.toggleMobileMenu = function() {
    const menu = document.getElementById('mobileNavMenu');
    if (menu) {
      menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    }
  };
}

// Carrega a sidebar quando o DOM estiver pronto
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', carregarSidebar);
} else {
  carregarSidebar();
}

