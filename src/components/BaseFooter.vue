<script setup>
</script>

<template>
    <div class="imagenes">
        <img src="/img/slider.webp" alt="Conjunto de imágenes de proceso de pulverización">
    </div>
    <footer>
        <div class="logo">
            <img src="/img/logo blanco.svg" alt="Nubetec Logo">
            <h3>Nubetec</h3>
            <span>Pulverización y Sembrado</span>
            <p>Revoluciona tu campo con nuestros drones agrícolas.</p>
        </div>
        <div class="nosotros">
            <h4>Nuestra Compañía</h4>
            <ul>
                <li><img src="/img/servicios_iconos.webp" alt="Hoja"><a href="/servicios">Servicios</a></li>
                <li><img src="/img/servicios_iconos.webp" alt="Hoja"><a href="/nosotros">Nosotros</a></li>
                <li><img src="/img/servicios_iconos.webp" alt="Hoja"><a href="/contacto">Contacto</a></li>
            </ul>
        </div>
        <div class="contacto">
            <h4>Información de Contacto</h4>
            <div class="direccion"><img src="/img/ubicacion.webp" alt="GPS"><span>Centro comercial Paraná Country Club, Edificio Jeane Paris oficina 5</span></div>
            <div class="mail"><img src="/img/email.webp" alt="Mail"><span>belen@nubetec.com.py</span></div>
            <div class="mail"><img src="/img/telefono.svg" alt="Teléfono"><span>+595992264576</span></div>
        </div>
        <div class="redes">
            <h5>Síguenos</h5>
            <figure>
                <img src="/img/instagram.svg" alt="Nubetec Instagram">
                <img src="/img/facebook.svg" alt="Nubetec Facebook">
                <img src="/img/whatsapp.svg" alt="Nubetec WhatsApp">
            </figure>
        </div>
        <div class="desarrollador">
            <p>Desarrollado por <a href="https://conversa.com.py">conversa.com.py</a></p>
        </div>
    </footer>
</template>

<style scoped>

.imagenes {
    width: 100%;
    overflow: hidden;
    margin: 0;
    transform: translateY(7px);
}

.imagenes img {
    width: 150%;
    height: auto;
    object-fit:cover;
}

footer {
    padding: 40px 80px;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 30px;
    color: var(--strong-yellow);
    background-color: var(--dark-green);
}

.logo {
    color: #fff;
    display: flex;
    flex-direction: column;
    gap: 3px;
}

.logo img {
    width: 70px;
}

.logo span {
    color: var(--strong-yellow);
    font-weight: bold;
    font-size: 18px;
}

.logo p {
    font-size: 14px;
}

.nosotros h4, .contacto h4 {
    margin-bottom: 20px;
    font-size: 18px;
}

.nosotros ul li {
    margin:0 0 10px -10px;
    font-size: 1.1rem;
}
.nosotros li img{
    width: 20px;
    translate: 0 5px;
    margin: 0 10px;
}

.nosotros ul li a {
    text-decoration: none;
    color: #fff;
}
.nosotros ul li a:hover {
    text-decoration: underline;
}

.contacto div {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    color: #fff;
}
.contacto img{
    width: 20px;
    margin: 0 10px 0 0;
}

.redes h5 {
    margin: 20px 0 10px;
    font-size: 1.2rem;
}
div.redes{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.redes figure img{
    margin: 0 20px 0 0;
    width: 25px;
}
.redes figure img:hover{
    cursor: pointer;
    width: 30px;
    transition: width 0.2s ease;
}

.desarrollador {
    grid-column: 1 / -1;
    text-align: center;
    padding-top: 20px;
    border-top: 1px solid #ddd;
    color: #fff;
    font-size: 16px;
}
.desarrollador p a{
    color: #fff;
}
.desarrollador p a:hover {
    color: #fff;
    text-decoration: underline;
}

@media screen and (max-width: 1024px) {

}

@media screen and (max-width: 786px) {
    .imagenes img{
        width: 350%;
    }
    footer{
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        gap: 20px;
        padding: 20px;
    }
    .logo{
        order: 0;
        padding-bottom: 2vh;
    }
    .logo img{
        margin: 1vh auto;
    }
    .logo, .nosotros{
        border-bottom: 1px solid var(--dark-green) ;
    }
    .nosotros{
        order: 2;
    }
    div.contacto{
        justify-content: center;
        margin: auto;
        width: 10rem;
        display: flex;
        align-items: center;
        flex-direction: column;
        order: 3;
    }
    .redes h5{
        display: none;
    }
    div.redes{
        order: 1;
        align-items: center;
    }
    .redes figure img{
        margin: 0 4vw 0 4vw;
        width: 35px;
    }
    .nosotros h4 {
        margin-bottom: 10px;
    }
    .contacto img:not(.redes img){
        display: none;
    }
    .desarrollador{
        order: 5;
    }
}

</style>