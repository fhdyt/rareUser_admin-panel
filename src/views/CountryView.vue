<template lang="">
  <div>
    <div class="flex flex-row justify-between align-middle">
      <p class="text-2xl font-bold">List Country</p>
      <router-link to="/country/form">
        <button
          href="#"
          class="bg-black hover:bg-gray-700 text-white font-bold py-4 px-10 rounded-full"
        >
          New Country
        </button>
      </router-link>
    </div>

    <div class="flex justify-start flex-wrap pt-10">
      <div
        class="md:max-w-xl md:bg-blue-600 mx-3 mb-20 rounded-t-lg shadow-lg"
        v-for="i in country"
        :key="i.id"
      >
        <div class="h-full hadow">
          <img
            :src="`https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/${i.country_id}.svg`"
            class="object-cover w-full"
          />
        </div>
        <div
          class="border border-gray-300 flex mx-auto py-2 justify-center rounded-b-lg"
        >
          <h2 class="text-lg font-semibold">
            {{ i.name }}
          </h2>
        </div>
      </div>
    </div>

    <!-- 
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg my-5">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">_id</th>
            <th scope="col" class="px-6 py-3">Country</th>
            <th scope="col" class="px-6 py-3">Country ID</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in country" :key="i.id">
            <td class="px-6 py-4">{{ i._id }}</td>
            <td class="px-6 py-4">{{ i.name }}</td>
            <td class="px-6 py-4">{{ i.country_id }}</td>
          </tr>
        </tbody>
      </table>
    </div> -->
  </div>
</template>
<script>
import axios from "axios";
// import { useToast } from "vue-toastification";

export default {
  name: "CountryView",
  data() {
    return {
      country: [],
    };
  },
  mounted() {
    // const toast = useToast();
    // toast.info("sdfsdf");
    this.fetchData();
  },
  methods: {
    async fetchData() {
      this.$isLoading(true);
      await axios
        .get(process.env.VUE_APP_ROOTURL + "/country")
        .then((response) => {
          this.country = response.data;
          this.$isLoading(false);
        })
        .catch((error) => {
          console.log(error);
          this.$isLoading(false);
        });
    },
  },
};
</script>
<style lang=""></style>
