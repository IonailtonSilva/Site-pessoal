// Efeito de rolagem suave para os links da navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - 100, // Compensa a altura da navbar
            behavior: 'smooth'
        });
    });
});

// Exemplo: Alerta de boas-vindas no console (opcional)
console.log("Portfólio de Engenharia carregado com sucesso!");