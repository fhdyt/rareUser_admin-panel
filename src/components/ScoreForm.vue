<template lang="">
  <div
    class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="w-full max-w-md space-y-8">
      <form class="mt-8 space-y-6" @submit.prevent="submitForm">
        <input type="hidden" name="remember" value="true" />
        <div class="-space-y-px rounded-md shadow-sm">
          <div>
            <div class="pb-3">
              <p class="text-2xl font-bold text-center">{{ influener_name }}</p>
              <p class="text-lg font-bold text-center">Score</p>
            </div>
            <div class="pb-3">
              <input
                v-model="formData.score"
                type="text"
                class="relative block w-full appearance-none rounded-full border border-gray-300 px-5 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Score"
              />
            </div>
          </div>
        </div>
        <div>
          <button
            type="submit"
            class="group relative flex w-full justify-center rounded-full border border-transparent bg-black py-4 px-4 text-sm font-medium text-white hover:bg-grey-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "ScoreForm",
  data() {
    return {
      formData: {},
      influener_name: "",
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    this.influener_name = window.history.state.name;
    console.log(this.id);
  },
  methods: {
    async submitForm() {
      console.log(process.env.VUE_APP_ROOTURL);
      this.$isLoading(true);
      try {
        const fd = new FormData();

        fd.append("score", this.formData.score);
        const response = await axios.patch(
          process.env.VUE_APP_ROOTURL + "/influencer/score/" + this.id + "",
          fd
        );
        console.log(response.data);
        console.log(this.formData);
        this.$isLoading(false);
        this.$router.go(-1);
      } catch (error) {
        console.error(error);
        this.$isLoading(false);
      }
    },
  },
};
</script>
