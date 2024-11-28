<script setup>
import { ref, onMounted } from 'vue';

const servicios = ref([]);
const selected = ref ({
            "id": 1,
            "titulo": "Servicios de Fotogrametría",
            "parrafo": "Nuestros sistemas generan mapas, planos y modelos, brindando información valiosa para optimizar el manejo de cultivos y recursos.",
            "imagen": "/img/servicio_fotogrametría.webp"});

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
                    <img src="/img/fotogrametria.webp" alt="Manos con una planta">
                </figure>
                <h4>Servicios de Fotogrametría</h4>
                <p>Brindamos información valiosa para optimizar el manejo de cultivos y recursos.</p>
                <a href="#">Más información</a>
            </div>
            <div class="servicio-feature"
            @click = "seleccionar(2)"
            >
                <figure>
                    <img src="/img/pulverizacion.webp" alt="Dron pulverizando">
                </figure>
                <h4>Servicios de Pulverización</h4>
                <p>Optimiza la distribución de tus cultivos con líneas de siembra precisas y eficientes.</p>
                <a href="#">Más información</a>
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
    justify-content: center;
    gap: 20px;
}

.servicio-feature {
    background-color: #c5e1a5;
    border-radius: 10px;
    padding: 20px;
    width: 30%;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
.servicio-feature a{
    display: none;
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
.curva-de-nivel {
    display: flex;
    align-items: center;
    max-width: 1000px;
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
        margin: 10vh 0;
        gap: 10vh;
        align-items: center;
        flex-direction: column;
    }
    .servicio-feature{
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        width: 17rem;
        height: 17rem;
    }
    .servicio-feature a{
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
        transform: translateY(-200px) translateX(77px);
    }
    .curva-de-nivel{
        display: none;
    }
}

</style>