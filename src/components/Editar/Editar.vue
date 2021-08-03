<template>
  <h1 v-on:click="saludar">Editar contacto</h1>

  <form v-on:submit="editarContacto">
    <label>
      Nombre
      <input type="text" placeholder="Nombre" required v-model="contacto.nombre">
    </label>
    <label>
      Apellido
      <input type="text" placeholder="Apellido" v-model="contacto.apellido">
    </label>
    <label>
      Email
      <input type="email" placeholder="Email" v-model="contacto.mail">
    </label>
    <label>
      Linkedin
      <input type="text" placeholder="Linkedin" v-model="contacto.linkedin">
    </label>
    <label>
      Github
      <input type="text" placeholder="Github" v-model="contacto.github">
    </label>
    <label>
      Twitter
      <input type="text" placeholder="Twitter" v-model="contacto.twitter">
    </label>
    <button type="submit">Guardar</button>
    <router-link
      :to="{name:'Listar'}"
    >Cancelar</router-link>
  </form>
</template>

<script>
  export default {
    data() {

      return {
        contacto: {},
        contactosActuales: []
      }
    },
    created:function () {
      this.obtenerContactos()
      // console.log(this.contactosActuales)
    },
    methods: {
      obtenerContactos() {
      // Obtener datos del localStorage
        const contactos = JSON.parse(localStorage.getItem('contactos'))
        const id = parseInt(this.$route.params.id)
        
        contactos.map((contacto, i) => {
          if(contactos[i].id === id) {
            this.contacto = contactos[i]
          }
        })

        this.contactosActuales = contactos
      },
      editarContacto() {
      // Editar contacto en la lista de contactos actual
        
      }
    }
  }
</script>

<style>
  form {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 1rem;
    border: 2px solid red;
  }
</style>