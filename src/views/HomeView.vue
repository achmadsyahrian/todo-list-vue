<template>
  <div class="home">
    <div class="flex items-center justify-between h-screen px-4 py-8">
      <!-- Kiri: Teks -->
      <div class="w-1/2 text-left ml-10">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">Welcome to the ToDo List</h1>
        <p class="text-lg text-gray-600">
          This is my simple project about tasks management dan authentication.
        </p>
        <a href="https://instagram.com/_achrian" target="_blank" class="text-slate-500 mt-3 italic flex items-center">
          By : Syahrian 
          <i class="fab fa-instagram ml-2"></i>
        </a>

      </div>

      <!-- Kanan: Gambar -->
      <div class="w-1/2 flex justify-center"> <!-- Add flex and justify-end here -->
        <img src="/images/hero/hero.svg" alt="Dashboard Image" class="w-2/3 h-auto object-cover">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView"
}
</script>

<style scoped>
/* Anda bisa menambahkan style khusus jika perlu */
</style>
