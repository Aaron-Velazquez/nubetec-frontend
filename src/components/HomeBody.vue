<script setup>
import ServiciosCards from './ServiciosCards.vue'
</script>

<template>
    <ServiciosCards></ServiciosCards>
    <div class="mision">
        <div class="mision-text">
            <span>Nuestra Misión</span>
            <h3>Impulsando la Revolución Agrotecnológica</h3>
            <p>Impulsamos la innovación en la agricultura y ganadería con soluciones tecnológicas avanzadas y consultoría estratégica, creando valor para nuestros clientes y apoyando su transición hacia prácticas más eficientes y rentables.</p>
            <a href="/nosotros">Conoce Más</a>
        </div>
        <figure class="img-pc">
            <img src="/img/mision-img.webp" alt="Collage de imágenes">
        </figure>
    </div>
    <div class="cta-home">
        <figure class="img-movil">
            <img src="/img/el-tipo-mobile.jpg" alt="Un Agrónomo mirando al horizonte">
        </figure>
        <div class="home-text">
            <span>Estamos esperando tu llamada</span>
            <h3>Explora nuestros planes y conoce sobre nuestra organización</h3>
            <p>Nubetec utiliza el T40 para brindar soluciones agrícolas innovadoras, precisas y eficientes.</p>
            <a href="/contacto">Contactanos</a>
        </div>
        <figure class="img-pc">
            <img src="/img/el tipo.webp" alt="Un Agrónomo mirando al horizonte">
        </figure>
    </div>
</template>

<style scoped>

.pulverizacion {
    padding: 40px;
    max-width: 1000px;
    margin: 5vh auto;
}

.pulverizacion h2 {
    color: #156e6e;
    font-size: 2rem;
    margin-bottom: 10px;
}

.pulverizacion > p {
    color: #156e6e;
    font-size: 18px;
    margin-bottom: 50px;
}

.pulverizacion-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
}

.feature {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.feature img {
    width: 80px;
    height: 80px;
    margin-bottom: 15px;
}

.feature span {
    color: #156e6e;
    font-weight: bold;
    font-size: 16px;
}
.mision {
    background-color: var(--dark-green);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 7vh 0;
    padding: 40px 20px;
    gap: 2vw;
}

.mision-text {
    padding-right: 40px;
    color: #fff;
    width: 40vw;
}

.mision-text span {
    font-size: 18px;
    color: var(--strong-yellow);
    font-weight: 600;
}

.mision-text h3 {
    font-size: 36px;
    margin: 10px 0 20px;
    line-height: 1.2;
}

.mision-text h3 span {
    display: block;
}

.mision-text p {
    text-align: justify;
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 20px;
}

.mision-text a {
    display: inline-block;
    background-color: var(--soft-green);
    color: white;
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 12px;
    font-weight: 500;
    transition: background-color 0.3s ease;
}

.mision-text a:hover {
    background-color: #ff8c00;
}

.mision-images {
    flex: 1;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
}

.mision-images img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
}

.mision-images img:nth-child(3) {
    grid-column: 2;
    grid-row: 1 / span 2;
    height: 415px;
}
.img-movil{
    display: none;
}

.cta-home {
    position: relative;
    max-width: 1200px;
    margin: 15vh auto;
    border-radius: 12px;
    color: white;
    background: url('/img/cta_img.webp');
    background-size: cover;
    background-position: center;
    height: 60vh;
    display: flex;
    align-items: center;
}

.cta-home::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 12px;
    z-index: 1;
}

.home-text {
    position: relative;
    z-index: 2;
    padding: 40px;
    width: 60%;
}

.home-text span {
    font-size: 14px;
    display: block;
    margin-bottom: 10px;
}

.home-text h3 {
    font-size: 32px;
    margin: 0 0 20px;
    line-height: 1.2;
}

.home-text p {
    font-size: 16px;
    margin-bottom: 20px;
}

.home-text a {
    display: inline-block;
    background-color: var(--strong-yellow);
    color: white;
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 12px;
    font-weight: 500;
    transition: background-color 0.3s ease;
}

.home-text a:hover {
    background-color: var(--strong-yellow);
    opacity: 0.9;
}

.cta-home figure {
    position: absolute;
    bottom: -7px;
    right: 0;
    width: 35%;
    margin: 0;
    z-index: 2;
}

.cta-home img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

@media (max-width: 768px) {

    
    .mision-text {
        padding-right: 0;
        margin-bottom: 30px;
    }

    .cta-home figure {
        position: relative;
        width: 100%;
        height: 300px;
        margin-top: 20px;
    }
}


@media screen and (max-width: 1024px) {

}

@media screen and (max-width: 786px) {

.mision{
    flex-direction: column;
    text-align: center;
    margin: 5vh auto 0 auto;
    font-size: 0.95rem;
}
.mision-text h3{
    font-size: 1.8rem;
}
.mision-text{
    order: 2;
    text-align: center;
    width: 90vw;
}
.mision-text p{
    text-align: center;
}
.mision figure{
    width: 90vw;
}
.img-pc{
    order: 0;
}
.img-pc img{
    width: 100%;  
}
.cta-home{
    flex-direction: column;
    gap: 3vh;
    width: 100%;
    margin: 10vh auto;
    height: auto;
    background: none;
    color: var(--dark-green);
    text-align: center;
}
.home-text {
    padding: 0;
    order: 2;
    width: 80vw;
}
.cta-home figure{
    border: 0;
    background: url('/img/rectangulo_cel.webp');
    width: 100%;
}
.cta-home figure img, .cta-home figure{
    overflow: hidden;
    object-fit: contain;
}
}
</style>