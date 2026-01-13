const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');

// Abre e fecha o menu ao clicar nas 3 linhas
menu.addEventListener('click', function() {
    menuLinks.classList.toggle('active');
});

// Fecha o menu automaticamente ao clicar em um link (Sobre, Projetos, etc)
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        menuLinks.classList.remove('active');
    });
});