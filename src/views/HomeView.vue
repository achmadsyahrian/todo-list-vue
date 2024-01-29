<template>
  <div class="home">
    <div class="hero">
      <!-- Desktop -->
      <div class="container">
        <div class="row mt-5">
          <div class="col-md-7">
            <div class="d-flex h-100">
              <div class="justify-content-center align-self-center">
                <h1 class="text-white hero-text">
                  <strong>Selamat Datang,</strong> <br />
                  <span class="h3">di Todo List App</span>
                </h1>
                <p class="text-white hero-text">Buat daftar tugas harianmu sekarang juga!</p>
                <router-link class="btn btn-lg btn-dark mt-4" to="/list">
                  Mulai
                  <b-icon-arrow-right></b-icon-arrow-right>
                </router-link>
              </div>
            </div>
          </div>
          <div class="col-md-5">
            <img
              src="../assets/images/hero.svg"
              class="hero-img"
              width="100%"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>
