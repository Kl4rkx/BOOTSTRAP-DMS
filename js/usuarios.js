document.addEventListener('DOMContentLoaded', function() {
    // Editar usuario
    document.querySelectorAll('.btn-warning-custom').forEach(button => {
        button.addEventListener('click', function() {
            const row = this.closest('tr');
            const userName = row.querySelector('td:nth-child(2)').textContent;
            const userEmail = row.querySelector('td:nth-child(3)').textContent;

            document.getElementById('editUserName').value = userName;
            document.getElementById('editUserEmail').value = userEmail;

            const editModal = new bootstrap.Modal(document.getElementById('editUserModal'));
            editModal.show();

            document.querySelector('#editUserModal .btn-primary').onclick = function() {
                row.querySelector('td:nth-child(2)').textContent = document.getElementById('editUserName').value;
                row.querySelector('td:nth-child(3)').textContent = document.getElementById('editUserEmail').value;
            };
        });
    });

    // Eliminar usuario
    document.querySelectorAll('.btn-danger-custom').forEach(button => {
        button.addEventListener('click', function() {
            const row = this.closest('tr');
            const deleteModal = new bootstrap.Modal(document.getElementById('deleteUserModal'));
            deleteModal.show();

            document.querySelector('#deleteUserModal .btn-danger').onclick = function() {
                row.remove();
            };
        });
    });

    // Activar/desactivar usuario
    document.querySelectorAll('.form-check-input-custom').forEach(toggle => {
        const row = toggle.closest('tr');

        function updateRowState() {
            if (toggle.checked) {
                row.classList.remove('deactivated');
                row.classList.add('table-success');
            } else {
                row.classList.remove('table-success');
                row.classList.add('deactivated');
            }
        }

        toggle.addEventListener('change', updateRowState);
        updateRowState();
    });
});