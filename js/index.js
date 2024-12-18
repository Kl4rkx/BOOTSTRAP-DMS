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