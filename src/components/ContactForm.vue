<script setup>
import { ref } from 'vue';
import { supabase } from '../composables/useSupabase'

const form = ref({
    nombre: '',
    apellido: '',
    email: '',
    mensaje: ''
});

const successMessage = ref('');
const errorMessage = ref('');
const showSuccessPopup = ref(false);

async function addContact(contactData) {
  const { data, error } = await supabase
    .from('contacts')
    .insert([
      {
        nombre: contactData.nombre,
        apellido: contactData.apellido,
        email: contactData.email,
        mensaje: contactData.mensaje
      }
    ]);

  if (error) {
    console.error('Error insertando contacto', error);
    return null;
  }
  return data;
}


const submitForm = async () => {
  const { data, error } = await supabase
    .from('contacts')
    .insert([ form.value ]);
  if (error) {
    errorMessage.value = error.message;
  } else {
    successMessage.value = 'Mensaje enviado con éxito.';
    showSuccessPopup.value = true;
    form.value = { nombre: '', apellido: '', email: '', mensaje: '' };
  }
};

const closePopup = () => {
  showSuccessPopup.value = false;
};
</script>

<template>
  <div class="formulario-de-contacto">
    <div class="contacto-text">
      <h2>Hablemos</h2>
      <span>Atendemos tu solicitud lo antes posible.</span>
    </div>
    <div class="contacto-row">
      <form class="contactForm" @submit.prevent="submitForm">
        <div class="form-row">
          <div class="form-column">
            <label>Nombre</label>
            <input id="nombre" type="text" name="nombre" required v-model="form.nombre">
          </div>
          <div class="form-column">
            <label>Apellido</label>
            <input id="apellido" type="text" name="apellido" required v-model="form.apellido">
          </div>
        </div>
        <label>Correo</label>
        <input id="mail" type="email" name="correo" required v-model="form.email">
        <label id="mensaje" class="textArea">Mensaje</label>
        <textarea class="textArea" type="text" name="mensaje" required v-model="form.mensaje" />
        <input type="submit" value="Enviar">
      </form>
      <div class="linea"></div>
      <div class="side-form">
        <div class="call-us">
          <span class="title">Llámanos</span>
          <span>Te atendemos en horario de oficina.</span>
          <span onclick="window.location.href = 'tel:+595992264576'">(+595) 992 264 576</span>
        </div>
        <div class="social-media">
          <span class="title">Conocenos</span>
          <span>Leemos tus mensajes en nuestras redes sociales.</span>
          <figure>
            <img src="/img/instagram-g.svg" alt="Instagram" onclick="window.open('https://www.instagram.com/nubetec.py?igsh=MWtuMDVnNDZxNzI3ag==')">
            <img src="/img/facebook-g.svg" alt="Facebook" onclick="window.open('https://www.facebook.com/share/FnbZKxwbDoAEDZZ5/')">
            <img src="/img/whatsapp-g.svg" alt="WhatsApp" onclick="window.open('https://wa.me/595992264576')">
          </figure>
        </div>
      </div>
    </div>
    <div v-if="showSuccessPopup" class="popup-overlay">
      <div class="popup-content">
        <p>{{ successMessage || '¡Tu mensaje fue enviado con éxito!' }}</p>
        <button @click="closePopup">Cerrar</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Popup base */
.popup-overlay {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.popup-content {
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  width: 80%;
  max-width: 400px;
  text-align: center;
}
.popup-content button {
  margin-top: 1rem;
  background-color: var(--dark-green);
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 8px;
}
.popup-content button:hover {
  background-color: var(--strong-yellow);
}

/* Estilos base */
.formulario-de-contacto {
  width: 70rem;
  margin: 10vh auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--dark-green);
}
.contacto-text {
  width: 100%;
}
.contacto-text > * {
  margin-bottom: 3vh;
}
.formulario-de-contacto h2 {
  font-size: 2.5rem;
}
.formulario-de-contacto span {
  font-size: 1.2rem;
  display: block;
}
.contacto-row {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.formulario-de-contacto form {
  display: flex;
  width: 30rem;
  flex-direction: column;
  color: var(--dark-green);
}
.formulario-de-contacto form > * {
  margin: 1vh 0;
}
.enviado span {
  margin: 6vh 0;
  font-size: 2rem;
  font-weight: 500;
}
.formulario-de-contacto form > input[type="text"],
.formulario-de-contacto form > input[type="email"],
.form-column input {
  padding: 1vh 0;
  border: none;
  border-bottom: 2px var(--dark-green) solid;
  color: var(--dark-green);
  outline: 0px solid transparent;
}
.contacto-row input[type="text"],
textarea,
input[type="email"] {
  font-size: 1rem;
}
textarea.textArea {
  outline: 0px solid transparent;
  border: none;
  border-bottom: 2px var(--dark-green) solid;
  color: var(--dark-green);
  padding-bottom: 5vh;
}
.form-row {
  display: flex;
  justify-content: space-between;
}
.form-column {
  display: flex;
  flex-direction: column;
}
.formulario-de-contacto label {
  font-weight: 500;
  color: var(--dark-green);
  font-size: 1.1rem;
}
.contacto-row input[type="submit"] {
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
.contacto-row input[type="submit"]:hover {
  cursor: pointer;
  background: var(--strong-yellow);
  transition: background-color 0.3s ease;
}
.linea {
  transform: translateY(-5rem);
  height: 30rem;
  border: var(--dark-green) solid 1px;
}
.side-form > * {
  margin: 4vh 0;
}
.title {
  font-weight: 600;
}
.call-us > *,
.social-media > * {
  margin-bottom: 0.5vh;
}
.call-us :last-child {
  color: var(--dark-green);
  font-weight: 500;
}
.call-us :last-child:hover {
  text-decoration: underline;
  cursor: pointer;
}
.social-media figure img {
  width: 2rem;
}
.social-media figure {
  width: 100%;
  display: flex;
  margin: 1vh 0;
  gap: 1vw;
}
.social-media figure img:hover {
  cursor: pointer;
  transform: scale(1.1);
}

/* Rango Tablet: 769px a 1175px */
@media screen and (max-width: 1175px) {
    .formulario-de-contacto {
      width: 90%;
      margin: 5vh auto;
    }
    
    .contacto-row {
      flex-direction: column;
      gap: 3rem;
    }
    
    .formulario-de-contacto form {
      width: 100%;
      max-width: 600px;
      margin: 0 auto;
    }
    
    .formulario-de-contacto h2 {
      font-size: 2.2rem;
    }
    
    .formulario-de-contacto span {
      font-size: 1.1rem;
    }
    
    .linea {
      display: none;
    }
    
    .side-form {
      text-align: center;
      padding-top: 2rem;
      border-top: 1px solid var(--dark-green);
      margin-top: 3rem;
    }
    
    .contacto-row input[type="submit"] {
      width: 40%;
      padding: 0.8rem;
      font-size: 1.1rem;
    }
  }

/* Dispositivos <= 768px */
@media (max-width: 768px) {
  .formulario-de-contacto {
    width: 90vw;
  }
  .formulario-de-contacto h2 {
    font-size: 1.6rem;
  }
  .formulario-de-contacto span {
    font-size: .95rem;
  }
  .contacto-row {
    flex-direction: column;
  }
  .formulario-de-contacto form {
    width: 100%;
  }
  .form-row {
    flex-direction: column;
    gap: 3vh;
  }
  .contacto-row input[type="button"] {
    margin: 3vh auto;
  }
  .linea {
    display: none;
  }
  .side-form {
    text-align: center;
  }
  .side-form span {
    font-size: 1.05rem;
  }
  .call-us > *,
  .social-media > * {
    margin-bottom: 1.5vh;
  }
  .social-media {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .social-media figure {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 3vw;
  }
  .social-media figure img {
    width: 2rem;
  }
}

@media screen and (max-width: 1175px) and (min-width: 769px) and (orientation: landscape) {
    .contacto-row {
      flex-direction: row;
      flex-wrap: wrap;
    }
    
    .formulario-de-contacto form {
      flex: 1 1 60%;
    }
    
    .side-form {
      text-align: left;
      flex: 1 1 35%;
      border-top: none;
      margin-top: 0;
      padding-left: 2rem;
    }
  }
</style>
