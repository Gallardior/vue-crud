<template>
  <div class="container px-4 lg:px-0 max-w-4xl mx-auto">
    <h1 class="mb-8" >Editar contacto</h1>
    <form v-on:submit="editarContacto" class="grid grid-cols-2 gap-6">
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
        contacto: {},
        contactosActuales: [],
        id: parseInt(this.$route.params.id),
        indice: Number
      }
    },
    created:function () {
      this.obtenerContactos()
    },
    methods: {
      obtenerContactos() {
      // Obtener datos del localStorage
        this.contactosActuales = JSON.parse(localStorage.getItem('contactos'))
        this.contactosActuales.map((contacto, i) => {

          if(this.contactosActuales[i].id === this.id) {
            this.contacto = this.contactosActuales[i]
            this.indice = i
          }
        })

      },
      editarContacto(e) {
      // Editar contacto en la lista de contactos actual y guardar en el LS
        e.preventDefault()

        this.contactosActuales.splice(this.indice, 1, this.contacto)
        this.actualizarContactos()
        this.$router.back()
      },
      actualizarContactos() {

        localStorage.setItem('contactos', JSON.stringify(this.contactosActuales))
      }
    }
  }
</script>
