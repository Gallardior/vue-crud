<template>
  <div class="container px-4 lg:px-0 max-w-4xl mx-auto">
    <div class="" v-for="contacto in contactosActuales" :key="contacto.id">
      <div class="p-8 mb-6 flex items-center justify-between border-2 border-gray-100 shadow-md rounded-2xl p-8 transform hover:scale-105 transition-transform">
        <div>
          <p class="mb-2 font-semibold">{{ `${contacto.nombre} ${contacto.apellido}` }}</p>
          <a :href="'mailto:' + contacto.mail" class="font-semibold">{{ contacto.mail }}</a>
        </div>
        <div class="flex gap-6 items-center">
          <a class="hover:opacity-60 transition-opacity" :href="'https://linkedin.com/in/' + contacto.linkedin" target="_blank">
            <img src="../../../public/icons/linkedin-icon.svg"/>
          </a>
          <a class="hover:opacity-60 transition-opacity" :href="'https://twitter.com/' + contacto.twitter" target="_blank">
            <img src="../../../public/icons/twitter-icon.svg"/>
          </a>
          <a class="hover:opacity-60 transition-opacity" :href="'https://github.com/' + contacto.github" target="_blank">
            <img src="../../../public/icons/github-icon.svg"/>
          </a>
          <router-link
            :to="{name:'Editar', params:{id: contacto.id}}"
            class="transition-colors p-4 inline-block border-md bg-blue-500 rounded-full text-white font-bold shadow-lg hover:bg-blue-600 focus:bg-blue-600 focus:ring-2 focus:ring-blue-700 focus:outline-none"
          >
            <img src="../../../public/icons/editar-icon.svg"/>
          </router-link>
          <button 
            v-on:click="borrarContacto(contacto.id)"
            class="transition-colors p-4 inline-block border-md bg-purple-500 rounded-full text-white font-bold shadow-lg hover:bg-purple-600 focus:bg-purple-600 focus:ring-2 focus:ring-purple-700 focus:outline-none"
          >
            <img src="../../../public/icons/borrar-icon.svg"/>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return{
        contactosActuales: []
      }
    },
    created:function () {
      this.obtenerContactos()
    },
    methods: {
      obtenerContactos() {
      // Obtener datos del localStorage
        this.contactosActuales = JSON.parse(localStorage.getItem('contactos'))
      },
      borrarContacto(id) {

        this.contactosActuales.map((contacto, i) => {
          if(contacto.id === id) {
            this.contactosActuales.splice(i, 1)
            this.actualizarContactos()
          }
        })
      },
      actualizarContactos() {

        localStorage.setItem('contactos', JSON.stringify(this.contactosActuales))
      }

    }
  }
</script>
