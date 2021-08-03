<template>
  <div>
    <h1>Contactos</h1>
    <div id="contactosContainer" v-for="contacto in contactosActuales" :key="contacto.id">
      <ul>
        <li>
          <p>{{ `${contacto.nombre} ${contacto.apellido}` }}</p>
          <p>{{ contacto.mail }}</p>
          <p>{{ contacto.id }}</p>
          <router-link
            :to="{name:'Editar', params:{id: contacto.id}}"
          >Editar</router-link>
          <button v-on:click="borrarContacto(contacto.id)">Borrar</button>
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
      // Obtener datos del localStorage
      obtenerContactos() {

        const contactos = JSON.parse(localStorage.getItem('contactos'))
        this.contactosActuales = contactos
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
