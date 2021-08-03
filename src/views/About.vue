<template>
  <!-- Container -->
		<div class="container mx-auto">
			<!-- Col -->
			<h3 class="mb-4 text-2xl text-center">Crear contacto</h3>
			<form class="p-8 mb-4 bg-white rounded shadow-xl">
				<div class="mb-5">
					<label class="block mb-2 text-sm font-bold text-gray-700" for="nombre">
							Nombre
					</label>
					<input
						class="w-full p-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="nombre"
            type="text"
						placeholder="Nombre"
					/>
				</div>
				<div class="mb-5">
					<label class="block mb-2 text-sm font-bold text-gray-700" for="apellido">
						Apellido
					</label>
					<input
						class="w-full p-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
						id="apellido"
            type="text"
						placeholder="Apellido"
					/>
				</div>
				<div class="mb-5">
					<label class="block mb-2 text-sm font-bold text-gray-700" for="email">
						Email
					</label>
					<input
						class="w-full p-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
						id="email"
            type="email"
						placeholder="Email"
					/>
				</div>
        <div class="mb-5">
					<label class="block mb-2 text-sm font-bold text-gray-700" for="linkedin">
						Linkedin
					</label>
					<input
						class="w-full p-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
						id="linkedin"
            type="text"
						placeholder="Linkedin"
					/>
				</div>
        <div class="mb-5">
					<label class="block mb-2 text-sm font-bold text-gray-700" for="github">
						Github
					</label>
					<input
						class="w-full p-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
						id="github"
            type="text"
						placeholder="Github"
					/>
				</div>
        <div class="mb-5">
					<label class="block mb-2 text-sm font-bold text-gray-700" for="twitter">
						Twitter
					</label>
					<input
						class="w-full p-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
						id="twitter"
            type="text"
						placeholder="Twitter"
					/>
				</div>
				<div class="mb-6 text-center">
					<button
						class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
						type="button"
					>
						Crear
					</button>
					<button
						class="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline"
						type="button"
					>
						Cancelar
					</button>
				</div>
			</form>
  </div>
</template>
