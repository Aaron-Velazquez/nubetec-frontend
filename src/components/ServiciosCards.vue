<script setup>
import { ref, onMounted } from 'vue';

const servicios = ref([]);
const selected = ref ({
            "id": 1,
            "titulo": "Proyección de Línea de Siembra",
            "parrafo": "Las curvas de nivel son líneas imaginarias en un mapa que conectan puntos de igual elevación sobre el nivel del mar.",
            "imagen": "/img/proyeccion-linea-de-sombra.webp"});

const info = async () => {
    try {
        const response = await fetch('data/Servicios.json');
        if (response.ok) {
            const data = await response.json();
            servicios.value = data.servicios;
        } else {
            console.error('404');
        }
    } catch (error) {
        console.log('Error: ', error);
    }
}

const seleccionar = (id) => {
    selected.value = servicios.value.find(servicio => servicio.id === id) || null;
    const items = document.querySelectorAll(".servicio-feature");
        let sw = 0, c = 0;
        items.forEach((item)=>{
            if ((id == '1' && c==0 || id == '2' && c==1 || id == '3' && c==2) && sw==0){
                items[c].classList.add("selected");
                sw=1;
            }else{
                item.classList.remove("selected");
            }
            c=c+1;
        })
};

onMounted(()=>{
    info();
})


</script>
<template>
    <div class="servicios">
        <h3>Explora nuestros servicios</h3>
        <p>Servicios integrales para potenciar tu crecimiento.</p>
        <div class="servicios-cards">
            <div class="servicio-feature selected"
            @click = "seleccionar(1)">
                <figure>
                    <img src="/img/proyeccion.svg" alt="Manos con una planta">
                </figure>
                <h4>Proyección de Línea de Siembra</h4>
                <p>Te mostramos como se vería tu siembra</p>
            </div>
            <div class="servicio-feature"
            @click = "seleccionar(2)"
            >
                <figure>
                    <img src="/img/aplicacion.svg" alt="Dron pulverizando">
                </figure>
                <h4>Aplicacion de Tasa Variable</h4>
                <p>Te mostramos como se vería tu siembra</p>
            </div>
            <div class="servicio-feature" @click = "seleccionar(3)">
                <figure>
                    <img src="/img/curva.svg" alt="Planta creciendo">
                </figure>
                <h4>Curva de Nivel</h4>
                <p>Te mostramos como se vería tu siembra</p>
            </div>
        </div>
    </div>
    <div class="curva-de-nivel">
        <figure>
            <img :src="selected.imagen" alt="Manos plantando"/>
        </figure>
        <div class="curva-text">
            <h3>{{selected.titulo}}</h3>
            <p>{{selected.parrafo}}</p>
            <a href="/servicios">Más información</a>
        </div>
    </div>
</template>
<style scoped>
.servicios {
    max-width: 1000px;
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

.servicios-cards {
    display: flex;
    justify-content: space-between;
    gap: 20px;
}

.servicio-feature {
    background-color: #c5e1a5;
    border-radius: 10px;
    padding: 20px;
    width: 30%;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
.servicio-feature:hover{
    cursor: pointer;
}

.selected{
    background-color: var(--dark-green);
    transition: background-color 0.9s ease-out;
    transition: color 0.3s ease-out;
    color: white;
    box-shadow: 2px 2px 2px #779688;
}

.servicio-feature figure {
    background-color: white;
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
.curva-de-nivel {
    display: flex;
    align-items: center;
    max-width: 1000px;
    margin: 0 auto;
    background-color: #ffffff;
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

@media screen and (max-width: 1024px) {

}

@media screen and (max-width: 786px) {
    .servicios{
        width: 90vw;
    }
    .servicios h3{
        font-size: 1.8rem;
    }
    .servicios > p{
        font-size: 0.95rem;
    }
    .servicios-cards{
        align-items: center;
        flex-direction: column;
    }
    .servicio-feature{
        width: 70vw;
    }
    .curva-de-nivel{
        width: 80vw;
        text-align: center;
        flex-direction: column;
    }
}

</style>