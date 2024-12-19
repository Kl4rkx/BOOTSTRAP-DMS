const myTab = document.getElementById('myTab');
const modalActionButton = document.getElementById('modalActionButton');
const loginTab = document.getElementById('login-tab');
const registerTab = document.getElementById('register-tab');

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

function redirectToDashboard(event) {
    event.preventDefault();
    window.location.href = 'dashboard.html';
}

let cartCount = 0;

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
    `;
    cartItems.appendChild(cartItem);
}

// Asegurarse de que no se añadan múltiples event listeners
document.querySelectorAll('.btn-green').forEach(button => {
    button.onclick = (event) => {
        const card = event.target.closest('.card');
        const productName = card.querySelector('.card-title').textContent;
        const productImage = card.querySelector('img').src;
        const productPrice = card.querySelector('.card-text').textContent.includes('vinilo') ? '€20' : '€50'; // Ejemplo de precios
        addToCart(productName, productImage, productPrice);
    };
});