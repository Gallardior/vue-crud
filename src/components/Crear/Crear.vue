<template>
  <div class="container px-4 lg:px-0 max-w-4xl mx-auto">
    <h1 class="mb-8" >Crear contacto</h1>
    <form v-on:submit="guardarContacto" class="grid grid-cols-2 gap-6">
      <input
        v-model="contacto.nombre"
        class="px-4 py-3 border shadow-md rounded-md focus:outline-none focus:ring-4" 
        type="text" 
        placeholder="Nombre">
      <input
        v-model="contacto.apellido"
        class="px-4 py-3 border shadow-md rounded-md focus:outline-none focus:ring-4" 
        type="text" 
        placeholder="Apellido">
      <input
        v-model="contacto.mail" 
        class="px-4 py-3 border shadow-md rounded-md focus:outline-none focus:ring-4" 
        type="text" 
        placeholder="Correo">
      <small class="col-span-2 block text-blue-400 text-base">Username in social networks:</small>
      <input
        v-model="contacto.linkedin" 
        class="px-4 py-3 border shadow-md rounded-md focus:outline-none focus:ring-4" 
        type="text" 
        placeholder="Linkedin">
      <input 
        v-model="contacto.github"
        class="px-4 py-3 border shadow-md rounded-md focus:outline-none focus:ring-4" 
        type="text" 
        placeholder="Twitter">
      <input
        v-model="contacto.twitter" 
        class="px-4 py-3 border shadow-md rounded-md focus:outline-none focus:ring-4" 
        type="text" 
        placeholder="Github">
      <div class="col-span-2 flex gap-4 justify-center">
        <button 
          class="transition-colors p-4 inline-block border-md bg-green-500 rounded-full text-white font-bold shadow-lg hover:bg-green-600 focus:bg-green-600 focus:ring-2 focus:ring-green-700 focus:outline-none"
          type="submit"
        >
          <img src="../../../public/icons/icon-check.svg"/>
        </button>
        <router-link
          class="transition-colors p-4 inline-block border-md bg-purple-500 rounded-full text-white font-bold shadow-lg hover:bg-purple-600 focus:bg-purple-600 focus:ring-2 focus:ring-purple-700 focus:outline-none"
          :to="{name:'Listar'}"
        >
          <img src="../../../public/icons/cancelar-icon.svg"/>
        </router-link>
      </div>
      
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        contacto: {}
      }
    },
    methods: {
      // Guardar datos del formulario en el localStorage
      guardarContacto(e) {
        e.preventDefault()
        let contactosActuales = JSON.parse(localStorage.getItem('contactos'))
        
        // Crear objeto a insertar en el localStorage 
        const userToSend = {
          nombre: this.contacto.nombre,
          apellido: this.contacto.apellido,
          mail: this.contacto.mail,
          linkedin: this.contacto.linkedin,
          github: this.contacto.github,
          twitter: this.contacto.twitter
        }

        // Insertar en el localStorage sin sobreescribir contactos antiguos
        if(!contactosActuales || contactosActuales.length == 0) {
          const contactos = [{...userToSend, id: 1}]
          localStorage.setItem('contactos', JSON.stringify(contactos))
        } else {
          // Generar id para cada contacto
          let ids = contactosActuales.map(contacto => contacto.id)
          let id = Math.max(...ids) + 1

          const toSend = contactosActuales.concat({...userToSend, id})
          localStorage.setItem('contactos', JSON.stringify(toSend))
        }

        this.$router.back()
      }
    }
  }
</script>