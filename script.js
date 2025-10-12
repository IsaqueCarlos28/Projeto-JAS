// Variável global para rastrear o slide atual
let currentSlide = 0; 

// Total de slides que você tem (15 slides)
const totalSlides = 15; 

// Pega o elemento container dos slides
const slidesContainer = document.getElementById('slides-container');

function updateSlidePosition() {
    // Calcula o quanto o container deve ser movido. 
    // Por exemplo, para o slide 1 (índice 0), move 0%.
    // Para o slide 2 (índice 1), move 100% / 15 * 1 = 6.666%
    const offset = currentSlide * (100 / totalSlides);
    
    // Aplica a transformação de movimento (translação)
    slidesContainer.style.transform = `translateX(-${offset}%)`;
}

function nextSlide() {
    // Se não estiver no último slide, avança
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
    } else {
        // Volta para o primeiro slide (Loop)
        currentSlide = 0; 
    }
    updateSlidePosition();
}

function prevSlide() {
    // Se não estiver no primeiro slide, recua
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        // Vai para o último slide (Loop)
        currentSlide = totalSlides - 1; 
    }
    updateSlidePosition();
}

// Opcional: Adicionar navegação por teclado (setas)
document.addEventListener('keydown', function(event) {
    if (event.key === "ArrowRight") {
        nextSlide();
    } else if (event.key === "ArrowLeft") {
        prevSlide();
    }
});