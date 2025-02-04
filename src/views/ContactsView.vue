<template>
    <div class="contacts-container">
      <div class="header">
        <h2>Gestión de Contactos</h2>
        <div class="search-bar">
          <input 
            type="text" 
            v-model="searchTerm" 
            placeholder="Buscar contactos..."
            class="search-input"
          >
        </div>
      </div>
  
      <!-- Mensajes -->
      <transition name="fade">
        <div v-if="errorMessage" class="message error">
          <span class="message-icon">⚠️</span>
          {{ errorMessage }}
        </div>
      </transition>
      <transition name="fade">
        <div v-if="successMessage" class="message success">
          <span class="message-icon">✓</span>
          {{ successMessage }}
        </div>
      </transition>
  
      <!-- Formulario de creación/edición -->
      <div class="form-card" :class="{ 'editing': editingContact }">
        <form @submit.prevent="handleSubmit">
          <div class="form-grid">
            <div class="form-group">
              <label>Nombre</label>
              <input 
                v-model="form.nombre" 
                type="text" 
                required
                class="form-input"
                :class="{ 'editing': editingContact }"
              />
            </div>
            <div class="form-group">
              <label>Apellido</label>
              <input 
                v-model="form.apellido" 
                type="text" 
                required
                class="form-input"
                :class="{ 'editing': editingContact }"
              />
            </div>
            <div class="form-group full-width">
              <label>Email</label>
              <input 
                v-model="form.email" 
                type="email" 
                required
                class="form-input"
                :class="{ 'editing': editingContact }"
              />
            </div>
            <div class="form-group full-width">
                <label>Mensaje</label>
                <textarea 
                  v-model="form.mensaje" 
                  rows="3"
                  class="form-input"
                ></textarea>
              </div>              
          </div>
          
          <div class="form-actions">
            <button 
              type="submit"
              class="btn btn-primary"
            >
              {{ editingContact ? 'Actualizar' : 'Crear' }}
            </button>
            <button 
              type="button" 
              v-if="editingContact" 
              @click="cancelEdit"
              class="btn btn-secondary"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
  
      <!-- Listado de contactos -->
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Email</th>
              <th>Mensaje</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="contact in filteredContacts" :key="contact.id">
              <td>{{ contact.id }}</td>
              <td>{{ contact.nombre }}</td>
              <td>{{ contact.apellido }}</td>
              <td>{{ contact.email }}</td>
              <td>{{ contact.mensaje }}</td>
              <td class="actions">
                <button 
                  @click="startEdit(contact)"
                  class="btn-icon edit"
                  title="Editar"
                >
                  ✏️
                </button>
                <button 
                  @click="confirmDelete(contact.id)"
                  class="btn-icon delete"
                  title="Eliminar"
                >
                  🗑️
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed, onMounted } from 'vue'
  import { supabase } from '../composables/useSupabase' // Ajusta la ruta
  
  interface Contact {
    id: number
    nombre: string
    apellido: string
    email: string
    mensaje: string
  }
  
  interface ContactForm {
    nombre: string
    apellido: string
    email: string
    mensaje: string
  }
  
  // Estado
  const contacts = ref<Contact[]>([])
  const editingContact = ref<Contact | null>(null)
  const searchTerm = ref('')
  const errorMessage = ref('')
  const successMessage = ref('')
  
  // Form inicial
  const initialForm: ContactForm = {
    nombre: '',
    apellido: '',
    email: '',
    mensaje: ''
  }
  const form = ref<ContactForm>({ ...initialForm })
  
  // Computed: filtrar contactos
  const filteredContacts = computed(() => {
    return contacts.value.filter(contact => {
      const searchLower = searchTerm.value.toLowerCase()
      return (
        contact.nombre.toLowerCase().includes(searchLower) ||
        contact.apellido.toLowerCase().includes(searchLower) ||
        contact.email.toLowerCase().includes(searchLower)
      )
    })
  })
  
  // Funciones para mostrar mensajes
  const showMessage = (type: 'error' | 'success', text: string) => {
    if (type === 'error') {
      errorMessage.value = text
      setTimeout(() => (errorMessage.value = ''), 3000)
    } else {
      successMessage.value = text
      setTimeout(() => (successMessage.value = ''), 3000)
    }
  }
  
  // 1) Cargar contactos (READ)
  const loadContacts = async () => {
    try {
      const { data, error } = await supabase
        .from('contacts')
        .select('*')
        .order('id', { ascending: false })
  
      if (error) {
        showMessage('error', error.message)
      } else if (data) {
        contacts.value = data as Contact[]
      }
    } catch (err) {
      showMessage('error', 'Error al cargar los contactos')
      console.error(err)
    }
  }
  
  // 2) Crear contacto (CREATE)
  const createContact = async () => {
    try {
      const { data, error } = await supabase
      .from('contacts')
      .insert([{ 
        nombre: form.value.nombre,
        apellido: form.value.apellido,
        email: form.value.email,
        mensaje: form.value.mensaje
        }])
      if (error) {
        showMessage('error', error.message)
      } else {
        showMessage('success', 'Contacto creado exitosamente')
        form.value = { ...initialForm }
        // recargar la lista
        loadContacts()
      }
    } catch (error) {
      showMessage('error', 'Error al crear el contacto')
      console.error(error)
    }
  }
  
  // 3) Iniciar edición
  const startEdit = (contact: Contact) => {
    editingContact.value = contact
    form.value = { 
      nombre: contact.nombre,
      apellido: contact.apellido,
      email: contact.email,
      mensaje: contact.mensaje
    }
  }
  
  // Cancelar edición
  const cancelEdit = () => {
    editingContact.value = null
    form.value = { ...initialForm }
  }
  
  // 4) Actualizar contacto (UPDATE)
  const updateContact = async () => {
    try {
      if (!editingContact.value) return
  
      const { data, error } = await supabase
        .from('contacts')
        .update({ 
          nombre: form.value.nombre,
          apellido: form.value.apellido,
          email: form.value.email,
            mensaje: form.value.mensaje
        })
        .eq('id', editingContact.value.id)
  
      if (error) {
        showMessage('error', error.message)
      } else {
        showMessage('success', 'Contacto actualizado exitosamente')
        cancelEdit()
        loadContacts()
      }
    } catch (error) {
      showMessage('error', 'Error al actualizar el contacto')
      console.error(error)
    }
  }
  
  // 5) Eliminar contacto (DELETE)
  const deleteContact = async (id: number) => {
    try {
      const { data, error } = await supabase
        .from('contacts')
        .delete()
        .eq('id', id)
  
      if (error) {
        showMessage('error', error.message)
      } else {
        showMessage('success', 'Contacto eliminado exitosamente')
        loadContacts()
      }
    } catch (error) {
      showMessage('error', 'Error al eliminar el contacto')
      console.error(error)
    }
  }
  
  const confirmDelete = (id: number) => {
    if (window.confirm('¿Estás seguro de eliminar este contacto?')) {
      deleteContact(id)
    }
  }
  
  // 6) handleSubmit: decide si crear o actualizar
  const handleSubmit = async () => {
    if (editingContact.value) {
      await updateContact()
    } else {
      await createContact()
    }
  }
  
  // 7) onMounted -> cargar la lista
  onMounted(() => {
    loadContacts()
  })
  </script>

<style scoped>
/* Los estilos se mantienen igual que en la versión anterior */
.contacts-container {
  max-width: 900px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.header h2 {
  font-size: 1.8rem;
  color: #2c3e50;
  margin: 0;
}

.search-bar {
  width: 300px;
}

.search-input {
  width: 100%;
  padding: 0.6rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.search-input:focus {
  outline: none;
  border-color: #4299e1;
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.2);
}

.message {
  padding: 1rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
}

.message-icon {
  margin-right: 0.5rem;
}

.error {
  background-color: #fff5f5;
  color: #c53030;
  border: 1px solid #feb2b2;
}

.success {
  background-color: #f0fff4;
  color: #2f855a;
  border: 1px solid #9ae6b4;
}

.form-card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  border: 1px solid #e2e8f0;
}

.form-card.editing {
  border-color: #4299e1;
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.2);
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group.full-width {
  grid-column: span 2;
}

.form-group label {
  font-size: 0.9rem;
  color: #4a5568;
  margin-bottom: 0.5rem;
}

.form-input {
  padding: 0.6rem;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.form-input:focus {
  outline: none;
  border-color: #4299e1;
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.2);
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.8rem;
}

.btn {
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
}

.btn-primary {
  background-color: #4299e1;
  color: white;
}

.btn-primary:hover {
  background-color: #3182ce;
}

.btn-secondary {
  background-color: #edf2f7;
  color: #4a5568;
}

.btn-secondary:hover {
  background-color: #e2e8f0;
}

.table-container {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
}

th {
  background-color: #f7fafc;
  color: #4a5568;
  font-weight: 600;
  padding: 1rem;
  text-align: left;
  font-size: 0.9rem;
  border-bottom: 2px solid #e2e8f0;
}

td {
  padding: 1rem;
  border-bottom: 1px solid #e2e8f0;
  color: #2d3748;
  font-size: 0.9rem;
}

tr:last-child td {
  border-bottom: none;
}

.actions {
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
}

.btn-icon {
  padding: 0.5rem;
  border: none;
  background: none;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.btn-icon:hover {
  background-color: #f7fafc;
}

.edit:hover {
  color: #4299e1;
}

.delete:hover {
  color: #e53e3e;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .form-grid {
    grid-template-columns: 1fr;
  }

  .form-group.full-width {
    grid-column: span 1;
  }

  .header {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
  }

  .search-bar {
    width: 100%;
  }
}
</style>
  