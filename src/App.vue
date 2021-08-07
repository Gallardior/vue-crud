<template>
  <header class="mb-12 shadow-xl bg-gray-700 text-white font-bold">
    <nav class="container py-4 lg:px-0 mx-auto flex justify-between items-center">
      <router-link to="/" class="font-indie"><h1>ContactsApp</h1></router-link>
      <router-link to="/crear">
        <img src="../public/icons/icon-plus.svg" alt="Agregar contacto nuevo"/>
      </router-link>
    </nav>
  </header>
  <router-view/>
</template>