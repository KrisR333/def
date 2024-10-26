document.addEventListener('DOMContentLoaded', function() {
    const InicioSesionBtnlink = document.querySelector('.InicioSesionBtn-link');
    const RegistroBtnlink = document.querySelector('.RegistroBtn-link');
    const superficie = document.querySelector('.superficie');
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('error-message');

    RegistroBtnlink.addEventListener('click', () => {
        superficie.classList.toggle('active');
    });

    InicioSesionBtnlink.addEventListener('click', () => {
        superficie.classList.toggle('active');
    });

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'admin' && password === 'admin') {
            // Redirigir a la página deseada solo si las credenciales son correctas
            window.location.href = 'Pagina/Pagina.html';
        } else {
            // Mostrar mensaje de error y no redirigir
            errorMessage.textContent = 'Usuario o contraseña incorrectos';
            // Limpiar los campos de entrada
            document.getElementById('username').value = '';
            document.getElementById('password').value = '';
        }
    });
});