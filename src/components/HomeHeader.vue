<script setup>

import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

</script>

<template>

    <div class="main-container">
        <nav class="main-menu">
          <figure>
            <img src="/img/logo blanco.svg" alt="Nubetec Logo">
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
    
        <main class="main-header">
          <h1>Bienvenidos a <b>Nubetec</b></h1>
          <p>Transformando el Campo con Tecnología de Vanguardia</p>
          <a href="">¡Empieza Ya!</a>
        </main>
      </div>

</template>

<style scoped>

.main-container{
    height: 80vh;
    background: linear-gradient(rgba(32, 102, 92, 0.5), rgba(32, 102, 92, 0.5)), 
    url('/img/DJI_T40 (1).webp') no-repeat center center;
    background-size: cover;
    padding: 0.1px;
}

nav.main-menu {
    margin: 2vh auto;
    display: flex;
    font-weight: 500;
    width: 100%;
    justify-content: space-around;
}
.main-menu figure {
    width: 60px;
}
.main-menu ul {
    display: flex;
    gap: 2vw;
    align-items: center;
    padding: 15px;
}
nav ul .contacto {
    padding: 5px 13px;
    font-weight: 600;
    font-weight: 500;
    color: #fff;
    border-radius: 12px;
    background-color: var(--strong-yellow);
    transition: background-color 0.4s;
    box-shadow: 2px 1px 1px rgb(0, 0, 0,0.5);
}
nav ul .contacto:hover {
    background-color: var(--dark-green);
}

nav a {
    color: #fff;
}

.main-header {
    width: 70vw;
    color: #fff;
    margin: 17vh auto;
}

.main-header h1{
    margin: 2vh 0;
    text-shadow: 1px 2px 2px #000;
    font-size: 4rem;
    line-height: 110%;
    width: 35rem;
    text-transform: uppercase;
}
.main-header b{
    color: var(--strong-yellow);
}
.main-header a{
    display: block;
    width: 145px;
    font-weight: 500;
    margin: 2vh 0;
    color: #fff;
    padding: 10px 20px;
    border-radius: 12px;
    background: linear-gradient(to left, var(--dark-green) 50%, var(--strong-yellow) 50%);
    background-size: 200% 100%;
    background-position: left bottom;
    transition: background-position 0.4s ease;
    box-shadow: 1px 2px 1px #000;
}

.main-header a:hover{
    background-position: right bottom;
}
@media screen and (max-width: 1024px) {
    .main-container {
      height: 70vh;
    }
  
    nav.main-menu {
      margin: 0 5vw;  
      justify-content: space-between;
      align-items: center;
    }
  
    .main-menu ul {
      margin-top: 2vh;
    }
  
    .main-header {
      width: 80vw;
      margin: 10vh auto;
    }
  
    .main-header h1 {
      font-size: 3rem;
      width: 100%;
    }
  }


  @media screen and (max-width: 768px) {
    .main-container {
      height: auto;
      min-height: 60vh;
    }
  
    nav.main-menu {
      margin: 1vh auto;
    }
  
    .main-menu ul {
      flex-direction: column;
      gap: 1vh;
    }
  
    nav ul .contacto {
      margin-top: 1vh;
    }
  
    .main-header {
      width: 90vw;
      margin: 5vh auto;
    }
  
    .main-header h1 {
      font-size: 2rem;
      line-height: 120%;
    }
  
    .main-header p {
      font-size: 0.95rem;
    }
  
    .main-header a {
      font-size: 0.95rem;
      max-width: 20rem;
      text-align: center;
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
    background-color: white;
    margin-bottom: 5px;
    transition: 0.4s;
  }
  
    nav.main-menu {
      justify-content: space-between;
      padding: 0 20px;
    }
  
    .menu-toggle {
      display: flex;
    }
  
    .main-menu ul {
      display: none;
      position: absolute;
      top: 60px;
      left: 0;
      width: 100%;
      background-color: rgba(32, 102, 92, 0.9);
      flex-direction: column;
      padding: 20px 0;
    }
  
    .main-menu ul.open {
      display: flex;
    }
  
    .main-menu ul li {
      margin: 10px 0;
    }
  
    nav ul .contacto {
      margin-top: 10px;
    }
}

</style>