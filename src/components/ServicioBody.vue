<script setup>

import { onMounted, ref, onUnmounted } from 'vue';
import Swiper from 'swiper';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { gsap } from 'gsap';  
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Referencias a los elementos DOM
const caracteristicas = ref(null);
const dronCaracteristicas = ref(null);
const beneficios = ref(null);
const dronBeneficios = ref(null);

const servicios = [
  {
    titulo: 'Carta de Imagen',
    descripcion: 'Mapa digital que muestra todas las instalaciones y recursos de tu establecimiento.',
    imagen: 'img/carta-de-imagen.webp'
  },
  {
    titulo: 'Altimetría',
    descripcion: 'Análisis de elevaciones y desniveles del terreno para optimizar el manejo del agua.',
    imagen: 'img/mapa-de-condicion.svg'
  },
  {
    titulo: 'Mapa de Condición',
    descripcion: 'Mapa digital que muestra todas las instalaciones y recursos de tu establecimiento.',
    imagen: 'img/animetria.svg'
  },
  {
    titulo: 'Carta de Imagen',
    descripcion: 'Mapa digital que muestra todas las instalaciones y recursos de tu establecimiento.',
    imagen: 'img/altimetria.svg'
  },
];

let tl = null;

onMounted(() => {

  tl = gsap.timeline({
    scrollTrigger: {
      trigger: caracteristicas.value,
      start: 'top 50%',
      end: 'bottom top',
      scrub: true, // Sincroniza la animación con el scroll
      markers: false,
    },
  });

  // 1. Desvanecer la sección de características
  tl.to(caracteristicas.value, {
    opacity: 0, 
    duration: 2,
    ease: 'power2.out',
  }, 1);

  // 2. Desplazar el dron hacia la izquierda
  tl.from(dronCaracteristicas.value, {
    x: 100,
    opacity: 0,
    duration: 1,
    ease: 'power2.out',
  }, 0); 

  // 3. Aparecer la sección de beneficios desde la derecha
  tl.to(beneficios.value, {
    opacity: 1,
    x: 0,
    duration: 1,
    ease: 'power2.out',
  }, 1);

  // 4. Desplazar el dron en beneficios hacia la izquierda
  tl.from(dronBeneficios.value, {
    x: 100,
    opacity: 0,
    duration: 1,
    ease: 'power2.out',
  }, 1);
});


onMounted(()=>{
  new Swiper('.swiper', {
    modules: [Pagination, Autoplay],
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 15
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20
      },
    },
  });
})

// Limpieza de ScrollTriggers y timelines al desmontar el componente
onUnmounted(() => {
  if (tl) {
    tl.kill();
  }
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
});

</script>

<template>
    <section class="servicios-cards">
        <div class="servicio-card">
            <img src="/public/img/servicios.webp" alt="Persona controlando dron">
            <h4>Proyección de Línea de Siembre</h4>
            <p>Te mostramos como se vería tu siembra</p>
            <a href="">Contactanos</a>
        </div>
        <div class="servicio-card">
            <img src="/public/img/servicios.webp" alt="Persona controlando dron">
            <h4>Proyección de Línea de Siembre</h4>
            <p>Te mostramos como se vería tu siembra</p>
            <a href="">Contactanos</a>
        </div>
        <div class="servicio-card">
            <img src="/public/img/servicios.webp" alt="Persona controlando dron">
            <h4>Proyección de Línea de Siembre</h4>
            <p>Te mostramos como se vería tu siembra</p>
            <a href="">Contactanos</a>
        </div>
    </section>
    <section class="caracteristicas">
      <h2>Contamos con el mejor equipo</h2>
      
      <!-- Sección de Características -->
      <div class="t40-caracteristicas" ref="caracteristicas">
        <div class="caracteristicas-text">
          <h3>Características del T40</h3>
          <p>El dron agrícola t40 ofrece:</p>
          <ul>
            <li>Alta capacidad para operaciones extensas sin interrupciones.</li>
            <li>Precisión milimétrica con tecnología de mapeo y GPS avanzados.</li>
            <li>Versatilidad para pulverización y siembra.</li>
            <li>Eficiencia operativa con alta velocidad y cobertura.</li>
          </ul>
        </div>
        <figure ref="dronCaracteristicas">
          <img src="/public/img/moving-dron.png" alt="Dron T40">
        </figure>
      </div>
      
      <!-- Sección de Beneficios -->
      <div class="t40-caracteristicas beneficios" ref="beneficios">
        <figure ref="dronBeneficios">
          <img src="/public/img/moving-dron.png" alt="Dron T40">
        </figure>
        <div class="caracteristicas-text">
          <h3>Beneficios del T40</h3>
          <p>El dron agrícola ofrece estas ventajas:</p>
          <ul>
            <li>Reducción de costos operativos y de mano de obra.</li>
            <li>Mayor sostenibilidad al optimizar el uso de insumos.</li>
            <li>Mejora en rendimientos por distribución uniforme.</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="servicios-de-foto">
      <h2>Servicios de Fotogrametría</h2>
      <div class="swiper-container">
        <div class="swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(servicio, index) in servicios" :key="index">
              <div class="foto-card">
                <img :src="servicio.imagen" alt="Carta de Imagen">
                  <h3>{{ servicio.titulo }}</h3>
                  <p>{{ servicio.descripcion }}</p>
              </div>
            </div>
          </div>
          <div class="swiper-pagination"></div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
      </div>
    </section>
</template>

<style scoped>

.servicios-cards {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin: 10vh auto;
    width: 70rem;
    padding: 20px;
    color: var(--dark-green);
  }
  
  .servicio-card {
    background-color: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    width: calc(28% - 13.333px);
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  
  .servicio-card img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  
  .servicio-card h4 {
    padding: 10px 15px 0;
    margin: 0;
    font-size: 1.2rem;
    font-weight: 600;
  }
  
  .servicio-card p {
    padding: 5px 15px;
    margin: 0;
    flex-grow: 1;
  }
  
  .servicio-card a {
    background-color: var(--strong-yellow);
    color: white;
    font-size: 1rem;
    text-decoration: none;
    padding: 10px 7px;
    width: 120px;
    text-align: center;
    margin: 15px auto;
    border-radius: 12px;
    font-weight: 600;
  }
  
  .servicio-card a:hover {
    background-color: #FF8C00;
  }

.caracteristicas {
  position: relative;
  width: 100%;
  padding: 10vh 0;
  color: #FFFFFF;
  background: linear-gradient(rgba(32, 102, 92, 0.5), rgba(32, 102, 92, 0.5)), url('/img/servicios-bg.jpg');
  background-size: cover;
  background-position: center;
  overflow: hidden;
}

.caracteristicas::before {
  content: "";
  position: absolute;
  padding: 10px;
  background-color: var(--strong-yellow);
  top: 0;
  width: 38rem;
  left: 50%;
  z-index: -1;
  transform: translateY(88px) translateX(-313px);
}

.caracteristicas h2 {
  padding: 20px 0;
  text-align: center;
  font-size: 2.5rem;
}

.t40-caracteristicas {
  display: flex;
  width: 70vw;
  margin: 5vh auto;
  align-items: center;
  justify-content: space-between;
  opacity: 1;
  transform: translateX(0);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}

.t40-caracteristicas.beneficios {
  opacity: 0;
  transform: translateX(100px); /* Inicialmente desplazado a la derecha */
}

.t40-caracteristicas h3 {
  font-size: 2.4rem;
}

.t40-caracteristicas p {
  font-size: 1.8rem;
  margin: 1vh 0;
}

.t40-caracteristicas ul {
  font-size: 1.2rem;
  margin: 1vh 0;
  list-style: disc inside;
}

.caracteristicas-text {
  flex: 1;
}

figure {
  flex: 1;
  text-align: center;
}

figure img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}
/*
.servicios-de-foto{
  width: 70vw;
  margin: 5vh auto;
  color: var(--dark-green);
}
.foto-cards{
  display: flex;
  gap: 5vw;
  margin: 5vh auto;
  justify-content: center;
}
.foto-card{
  border: 2px solid var(--dark-green);
  padding: 10px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  width: 17rem;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1.5rem;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
*/
.servicios-de-foto {
  width: 80vw;
  padding: 2rem;
  margin: auto;
}

.swiper-container {
  position: relative;
  padding: 0 40px;
  margin-bottom: 40px;
}

.swiper{
  height: 70vh;
}

.servicios-de-foto h2 {
  color: var(--dark-green);
  font-size: 2.2rem;
  margin-bottom: 2.5rem;
}

.foto-card {
  color: var(--dark-green);
  height: 60vh;
  border: 1px solid var(--dark-green);
  background: transparent;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1vh;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
.foto-card:not(img){
  padding: 20px;
}
.foto-card h3{
  font-weight: 700;
  font-size: 1.5rem;
}

.foto-card img {
  width: 100%;
  height: auto;
}
.swiper-button-next, .swiper-button-prev {
  display: none;
}
.swiper-pagination-bullet-active {
  background: var(--dark-green);
}
.swiper-pagination-bullet {
  background-color: #20665c;
  opacity: 0.5;
}
/*
.swiper-button-next, .swiper-button-prev {
  color: var(--dark-green);
  padding: 30px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.swiper-pagination {
  position: absolute;
  bottom: 0;
}

.swiper-pagination-bullet-active {
  background-color: var(--dark-green);
}
*/
@media screen and (max-width: 768px) {
  
  .servicios-cards{
    flex-direction: column;
    width: 80vw;
    align-items: center;
  }
  .servicio-card{
    width: 65vw;
  }
  .caracteristicas h2{
    font-size: 1.8rem;
  }
  .t40-caracteristicas h3{
    font-size: 1.5rem;
  }
  .t40-caracteristicas p {
    font-size: 1.2rem;
  }
  .t40-caracteristicas ul{
    font-size: 0.95rem;
  }
  figure{
    display: none;
  }
}

</style>