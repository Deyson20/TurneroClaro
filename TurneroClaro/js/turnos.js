document.addEventListener('DOMContentLoaded', () => {
    const turnoList = document.getElementById('queue-list');
    const turnos = JSON.parse(localStorage.getItem('turnos')) || [];

    turnos.forEach((turno, index) => {
        const li = document.createElement('li');
        li.textContent = `Turno ${index + 1}: ${turno.name}`;
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.style.marginRight = '10px';
        deleteButton.onclick = () => {
            eliminarTurno(index);
        };

        const callButton = document.createElement('button');
        callButton.textContent = 'Llamar turno';
        callButton.onclick = () => {
            llamarTurno(index + 1, turno.name);
        };

        li.appendChild(deleteButton);
        li.appendChild(callButton);
        turnoList.appendChild(li);
    });

    function eliminarTurno(index) {
        turnos.splice(index, 1);
        localStorage.setItem('turnos', JSON.stringify(turnos));
        location.reload(); // Recargar la página para actualizar la lista
    }

    function llamarTurno(turnNumber, name) {
        localStorage.setItem('turnoActual', JSON.stringify({ turnNumber, name })); // Guarda el turno actual en localStorage
        window.location.href = 'llamar.html'; // Redirige a la página de llamar turno
    }
});