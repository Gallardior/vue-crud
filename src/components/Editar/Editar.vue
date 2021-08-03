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

<style>
  form {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 1rem;
    border: 2px solid red;
  }
</style>