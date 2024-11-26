<!-- resources/js/components/ContactForm.vue -->

<script setup>
import { ref } from 'vue';

const form = ref({
    nombre: '',
    apellido: '',
    email: '',
    mensaje: ''
});

const successMessage = ref('');
const errorMessage = ref('');

// const submitForm = async () => {
//     try {
//         const response = await fetch('/contacto', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
//             },
//             body: JSON.stringify(form.value)
//         });

//         if (response.ok) {
//             const data = await response.json();
//             successMessage.value = data.message;
//             errorMessage.value = '';
//             form.value = { nombre: '', apellido: '', email: '', message: '' };
//         } else {
//             const errorData = await response.json();
//             errorMessage.value = errorData.errors
//                 ? Object.values(errorData.errors).flat().join(' ')
//                 : 'Hubo un error al enviar el formulario.';
//                 successMessage.value = '';
//             }
//         } catch (error) {
//             errorMessage.value = 'Hubo un error al enviar el formulario.';
//             successMessage.value = '';
//             console.error(error);
//         }
//     };
</script>

<template>
    <!-- <div class="contact-form">
        <h2>Contáctanos</h2>
        <form @submit.prevent="submitForm">
            <div>
                <label for="name">Nombre:</label>
                <input type="text" v-model="form.nombre" id="name" required />
            </div>
            <div>
                <label for="apellido">Apellido:</label>
                <input type="text" v-model="form.apellido" id="subject" required />
            </div>
            <div>
                <label for="email">Correo Electrónico:</label>
                <input type="email" v-model="form.email" id="email" required />
            </div>
            <div>
                <label for="message">Mensaje:</label>
                <textarea v-model="form.mensaje" id="message" required></textarea>
            </div>
            <button type="submit">Enviar</button>
        </form>
        <div v-if="successMessage" class="success">
            {{ successMessage }}
        </div>
        <div v-if="errorMessage" class="error">
            {{ errorMessage }}
        </div>
    </div> -->

    <div class="formulario-de-contacto">
        <div class="contacto-text">
            <h2>Hablemos</h2>
            <span>Atendemos tu solicitud lo antes posible.</span>
        </div>
        <div class="contacto-row">
            <form class="contactForm">
                <div class="form-row">
                    <div class="form-column">
                        <label>Nombre</label>
                        <input id="nombre" type="text" name="nombre" required>
                    </div>
                    <div class="form-column">
                        <label>Apellido</label>
                        <input id="apellido" type="text" name="apellido" required>
                    </div>
                </div>
                <label>Correo</label>
                <input id="mail" type="email" name="correo" required>
                <label id="mensaje" class="textArea">Mensaje</label>
                <textarea class="textArea" type="text" name="mensaje" required/>
                <input type="submit" value="Enviar">
            </form>
            <!-- <div class="enviado">
                <span>¡Su mensaje ha sido enviado!</span>
            </div> -->
            <div class="linea"></div>
            <div class="side-form">
                <div class="call-us">
                    <span class="title">Llámanos</span>
                    <span>Te atendemos en horario de oficina.</span>
                    <span onclick="window.location.href = 'tel:+595973236438'">(0973) 236-438</span>
                </div>
                <div class="social-media">
                    <span class="title">
                        Conocenos
                    </span>
                    <span>Leemos tus mensajes en redes sociales.</span>
                    <!-- <figure>
                        <img src="https://conversa.com.py/img/social-instagram.svg" alt="instagram" onclick="window.location.href = 'https://www.instagram.com/conversa_py?igsh=Znh6OHI3NnJ6ajk4'"><img src="https://conversa.com.py/img/social-facebook.svg" alt="facebok" onclick="window.location.href = 'https://www.facebook.com/61553693372809'"><img src="https://conversa.com.py/img/social-whatsapp.svg" alt="whatsapp" onclick="window.open('https://api.whatsapp.com/send?phone=+595973236438&text=Buenas%2C+estoy+interesado+en+una+landing+page+personalizada', '_blank');"> 
                    </figure> -->
                </div>
            </div>
        </div>
    </div>    
</template>

<style scoped>
/*.contact-form {
    max-width: 600px;
    margin: auto;
}
.contact-form div {
    margin-bottom: 15px;
}
.contact-form label {
    display: block;
    margin-bottom: 5px;
}
.contact-form input,
.contact-form textarea {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
}
.contact-form button {
    padding: 10px 20px;
    background-color: var(--dark-green);
    color: white;
    border: none;
    cursor: pointer;
}
.contact-form .success {
    color: green;
    margin-top: 15px;
}
.contact-form .error {
    color: red;
    margin-top: 15px;
}
*/

.formulario-de-contacto{
    width: 70rem;
    margin: 10vh auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--dark-green);
}
.contacto-text{
    width: 100%;
}
.contacto-text > *{
    margin-bottom: 3vh;
}
.formulario-de-contacto h2{
    font-size: 2.5rem;
}
.formulario-de-contacto span{
    font-size: 1.2rem;
    display: block;
}
.contacto-row{
    display: flex;
    width: 100%;
    justify-content: space-between;
}
.formulario-de-contacto form{
    display: flex;
    width: 30rem;
    flex-direction: column;
    color: var(--dark-green);
}
.formulario-de-contacto form > *{
    margin: 1vh 0;
}
.enviado span{
    margin: 6vh 0;
    font-size: 2rem;
    font-weight: 500;
}
.formulario-de-contacto form > input[type="text"], .formulario-de-contacto form > input[type="email"] , .form-column input{
    padding: 1vh 0;
    border: none;
    border-bottom: 2px var(--dark-green) solid;
    outline: 0px solid transparent;
}
.contacto-row input[type="text"], textarea,input[type="email"]{
 font-size: 1rem;
}
textarea.textArea{
    outline: 0px solid transparent;
    border: none;
    border-bottom: 2px var(--dark-green) solid;
    padding-bottom: 5vh;

}
.form-row{
    display: flex;
    justify-content: space-between;
}
.form-column{
    display: flex;
    flex-direction: column;
}
.formulario-de-contacto label{
    font-weight: 500;
    color: var(--dark-green);
    font-size: 1.1rem;
}
.contacto-row input[type="submit"]{
    margin-top: 3vh;
    width: 8rem;
    font-weight: 500;
    padding: .15rem 0;
    color: #fff;
    background: var(--dark-green);
    font-size: 1.2rem;
    border-radius: 16px;
    border: none;
}
.contacto-row input[type="submit"]:hover{
    cursor: pointer;
    background: var(--strong-yellow);
    transition: background-color 0.3s ease;
}
.linea{
    transform: translateY(-5rem);
    height: 30rem;
    border: var(--dark-green) solid 1px;
}
.side-form > *{
    margin: 4vh 0;
}
.title{
    font-weight: 600;
}
.call-us >*, .social-media >*{
    margin-bottom: 0.5vh;
}
.call-us :last-child{
    color: var(--dark-green);
    font-weight: 500;
}
.call-us :last-child:hover{
    text-decoration: underline;
    cursor: pointer;
}
.social-media figure img{
    width: 2rem;
}
.social-media figure{
    width: 100%;
    display: flex;
    margin: 1vh 0;
    gap: 1vw;
}
.social-media figure img:hover{
    cursor: pointer;
    width: 3rem;
}

@media (max-width: 768px) {
    .formulario-de-contacto{
        width: 90vw;        
    }
    .formulario-de-contacto h2{
        font-size: 1.6rem;
    }
    .formulario-de-contacto span{
        font-size: .95rem;
    }
    .contacto-row{
        flex-direction: column;
    }
    .formulario-de-contacto form{
        width: 100%;
    }
    .form-row{
        flex-direction: column;
        gap: 3vh;
    }
    .contacto-row input[type="button"]{
        margin: 3vh auto;
    }
    .linea{
        display: none;
    }
    .side-form{
        text-align: center;
    }
    .side-form span{
        font-size: 1.05rem;
    }
    .call-us >*, .social-media >*{
        margin-bottom: 1.5vh;
    }
    .social-media{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .social-media figure{
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 3vw;
    }
    .social-media figure img{
        width: 2rem;
    }
}

</style>
