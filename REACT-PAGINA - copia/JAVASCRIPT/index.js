document.getElementById("activarSonido").addEventListener("click", function() {
    let video = document.getElementById("video-main");
    let boton = this;
    
    // Alternar el estado de mute
    video.muted = !video.muted;
    
    // Alternar la clase para el efecto visual
    boton.classList.toggle("sonido-activo");
    
    // Crear múltiples ondas cuando se activa el sonido
    if (!video.muted) {
        // Limpiar ondas anteriores
        let oldWaves = document.querySelectorAll('.onda');
        oldWaves.forEach(wave => wave.remove());
        
        // Crear 3 ondas con retrasos diferentes
        for (let i = 1; i <= 3; i++) {
            let wave = document.createElement("span");
            wave.className = 'onda';
            wave.style.animationDelay = `${i * 0.3}s`;
            boton.appendChild(wave);
            
            // Eliminar la onda después de la animación
            wave.addEventListener('animationend', function() {
                wave.remove();
            });
        }
    }
});

// Estilo adicional para las ondas dinámicas
const style = document.createElement('style');
style.textContent = `
    .onda {
        position: absolute;
        width: 100%;
        height: 100%;
        border: 2px solid yellow;
        border-radius: 50%;
        animation: onda 1.5s linear forwards;
        opacity: 0;
        box-sizing: border-box;
        pointer-events: none;
    }
`;
document.head.appendChild(style);