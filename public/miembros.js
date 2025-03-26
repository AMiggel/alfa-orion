fetch('miembros.json')
  .then(response => response.json())
  .then(data => {
    const contenedor = document.getElementById('contenedorMiembros');

    data.miembros.forEach(miembro => {
      const div = document.createElement('div');
      div.className = 'col';

      div.innerHTML = `
     
                        <img class="u-image animated flipInX image-card"
                            src="https://firebasestorage.googleapis.com/v0/b/alfa-orion-2291d.firebasestorage.app/o/usuario-1.jpg?alt=media"
                            alt="" data-image-width="1334" data-image-height="2000" data-animation-name="flipIn"
                            data-animation-duration="3000" data-animation-delay="0" data-animation-direction="X"
                            style="height: 300px;width: 225px;will-change: transform;animation-duration: 3000ms;">
                        <a onclick="mostrarPopup()">
                            <h5 u-align-center u-text u-text-default u-text-5 style="margin: 15px 30px 40px; font-size: 16px;">${miembro.nombreCompleto}</h5>
       
      `;

      contenedor.appendChild(div);
    });
  })
  .catch(error => console.error('Error al cargar el JSON:', error));
