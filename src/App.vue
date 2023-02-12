<style src="./assets/tailwind.css"></style>

<template>
  <div class="container px-10 py-3 mx-auto">
    <NavBar v-if="showNavbar" />

    <div class="py-10">
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      showNavbar: true,
    };
  },
  watch: {
    $route(to) {
      this.showNavbar = to.path !== "/login";
    },
  },
};
</script>
