fetch('miembros.json')
  .then(response => response.json())
  .then(data => {
    const contenedor = document.getElementById('contenedorMiembros');

    data.miembros.forEach(miembro => {
      const div = document.createElement('div');
      div.className = 'item';

      div.innerHTML = `
        <img  src="https://firebasestorage.googleapis.com/v0/b/alfa-orion-2291d.firebasestorage.app/o/usuario-1.jpg?alt=media" 
          data-image-width="1335" data-image-height="2000"
          data-animation-name="flipIn" data-animation-duration="3000" data-animation-delay="0"
          data-animation-direction="X" style="will-change: transform; animation-duration: 500ms; height: 325px;
  width: 275px;">
        <h5>${miembro.nombreCompleto}</h5>
        <h6>${miembro.cargo}</h6>
      `;

      contenedor.appendChild(div);
    });
  })
  .catch(error => console.error('Error al cargar el JSON:', error));
