<template>
  <div>
    <nav class="bg-black border-gray-200 px-2 sm:px-4 py-2.5 rounded-lg">
      <div
        class="container flex flex-wrap items-center justify-between mx-auto"
      >
        <div class="flex flex-wrap items-start">
          <img
            src="../assets/logo_white.png"
            class="h-6 mr-3 sm:h-9"
            alt="Flowbite Logo"
          />
          <img
            src="../assets/rareuser_white.png"
            class="h-6 mr-3 sm:h-9"
            alt="Flowbite Logo"
          />
        </div>

        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul
            class="flex flex-col p-4 mt-4 border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0"
          >
            <li>
              <router-link to="/">
                <a
                  href="#"
                  class="block py-2 px-4 text-slate-800 rounded-full hover:bg-slate-600 bg-white hover:text-white"
                  aria-current="page"
                  >Home</a
                >
              </router-link>
            </li>
            <li>
              <router-link to="/country">
                <a
                  href="#"
                  class="block py-2 px-4 text-slate-800 rounded-full hover:bg-slate-600 bg-white hover:text-white"
                  aria-current="page"
                  >Country</a
                >
              </router-link>
            </li>
            <li>
              <a
                href="#"
                @click="logout"
                class="block py-2 px-4 text-white rounded-full"
                aria-current="page"
                >Logout</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    msg: String,
  },
  methods: {
    logout() {
      localStorage.setItem("isAutenticated", false);
      localStorage.removeItem("token");
      this.$router.push({ name: "login" });
    },
  },
};
</script>
