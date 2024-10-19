<template>

<section class="valores">
    <div class="valor">
        <img src="/img/personalizacion.svg" alt="Tuerca">
        <span>Personalización</span>
    </div>
    <div class="valor">
        <img src="/img/innovacion.svg" alt="Tuerca">
        <span>Innovación</span>
    </div>
    <div class="valor">
        <img src="/img/sostenibilidad.svg" alt="Tuerca">
        <span>Sostenibilidad</span>
    </div>
    <div class="valor">
        <img src="/img/colaboracion.svg" alt="Tuerca">
        <span>Colaboración</span>
    </div>
    <div class="valor">
        <img src="/img/excelencia.svg" alt="Tuerca">
        <span>Excelencia</span>
    </div>
</section>

<section class="mision-vision">
    <div class="mivi-text">
    <h2>Misión y Visión</h2>
        <div class="vision">
        <span>Visión:</span>
        <p>Ser pioneros en la transformación tecnológica del sector agropecuario, estableciendo nuevas formas de trabajar en el campo y fortaleciendo alianzas duraderas que impulsen el crecimiento sostenible de nuestros clientes.</p>
    </div>
    <div class="mision">
            <span>Misión:</span>
            <p>Impulsar la innovación en la agricultura y ganadería a través de soluciones tecnológicas avanzadas y consultoría estratégica, creando valor para nuestros clientes y apoyando su transición hacia prácticas más eficientes, rentables y sostenibles.</p>
        </div>
    </div>
    <figure>
        <img src="/img/mision-vision.webp" alt="Hoja con dron">
    </figure>
</section>

<section class="propuesta">
    <h3>Propuesta de valor</h3>
    <img src="/img/propuesta-de-valor.webp" alt="Dron con plantaciones">
    <p>Fundada en 2024, Nubetec se dedica a ofrecer soluciones tecnológicas innovadoras para el sector agropecuario. Nos especializamos en el uso de drones para la pulverización y siembra, pero nuestro compromiso va más allá: estamos constantemente desarrollando nuevas soluciones que optimizan el trabajo en el campo.</p>
    <p>Nuestro equipo está compuesto por profesionales apasionados que colaboran estrechamente para cumplir y superar las expectativas de nuestros clientes. En Nubetec, trabajamos en conjunto para transformar la agricultura y ganadería, aportando eficiencia, precisión y sostenibilidad a cada proyecto. </p>
</section>

</template>


<style scoped>

.valores{
    width: 70vw;
    margin: 5vh auto;
    display: flex;
    gap: 5vw;
    justify-content: center;
}
.valor{
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: 1.5vh;
}
.valor img{
    width: 70px;
}

.mision-vision{
    color: var(--dark-green);
    width: 70vw;
    margin: 5vh auto;
    display: flex;
    align-items: center;
    gap: 5vw;
}

.mision-vision figure{
    width: 60rem;
}

.mision-vision figure img{
    width: 100%;
}
.mision-vision h2{
    font-size: 1.8rem;
    font-weight: 500;
}
.mivi-text > *{
    margin: 2vh 0;
}
.propuesta{
    color: var(--dark-green);
    width: 70vw;
    margin-left: 14vw;
}
.propuesta h3{
    font-size: 1.8rem;
}
.propuesta p{
    margin: 4vh 0;
}
.propuesta :last-child{
    margin-bottom: 10vh;
}
.propuesta img{
    width: 30rem;
}

@media screen and (max-width: 768px) {
    
 .valores{
    flex-direction: column;
    gap: 2vh;
 }
 .valor{
    font-size: 0.95rem;
 }
 .valor img{
    width: 50px;
 }

.mision-vision{
    width: 80vw;
    flex-direction: column;
}
.mision-vision figure{
    width: 80vw;
    order: 1;
}
.mivi-text {
    order: 2;
}

.propuesta{
    margin-left: 10vw;
}

.propuesta img{
    width: 80vw;
}
}


</style>