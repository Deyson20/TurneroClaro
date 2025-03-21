document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('turn-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;

        if (name) {
            guardarTurno(name);
            form.reset();
        }
    });

    function guardarTurno(name) {
        const turnos = JSON.parse(localStorage.getItem('turnos')) || [];
        turnos.push({ name });
        localStorage.setItem('turnos', JSON.stringify(turnos));
    }
});