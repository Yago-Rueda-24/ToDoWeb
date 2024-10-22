// Obtener el botón por su ID
const boton = document.getElementById('add');
// Añadimos un evento de clic al botón
boton.addEventListener('click', function() {
    const list =document.getElementById('ListInProgress');
    const newelement= document.createElement('li');
    newelement.textContent= 'Ejemplo';
    list.appendChild(newelement);
    
});