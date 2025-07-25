// LoveConf Main JavaScript - Simplified
document.addEventListener('DOMContentLoaded', function() {
    console.log('LoveConf website loaded successfully!');
    
    // Simple mobile menu toggle text
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNavMenu = document.querySelector('#mobileNavMenu');
    
    if (menuToggle && mobileNavMenu) {
        // Just toggle button text
        mobileNavMenu.addEventListener('shown.bs.collapse', function() {
            menuToggle.textContent = 'CLOSE';
        });
        
        mobileNavMenu.addEventListener('hidden.bs.collapse', function() {
            menuToggle.textContent = 'MENU';
        });
    }
    
    // Speakers slider drag functionality
    const sliderContent = document.querySelector('.speakers__slider');
    if (sliderContent) {
        let isDragging = false;
        let startX;
        let scrollStart;

        sliderContent.addEventListener('mousedown', (e) => {
            isDragging = true;
            sliderContent.classList.add('dragging');
            startX = e.pageX - sliderContent.offsetLeft;
            scrollStart = sliderContent.scrollLeft;
            sliderContent.style.cursor = 'grabbing';
            e.preventDefault(); // evita seleção de texto
        });

        sliderContent.addEventListener('mouseleave', () => {
            isDragging = false;
            sliderContent.classList.remove('dragging');
            sliderContent.style.cursor = 'grab';
        });

        sliderContent.addEventListener('mouseup', () => {
            isDragging = false;
            sliderContent.classList.remove('dragging');
            sliderContent.style.cursor = 'grab';
        });

        sliderContent.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            const x = e.pageX - sliderContent.offsetLeft;
            const walk = (x - startX) * 1.5; // fator de velocidade
            sliderContent.scrollLeft = scrollStart - walk;
        });

        // Define cursor padrão
        sliderContent.style.cursor = 'grab';
    }
    
});