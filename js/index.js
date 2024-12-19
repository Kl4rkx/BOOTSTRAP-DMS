// Variables para los elementos del modal de login/registro
const myTab = document.getElementById('myTab');
const modalActionButton = document.getElementById('modalActionButton');
const loginTab = document.getElementById('login-tab');
const registerTab = document.getElementById('register-tab');

// Evento para cambiar el texto del botón de acción en el modal de login/registro
myTab.addEventListener('click', (event) => {
    const activeTab = event.target.id;
    if (activeTab === 'register-tab') {
        modalActionButton.textContent = 'Crear cuenta';
        loginTab.classList.add('text-danger');
        registerTab.classList.remove('text-danger');
    } else {
        modalActionButton.textContent = 'Iniciar sesión';
        registerTab.classList.add('text-danger');
        loginTab.classList.remove('text-danger');
    }
});

// Función para redirigir al dashboard
function redirectToDashboard(event) {
    event.preventDefault();
    window.location.href = 'dashboard.html';
}

// Contador de productos en el carrito
let cartCount = 0;

// Función para añadir productos al carrito
function addToCart(productName, productImage, productPrice) {
    cartCount++;
    document.getElementById('cart-count').textContent = cartCount;

    const cartItems = document.getElementById('cart-items');
    const cartItem = document.createElement('li');
    cartItem.className = 'list-group-item d-flex justify-content-between align-items-center';
    cartItem.innerHTML = `
        <div class="d-flex align-items-center">
            <img src="${productImage}" alt="${productName}" class="img-thumbnail" style="width: 50px; height: 50px; object-fit: cover;">
            <span class="ms-3">${productName}</span>
        </div>
        <span>${productPrice}</span>
        <button class="btn btn-danger btn-sm ms-3" onclick="removeFromCart(this)">
            <i class="fas fa-trash-alt"></i>
        </button>
    `;
    cartItems.appendChild(cartItem);
}

// Función para eliminar productos del carrito
function removeFromCart(button) {
    const cartItem = button.closest('li');
    cartItem.remove();
    cartCount--;
    document.getElementById('cart-count').textContent = cartCount;
}

// Función para proceder al pago y redirigir al dashboard
function proceedToCheckout() {
    window.location.href = 'dashboard.html';
}

// Añadir event listeners a los botones de "Comprar Vinilo" y "Comprar Entrada"
document.querySelectorAll('.btn-green').forEach(button => {
    button.onclick = (event) => {
        const card = event.target.closest('.card');
        const productName = card.querySelector('.card-title').textContent;
        const productImage = card.querySelector('img').src;
        const productPrice = card.querySelector('.card-text').textContent.includes('vinilo') ? '€20' : '€50'; // Ejemplo de precios
        addToCart(productName, productImage, productPrice);
    };
});