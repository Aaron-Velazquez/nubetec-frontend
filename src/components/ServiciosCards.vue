<template>
    <div class="servicios">
      <h3>Explora nuestros servicios</h3>
      <p>Servicios integrales para potenciar tu crecimiento.</p>
  
      <div class="servicios-cards">
        <!-- Tarjeta 1 -->
        <div 
          class="servicio-feature selected"
          @click="seleccionar(1)"
        >
          <figure>
            <img src="/img/fotogrametria.webp" alt="Icono de planta" />
          </figure>
          <h4>Servicios de Fotogrametría</h4>
          <p>Brindamos información valiosa para optimizar el manejo de cultivos y recursos.</p>
          <a href="/servicios#fotogrametria">Más información</a>
        </div>
  
        <!-- Tarjeta 2 (Pulverización) con tooltip controlado por localStorage -->
        <div 
          class="servicio-feature"
          @click="seleccionar(2)"
        >
          <figure>
            <img src="/img/pulverizacion.webp" alt="Dron pulverizando" />
          </figure>
          <h4>Servicios de Pulverización</h4>
          <p>Optimiza las aplicaciones en Agricultura para control de plagas, enfermedades, malezas, tratamientos específicos y fertilización.</p>
  
          <!-- Tooltip: se muestra si showIconPulverizacion es true -->
          <span 
            v-if="showIconPulverizacion" 
            class="tooltip-dialog"
          >
            Selecciona para obtener más información
          </span>
  
          <a href="/servicios#pulverizacion">Más información</a>
        </div>
      </div>
    </div>
  
    <!-- Sección que muestra el detalle del servicio seleccionado -->
    <div class="curva-de-nivel">
      <figure>
        <img :src="selected.imagen" alt="Manos plantando" />
      </figure>
      <div class="curva-text">
        <h3>{{ selected.titulo }}</h3>
        <p>{{ selected.parrafo }}</p>
        <a :href="selected.link">Más información</a>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  // Lista reactiva de servicios
  const servicios = ref([]);
  
  // Servicio seleccionado por defecto
  const selected = ref({
    id: 1,
    titulo: 'Servicios de Fotogrametría',
    parrafo: 'Nuestros expertos analizan imágenes multiespectrales y RGB para proporcionar información detallada sobre su cultivo y así evaluar, planificar y optimizar el trabajo y producción.',
    imagen: '/img/servicio_fotogrametria.webp',
    link: '/servicios#fotogrametria'
  });
  
  // Variable para mostrar/ocultar el tooltip de la segunda tarjeta
  const showIconPulverizacion = ref(true);
  
  // Función para cargar datos (si tienes un archivo data/Servicios.json)
  const info = async () => {
    try {
      const response = await fetch('data/Servicios.json');
      if (response.ok) {
        const data = await response.json();
        servicios.value = data.servicios;
      } else {
        console.error('404: No se encontró el archivo.');
      }
    } catch (error) {
      console.error('Error al cargar los datos: ', error);
    }
  };
  
  // Función para gestionar la selección de un servicio
  const seleccionar = (id) => {
    selected.value = servicios.value.find(serv => serv.id === id) || null;
  
    // Resalta la tarjeta seleccionada
    const items = document.querySelectorAll('.servicio-feature');
    let sw = 0, c = 0;
    items.forEach((item) => {
      if ((id === 1 && c === 0) || (id === 2 && c === 1) || (id === 3 && c === 2)) {
        if (sw === 0) {
          items[c].classList.add('selected');
          sw = 1;
        }
      } else {
        item.classList.remove('selected');
      }
      c++;
    });
  
    // Si el usuario hace clic en la segunda tarjeta, oculta el tooltip y guarda la preferencia
    if (id === 2) {
      showIconPulverizacion.value = false;
      localStorage.setItem('tooltipHidePulverizacion', 'true');
    }
  };
  
  onMounted(() => {
    // Carga los servicios (opcional)
    info();
    
    // Verifica si el usuario ya ocultó el tooltip antes
    const hideTooltip = localStorage.getItem('tooltipHidePulverizacion');
    // Si existe y es 'true', deshabilita el tooltip
    if (hideTooltip === 'true') {
      showIconPulverizacion.value = false;
    }
  });
  </script>
  
  <style scoped>
  .servicios {
    width: 75vw;
    margin: 5vh auto;
    padding: 20px;
    color: var(--dark-green);
  }
  
  .servicios h3 {
    font-size: 2.3rem;
    margin-bottom: 10px;
  }
  
  .servicios > p {
    font-size: 18px;
    margin-bottom: 30px;
  }
  
  /* Contenedor de tarjetas */
  .servicios-cards {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  
  /* Estilo base de cada tarjeta */
  .servicio-feature {
    background-color: #c5e1a5;
    border-radius: 10px;
    padding: 20px;
    width: 30%;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    transition: background-color 0.3s ease, color 0.3s ease;
    position: relative; /* Necesario para posicionar el tooltip */
  }
  
  .servicio-feature a {
    display: none;
  }
  
  .servicio-feature:hover {
    cursor: pointer;
  }
  
  /* Tarjeta seleccionada */
  .selected {
    background-color: var(--dark-green);
    color: white;
    box-shadow: 2px 2px 2px #779688;
  }
  
  /* Tooltip de la segunda tarjeta */
  .tooltip-dialog {
    position: absolute;
    bottom: 10px;
    right: 10px;
    background-color: #fff;
    color: #1c1c1c;
    font-size: 0.85rem;
    padding: 6px 10px;
    border-radius: 4px;
    white-space: nowrap;
    box-shadow: 0 2px 4px rgba(0,0,0,0.5);
    transform: translateX(100px) translateY(-250px);
  }
  
  /* Imagen y figura */
  .servicio-feature figure {
    background-color: var(--strong-yellow);
    border-radius: 50%;
    width: 80px;
    height: 80px;
    margin: 1.5vh 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .servicio-feature img {
    width: 50px;
    height: 50px;
  }
  
  .servicio-feature h4 {
    font-size: 18px;
    margin-bottom: 10px;
  }
  
  .servicio-feature p {
    font-size: 14px;
  }
  
  /* Sección de detalle (curva-de-nivel) */
  .curva-de-nivel {
    display: flex;
    align-items: center;
    max-width: 80vw;
    border: #ddd 1px solid;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
  
  .curva-de-nivel figure {
    flex: 1;
    margin: 0;
    height: 300px;
  }
  
  .curva-de-nivel img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .curva-text {
    flex: 1;
    padding: 30px;
  }
  
  .curva-text h3 {
    color: var(--dark-green);
    font-size: 28px;
    margin-bottom: 15px;
  }
  
  .curva-text p {
    color: #333;
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 20px;
  }
  
  .curva-text a {
    display: inline-block;
    background-color: var(--strong-yellow);
    color: white;
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-weight: 500;
    transition: background-color 0.3s ease;
  }
  
  .curva-text a:hover {
    background-color: #ff8c00;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    .servicios {
      /* Ajusta el ancho para tablets */
      width: 85vw;
    }
  
    .servicios h3 {
      font-size: 2rem;
    }
  
    .servicios > p {
      font-size: 1rem;
      margin-bottom: 20px;
    }
  
    /* Mantén un diseño con dos columnas para que no quede tan apilado */
    .servicios-cards {
      display: flex;
      flex-wrap: wrap;        /* Permite que las tarjetas se ajusten */
      justify-content: center;
      gap: 20px;
    }
  
    .servicio-feature {
      width: 45%;             /* Dos tarjetas por fila en tablets */
      margin: 0 auto;
    }
  
    .servicio-feature figure {
      position: static;       /* Quitamos posición absoluta en tablets */
      transform: none;        /* Sin transform para que quede normal */
      margin: 1rem 0;         /* Ajuste de espacio */
      width: 70px;            /* Ajusta tamaño del contenedor de la imagen */
      height: 70px;
    }
  
    .servicio-feature img {
      width: 40px;
      height: 40px;
    }
  
    /* Ajustes para la sección de detalle */
    .curva-de-nivel {
      display: flex;
      flex-direction: row;
      max-width: 90vw;
      margin: 0 auto;
    }
    .curva-text {
      padding: 20px;
    }
  
    .curva-text h3 {
      font-size: 24px;
    }
  }
  
  /* Responsive */
  @media screen and (max-width: 786px) {
    .servicios {
      width: 90vw;
    }
  
    .servicios h3 {
      font-size: 1.8rem;
    }
  
    .servicios > p {
      font-size: 0.95rem;
    }
  
    .servicios-cards {
      margin: 10vh 0;
      gap: 10vh;
      align-items: center;
      flex-direction: column;
    }
  
    .servicios-cards div:first-child {
      height: 17rem;
    }
  
    .servicio-feature {
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 17rem;
      height: 19rem;
    }
  
    .servicio-feature a {
      display: block;
      color: #fff;
      padding: 10px;
      width: 11rem;
      margin: 2vh auto;
      background: var(--strong-yellow);
      border-radius: 6px;
      font-weight: 600;
    }
  
    .servicio-feature figure {
      position: absolute;
      transform: translateY(-160px) translateX(77px);
    }
  
    .servicios-cards div:first-child figure {
      transform: translateY(-140px) translateX(77px);
    }
  
    .curva-de-nivel {
      display: none; /* Ocultar en móvil si prefieres */
    }
  }
  </style>
  