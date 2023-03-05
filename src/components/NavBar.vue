<template>
  <div>
    <nav
      class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900"
    >
      <div
        class="container flex flex-wrap items-center justify-between mx-auto"
      >
        <a href="https://flowbite.com/" class="flex items-center">
          <img
            src="../assets/logo_white.png"
            class="h-6 mr-3 sm:h-9"
            alt="Flowbite Logo"
          />
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul
            class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
          >
            <li>
              <router-link to="/">
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  aria-current="page"
                  >Home</a
                >
              </router-link>
            </li>
            <li>
              <router-link to="/country">
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >Country</a
                >
              </router-link>
            </li>
            <li>
              <a
                href="#"
                @click="logout"
                class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >Logout</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- <nav class="bg-black border-gray-200 px-2 sm:px-4 py-2.5 rounded-lg">
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
    </nav> -->
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
