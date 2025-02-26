document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    });

    fadeElements.forEach(el => observer.observe(el));
});

function mostrarDetalhes(id) {
    const detalhes = document.querySelectorAll('.detalhes');
    detalhes.forEach(detalhe => {
        if (detalhe.id === id) {
            detalhe.style.display = detalhe.style.display === 'block' ? 'none' : 'block';
        } else {
            detalhe.style.display = 'none';
        }
    });
}