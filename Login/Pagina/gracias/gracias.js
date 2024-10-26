document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.querySelector('.message').classList.add('show');
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }, 500);
});

// Función para crear más confeti cada cierto tiempo
function createConfettiInterval() {
    return setInterval(() => {
        confetti({
            particleCount: 50,
            spread: 45,
            origin: { y: 0.6 }
        });
    }, 3000);
}

// Iniciar el intervalo de confeti
let confettiInterval = createConfettiInterval();

// Detener el confeti cuando la pestaña no esté visible
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        clearInterval(confettiInterval);
    } else {
        confettiInterval = createConfettiInterval();
    }
});