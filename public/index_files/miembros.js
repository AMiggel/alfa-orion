fetch('miembros.json')
  .then(response => response.json())
  .then(data => {
    const contenedor = document.getElementById('contenedorNombres');

    data.miembros.forEach(miembro => {
      // Selecciona el div contenedor existente
      const div = document.createElement('div');
      
      div.innerHTML = `
        <div class="u-container-layout u-similar-container u-valign-bottom u-container-layout-1">
          <h3 class="u-text u-text-default u-text-2 animated customAnimationIn-played" 
              data-animation-direction="Down" 
              data-animation-name="customAnimationIn" 
              data-animation-duration="1500" 
              data-animation-delay="1250" 
              style="will-change: transform, opacity; animation-duration: 1500ms;">
            &nbsp;${miembro.nombreCompleto}
          </h3>
        </div>`;
      
      contenedor.appendChild(div);
    });
  })
  .catch(error => console.error('Error al cargar el JSON:', error));
