
function addTask() {
  const list = document.getElementById('ListInProgress');
  const newelement = document.createElement('li');
  newelement.className = 'tarea in-progress'
  newelement.textContent = 'Ejemplo';
  list.appendChild(newelement);
}

function openModal() {
  var modal = document.getElementById("myModal");

  var btn = document.getElementById("modalbutton");

  var btnclose = document.getElementById("closeModal");

  var span = document.getElementsByClassName("close")[0];

  //Muestra el dialogo para añadir tareas
  modal.style.display = "block";
  

  // Cierra la ventan al pulsar el aspa
  span.onclick = function () {
    modal.style.display = "none";
  }

  // Cierra la ventana al pulsar fuera del dialogo
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  //Cierra la ventana al pulsar el boton de cancelar
  btnclose.onclick = function(){
    modal.style.display = "none";
  }
}

//Este metodo actualiza los controladores cuando se carga la página puesto que
// hay un solapamiento entre estos

