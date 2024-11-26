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

  <div class="pulverizacion">
    <h2>Servicios de Pulverización</h2>
    <section class="zocalo">
      <div class="zocalo-text">
        <h3>Máxima eficiencia</h3>
        <p>En Nubetec, utilizamos tecnología avanzada para ofrecer servicios de pulverización y siembra que redefinen la eficiencia y precisión en el campo.</p>
      </div>
        <img src="/img/dront40.webp" alt="Dron T40">
    </section>
    <section class="servicio-pul">
      <div class="pul-text">
        <h3>Pulverización y Siembra con Drones</h3>
        <span>Eficiencia y Optimización de Recursos</span>
        <p>Realizamos pulverización y siembra con precisión excepcional, cubriendo grandes extensiones de terreno de forma eficiente.

          Optimiza tus costos, mejora tus rendimientos y moderniza tu operación agrícola con Nubetec.</p>
          <a href="#">Me interesa <img src="/img/flechita.svg" alt="flecha"></a>
      </div>
      <img src="/img/t40_1.webp" alt="Dron T40">
    </section>
    <section class="servicio-pul">
      <div class="pul-text dos">
        <h3>Aplicación de Tasa Variable</h3>
        <span>Agricultura precisa y sostenible</span>
        <p>Realizamos pulverización y siembra con precisión excepcional, cubriendo grandes extensiones de terreno de forma eficiente.

          Optimiza tus costos, mejora tus rendimientos y moderniza tu operación agrícola con Nubetec.</p>
          <a href="#">Me interesa <img src="/img/flechita.svg" alt="flecha"></a>
      </div>
      <img src="/img/t40_2.webp" alt="Dron T40">
    </section>
  </div>

   <div class="fotogrametria">
    <div class="titulo">
      <h2>Servicios de Fotogrametría</h2>
    </div>
    <section class="zocalo segundo">
      <div class="zocalo-text">
        <h3>Fotogrametría</h3>
        <p>Nuestros sistemas generan mapas, planos y modelos 3D detallados, brindando información valiosa para optimizar el manejo de cultivos y recursos.</p>
      </div>
      <figure>
        <img src="/img/mavic3.webp" alt="Fotogrametría">
      </figure>
    </section>

    <section class="foto-ser">
      <div class="ser-col">
        <div class="servicio prin">
          <span>Proyección de Línea de Siembra</span>
          <p>La proyección de línea de siembra es un servicio clave para maximizar el uso eficiente del terreno.</p>
          <a href="#">Me interesa <img src="/img/flecha_amarilla.svg" alt="Flecha"></a>
        </div>
        <div class="servicio prin">
          <span>Curva de nivel</span>
          <p>El manejo adecuado del terreno es fundamental para prevenir la erosión y optimizar el uso del agua.</p>
          <a href="#">Me interesa <img src="/img/flecha_amarilla.svg" alt="Flecha"></a>
        </div>
        <img class="foto-img" src="/img/servicios_campo.webp" alt="Campo abierto foto Dron">
      </div>
      <div class="linea"></div>
      <div class="ser-col">
        <div class="servicio">
          <span>Carta de Imagen del Establecimiento</span>
          <p>Mapa detallado del predio con alta precisión, incluyendo referencias a todas las instalaciones y recursos.</p>
          <a href="#">Me interesa <img src="/img/flecha_amarilla.svg" alt="Flecha"></a>
        </div>
        <div class="servicio">
          <span>Carta de Imagen del Establecimiento</span>
          <p>Mapa detallado del predio con alta precisión, incluyendo referencias a todas las instalaciones y recursos.</p>
          <a href="#">Me interesa <img src="/img/flecha_amarilla.svg" alt="Flecha"></a>
        </div>
        <div class="servicio">
          <span>Carta de Imagen del Establecimiento</span>
          <p>Mapa detallado del predio con alta precisión, incluyendo referencias a todas las instalaciones y recursos.</p>
          <a href="#">Me interesa <img src="/img/flecha_amarilla.svg" alt="Flecha"></a>
        </div>
      </div>
      <div class="linea"></div>
      <div class="ser-col">
        <div class="servicio">
          <span>Carta de Imagen del Establecimiento</span>
          <p>Mapa detallado del predio con alta precisión, incluyendo referencias a todas las instalaciones y recursos.</p>
          <a href="#">Me interesa <img src="/img/flecha_amarilla.svg" alt="Flecha"></a>
        </div>
        <div class="servicio">
          <span>Carta de Imagen del Establecimiento</span>
          <p>Mapa detallado del predio con alta precisión, incluyendo referencias a todas las instalaciones y recursos.</p>
          <a href="#">Me interesa <img src="/img/flecha_amarilla.svg" alt="Flecha"></a>
        </div>
        <div class="servicio">
          <span>Carta de Imagen del Establecimiento</span>
          <p>Mapa detallado del predio con alta precisión, incluyendo referencias a todas las instalaciones y recursos.</p>
          <a href="#">Me interesa <img src="/img/flecha_amarilla.svg" alt="Flecha"></a>
        </div>
        <div class="servicio">
          <span>Carta de Imagen del Establecimiento</span>
          <p>Mapa detallado del predio con alta precisión, incluyendo referencias a todas las instalaciones y recursos.</p>
          <a href="#">Me interesa <img src="/img/flecha_amarilla.svg" alt="Flecha"></a>
        </div>
      </div>
    </section>
   </div>
</template>

<style scoped>
.pulverizacion h2{
  width: max-content;
  font-size: 1.8rem;
  color: #fff;
  padding: 10px 30px 10px 200px;
  background-color: var(--dark-green);
}
.zocalo{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 5vh auto;
  gap: 5vw;
  background: url("/img/fondo_dron.webp");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.zocalo img{
  width: 30vw;
}
.zocalo-text{
  color: #fff;
  font-size: 1.2rem;
  width: 40vw;
  line-height: 120%;

}
.zocalo-text h3{
  margin: 2vh 0;
  color: var(--strong-yellow);
  font-size: 2.4rem;
  text-shadow: 1px 1px 1px rgb(0, 0, 0,0.5);
}

.servicio-pul{
  margin: 10vh auto;
  display: flex;
  width: 70vw;
  gap: 5vw;
  align-items: center;
  justify-content: center;
}
.pul-text{
  display: flex;
  gap: 1.5vh;
  flex-direction: column;
  width: 35vw;
}
.pul-text h3{
  font-size: 2rem;
  line-height: 110%;
  color: var(--dark-green);
}
.pul-text span{
  color: var(--strong-yellow);
  font-weight: 600;
  font-size: 1.2rem;
}
.pul-text a{
  color: var(--dark-green);
  font-weight: 600;
}
.pul-text a:hover{
  text-decoration: underline;
}
.pul-text a img{
  translate: 5px 3px ;
  width: 10px;
}
.servicio-pul img{
  width: 25vw;
}

.dos{
  order: 1;
}

.segundo{
  background: url("/img/fondo_mavic3.webp");
}

.titulo{
  display: flex;
  justify-content: flex-end;
}
.fotogrametria h2{
  width: max-content;
  right: 0;
  font-size: 1.8rem;
  color: #fff;
  padding: 10px 200px 10px 30px;
  background-color: var(--strong-yellow);
  
}

.foto-ser{
  display: flex;
  justify-content: center;
  width: 80vw;
  gap: 3vw;
  margin: 10vh auto;
}

.foto-ser :nth-child(3){
  gap: 5vh;
}

.linea{
  height: auto;
  border-radius: 30px;
  border: 1px solid var(--dark-green);
}

.ser-col{
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 2vh;
}
.ser-col .foto-img{
  width: 20vw;
}
.servicio{
  color: var(--dark-green);
  margin: 1vh 0;
  width: 20vw;
}
.servicio > *{
  margin: 1vh 0;
}
.servicio span{
  line-height: 110%;
  font-size: 1.2rem;
  font-weight: 600;
}

.servicio a{
  color: var(--strong-yellow);
  font-weight: 600;
}
.servicio a:hover{
  text-decoration: underline;
}
.servicio a img{
  translate: 5px 3px ;
  width: 10px;
}

 .prin span{
  font-size: 1.6rem;
  font-weight: 700;
}

@media screen and (max-width: 768px) {
.pulverizacion h2{
  padding: 10px;
  font-size: 1.4rem;
}
.zocalo{
  padding: 20px 0;
  flex-direction: column;
}
.zocalo img{
  display: none;
}
.zocalo-text{
  width: 90vw;
  font-size: 0.95rem;
}
.zocalo-text h3{
  font-size: 1.6rem;
}

.servicio-pul{
  flex-direction: column;
  width: 90vw;
}
.pul-text{
  width: 100%;
  font-size: 0.95rem;
}

.pul-text h3{
  font-size: 1.6rem;
}
.pul-text span{
  font-size: 1rem;
}
.servicio-pul img{
  width: 70vw;
}
.dos{
  order: 0;
}


.fotogrametria h2{
  font-size: 1.4rem;
  padding: 10px;
}

.foto-ser{
  flex-direction: column;
  width: 90vw;
}
.linea{
  display: none;
}
.servicio{
  text-align: center;
  font-size: 0.95rem;
  width: 80vw;
}
.ser-col .foto-img{
  margin: 5vh auto;
  width: 50vw;
}
.ser-col{
  align-items: center;
}

}

</style>