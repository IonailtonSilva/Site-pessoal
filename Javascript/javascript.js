/* ===================================================== */
/* 🔹 INTERATIVIDADE E NAVEGAÇÃO */
/* ===================================================== */

// Efeito de rolagem suave para os links da navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Previne o comportamento padrão (pulo brusco)
        e.preventDefault();

        // Obtém o destino através do ID no href
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // 🔧 VERIFICAÇÃO DE SEGURANÇA: Só executa se o elemento de destino existir
        if (targetElement) {
            window.scrollTo({
                // Calcula a posição do elemento menos o recuo da navbar fixa
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });

            // Opcional: Fecha o menu mobile automaticamente após clicar (se estiver usando menu hambúrguer)
            const navLinks = document.querySelector('#navbar ul');
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        }
    });
});

// Log de monitoramento técnico (Bom para debug no navegador)
console.log("Sistema de navegação Rowtork Engenharia: OK");