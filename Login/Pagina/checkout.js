document.addEventListener('DOMContentLoaded', function() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    const payButton = document.getElementById('pay-button');
    const shippingForm = document.getElementById('shipping-info-form');

    function loadCartItems() {
        let cartItems = JSON.parse(localStorage.getItem('carrito')) || [];
        let total = 0;

        cartItemsContainer.innerHTML = '';

        if (cartItems.length === 0) {
            cartItemsContainer.innerHTML = '<p>No hay productos en el carrito.</p>';
        } else {
            cartItems.forEach(item => {
                const itemElement = document.createElement('div');
                itemElement.className = 'cart-item';
                itemElement.innerHTML = `
                    <img src="${item.imagen}" alt="${item.titulo}">
                    <div class="item-details">
                        <h3>${item.titulo}</h3>
                        <p>Precio: ${item.Precio}</p>
                    </div>
                `;
                cartItemsContainer.appendChild(itemElement);

                total += parseFloat(item.Precio.replace('$', ''));
            });
        }

        cartTotalElement.textContent = `$${total.toFixed(2)}`;
    }

    loadCartItems();

    const errorMessage = document.createElement('div');
    errorMessage.id = 'error-message';
    errorMessage.style.color = 'red';
    errorMessage.style.marginTop = '10px';
    payButton.parentNode.insertBefore(errorMessage, payButton.nextSibling);

    payButton.addEventListener('click', function(event) {
        event.preventDefault();
        console.log('Botón de pago clickeado');

        let cartItems = JSON.parse(localStorage.getItem('carrito')) || [];
        if (cartItems.length === 0) {
            errorMessage.textContent = 'El carrito está vacío. Agrega productos antes de proceder al pago.';
            console.log('Carrito vacío');
            return;
        }

        if (!shippingForm.checkValidity()) {
            errorMessage.textContent = 'Por favor, completa todos los campos del formulario de envío.';
            console.log('Formulario de envío inválido');
            return;
        }

        document.getElementById('pay-button').addEventListener('click', function(event) {
            event.preventDefault(); // Previene el comportamiento predeterminado del enlace
            window.location.href = '/Login/Pagina/gracias/grax.html';
        });