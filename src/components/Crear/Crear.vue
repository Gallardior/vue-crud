<template>
  <h1>Crear contacto</h1>

  <form v-on:submit="guardarContacto">
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
    <button type="submit">Crear contacto</button>
    <router-link
      :to="{name:'Listar'}"
    >Cancelar</router-link>
  </form>
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

<style>
  form {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 1rem;
    border: 2px solid red;
  }
</style>