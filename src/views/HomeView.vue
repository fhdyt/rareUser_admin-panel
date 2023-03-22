<template>
  <div class="flex flex-row justify-between align-middle pb-5">
    <p class="text-2xl font-bold">List Influencer</p>
    <router-link to="/influencer/form">
      <button
        href="#"
        class="bg-black hover:bg-gray-700 text-white font-bold py-4 px-10 rounded-full"
      >
        New Influencer
      </button>
    </router-link>
  </div>

  <div class="flex justify-start flex-row flex-wrap">
    <div v-for="i in influencer" :key="i._id" class="md:w-1/3 w-full">
      <router-link :to="{ name: 'InfluencerDetail', params: { id: i._id } }">
        <div
          class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-gray-50 border border-gray-200 shadow-lg mx-3 my-3"
        >
          <img
            class="w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
            :src="i.pic"
            alt=""
          />
          <div class="p-6 flex flex-col justify-start">
            <h5 class="text-xl font-medium mb-2 pb-2">
              {{ i.name }}
            </h5>
            <router-link
              :to="{
                name: 'ScoreForm',
                params: { id: i._id },
                state: { name: i.name },
              }"
            >
              <div class="flex flex-row pb-2 pr-2">
                <div
                  class="w-auto shadow p-1 rounded-lg bg-green-400 flex justify-center align-middle px-9"
                >
                  {{ i.score.$numberDecimal }}
                </div>
              </div>
            </router-link>
            <p class="text-xs pb-2">{{ i.desc }}</p>
            <p class="text-xs pb-2">{{ i.country.name }}</p>
            <div class="py-2">
              <span
                v-for="tags in i.tags"
                :key="tags"
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-1 mb-1"
                >{{ tags }}</span
              >
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HomeView",
  data() {
    return {
      influencer: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      this.$isLoading(true);
      await axios
        .get(process.env.VUE_APP_ROOTURL + "/influencer")
        .then((response) => {
          this.influencer = response.data;
          console.log(this.influencer);
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
