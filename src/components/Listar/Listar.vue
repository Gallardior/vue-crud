<template>
  <div class="container px-4 lg:px-0 mx-auto">
    <h2 class="text-center">Contactos</h2>
    <div id="contactosContainer" v-for="contacto in contactosActuales" :key="contacto.id">
      <ul>
        <li>
          <p>{{ `${contacto.nombre} ${contacto.apellido}` }}</p>
          <p>{{ contacto.mail }}</p>
          <a :href="'https://linkedin.com/in/' + contacto.linkedin" target="_blank">
            <img src="../../../public/icons/linkedin-icon.svg"/>
          </a>
          <a :href="'https://twitter.com/' + contacto.twitter" target="_blank">
            <img src="../../../public/icons/twitter-icon.svg"/>
          </a>
          <a :href="'https://github.com/' + contacto.github" target="_blank">
            <img src="../../../public/icons/github-icon.svg"/>
          </a>
          <router-link
            :to="{name:'Editar', params:{id: contacto.id}}"
            class="transition-colors px-5 py-3 mx-4 inline-block border-md bg-purple-500 rounded-xl text-white font-bold shadow-lg hover:bg-purple-600 focus:bg-purple-600 focus:ring-2 focus:ring-purple-700 focus:outline-none"
          >Editar</router-link>
          <button 
            v-on:click="borrarContacto(contacto.id)"
            class="transition-colors px-5 py-3 mx-4 inline-block border-md bg-red-500 rounded-xl text-white font-bold shadow-lg hover:bg-red-600 focus:bg-red-600 focus:ring-2 focus:ring-red-700 focus:outline-none"
          >Borrar</button>
        </li>
      </ul>
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
