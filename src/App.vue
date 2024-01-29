<template>
  <div id="app">
    <navbar-menu></navbar-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import NavbarMenu from '@/components/NavbarMenu.vue';

export default {
  components: {
    NavbarMenu
  },
}

</script>
