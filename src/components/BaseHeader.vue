<script setup>

import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};


const props = defineProps({
    header: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    imagen: {
        type: String,
        required: true
    }
})

</script>

<template>
    <nav class="base-menu">
        <figure onclick="window.location.href='/'">
            <img src="/img/logo color.svg" alt="Nubetec Logo">
        </figure>
        <div class="menu-toggle" @click="toggleMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        <ul :class="{ 'open': isMenuOpen }">
            <li><a href="/">Inicio</a></li>
            <li><a href="/nosotros">Nosotros</a></li>
            <li><a href="/servicios">Servicios</a></li>
            <li class="contacto"><a href="/contacto">Contacto</a></li>
        </ul>
    </nav>
    <main class="base-main">
        <img :src="imagen" :alt="header">
        <h1>{{ header }}</h1>
        <p>{{ descripcion }}</p>
    </main>
</template>
<style scoped>
nav.base-menu {
    margin: 2vh auto;
    display: flex;
    font-weight: 500;
    width: 100%;
    justify-content: space-around;
}
.base-menu figure {
    width: 60px;
}
.base-menu figure{
    cursor: pointer;
}
.base-menu ul {
    display: flex;
    color: var(--dark-green);
    gap: 2vw;
    align-items: center;
    padding: 15px;
}
nav ul li.contacto a{
    padding: 5px 13px;
    font-weight: 600;
    font-weight: 500;
    color: #fff;
    border-radius: 12px;
    background-color: var(--strong-yellow);
    transition: background-color 0.4s;
    box-shadow: 2px 1px 1px rgb(0, 0, 0,0.5);
}
nav ul .contacto a:hover {
    background-color: var(--dark-green);
}

nav a {
    color: var(--dark-green);
}

.base-main{
    color: var(--dark-green);
    text-align: center;
    margin-bottom: 7vh;
    font-size: 1.2rem;
}
.base-main h1{
    font-size: 2.5rem;
}
.base-main img{
    width: 100%;
    margin-bottom: 5vh;
}
.base-main p{
    margin: 2vh auto;
    width: 34rem;
}

@media screen and (max-width: 768px) {

nav.base-menu {
    margin: 1vh auto;
    align-items: center;
  }

  .base-menu ul {
    flex-direction: column;
    gap: 1vh;
  }

  nav ul .contacto {
    margin-top: 1vh;
  }
  .menu-toggle {
    display: none;
    flex-direction: column;
    cursor: pointer;
  }
  
  .menu-toggle span {
    display: block;
    width: 25px;
    height: 3px;
    background-color: var(--dark-green);
    color: #fff;
    margin-bottom: 5px;
    transition: 0.4s;
  }
  
    nav.base-menu {
      justify-content: space-between;
      padding: 0 20px;
    }
  
    .menu-toggle {
      display: flex;
    }
  
    .base-menu ul {
      display: none;
      position: absolute;
      top: 60px;
      left: 0;
      width: 100%;
      background-color: rgba(32, 102, 92, 1);
      flex-direction: column;
      padding: 20px 0;
    }
  
    .base-menu ul.open {
      display: flex;
    }
  
    .base-menu ul li {
      margin: 10px 0;
    }
    nav ul li.contacto a{
        background: none;
        box-shadow: none;
    }
    nav a {
        color: #fff;
    }

    .base-main{
      font-size: 0.95rem;
    }
    .base-main h1{
      font-size: 2rem;
    }
    .base-main p{
      width: 80vw;
    }
}

</style>