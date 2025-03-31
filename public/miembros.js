let miembrosData;

fetch('miembros.json')
  .then(response => response.json())
  .then(data => {
    miembrosData = data;
    const contenedor = document.getElementById('contenedorMiembros');

    data.miembros.forEach((miembro, index) => {
      const div = document.createElement('div');
      div.className = 'col miembro-card';
      div.dataset.nombre = miembro.nombreCompleto.toLowerCase(); // Guardamos nombre en minúsculas
      div.dataset.id = miembro.cargo.toLowerCase(); // Guardamos ID para la búsqueda

      div.innerHTML = `
          <img  class="u-image animated flipInX image-card"
              src=${miembro.foto}
              alt="${miembro.nombreCompleto}" 
              data-image-width="1334" 
              data-image-height="2000" 
              style="height: 300px;width: 225px;will-change: transform;animation-duration: 3000ms; cursor: pointer" onclick="mostrarPopup(${index})">
          <a style="cursor: pointer;" onclick="mostrarPopup(${index})">
              <h5 style="margin-top: 5%; font-size: 16px;">${miembro.nombreCompleto}</h5>
              <h6 style="margin-bottom: 25px;">${miembro.cargo}</h6>

          </a>
      `;

      contenedor.appendChild(div);
    });
  })
  .catch(error => console.error('Error al cargar el JSON:', error));
function mostrarPopup(indice) {
  const miembro = miembrosData.miembros[indice];
  document.getElementById("popup-nombre").innerHTML = miembro.nombreCompleto;
  document.getElementById("popup-id").textContent = miembro.numeroDocumento;
  document.getElementById("popup-email").textContent = miembro.correoElectronico;
  document.getElementById("popup-telefono").textContent = miembro.numeroCelular|| "No refiere";
  document.getElementById("popup-emergencia").textContent = miembro.numeroEmergencia || "No refiere";
  document.getElementById("popup-eps").textContent = miembro.eps;
  document.getElementById("popup-alergias").textContent = miembro.alergia;
  document.getElementById("popup-medicamentos").textContent = miembro.medicamento || "No";
  document.getElementById("popup-sangre").textContent = miembro.tipoSangre;
  document.getElementById("popup-foto").src = miembro.foto;

  document.getElementById("popupFondo").style.display = "block";
}

function cerrarPopup() {
  document.getElementById("popupFondo").style.display = "none";
}

function filtrarMiembros() {
  const filtro = document.getElementById('buscador').value.toLowerCase();
  const miembros = document.querySelectorAll('.miembro-card');

  miembros.forEach(miembro => {
      const nombre = miembro.dataset.nombre;
      const id = miembro.dataset.id;
      
      // Mostrar u ocultar el miembro si coincide con la búsqueda
      if (nombre.includes(filtro) || id.includes(filtro)) {
          miembro.style.display = "block";
      } else {
          miembro.style.display = "none";
      }
  });
}

