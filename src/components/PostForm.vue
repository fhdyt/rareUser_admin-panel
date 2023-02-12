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
              <p class="text-lg font-bold text-center">Post</p>
            </div>
            <div class="pb-3">
              <input
                v-model="formData.url"
                type="text"
                class="relative block w-full appearance-none rounded-full border border-gray-300 px-5 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Url"
              />
            </div>
            <div class="pb-1">
              <input
                v-model="formData.source"
                type="text"
                class="relative block w-full appearance-none rounded-full border border-gray-300 px-5 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Source"
              />
            </div>
            <div class="pb-3">
              <input
                @change="onFileChange"
                type="file"
                class="relative block w-full appearance-none rounded-full border border-gray-300 px-5 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Tags"
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
  name: "PostFrom",
  data() {
    return {
      formData: {
        name: "",
        gender: "",
        country: "",
        tags: "",
        desc: "",
      },
      selectedFile: null,
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    this.influener_name = window.history.state.name;
  },
  methods: {
    onFileChange(e) {
      console.log(e);
      this.selectedFile = e.target.files[0];
    },
    async submitForm() {
      console.log(process.env.VUE_APP_ROOTURL);
      this.$isLoading(true);
      try {
        const fd = new FormData();
        fd.append("url", this.formData.url);
        fd.append("source", this.formData.source);
        fd.append("file", this.selectedFile, this.selectedFile.name);

        const response = await axios.post(
          process.env.VUE_APP_ROOTURL + "/posts/" + this.id + "",
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
<style lang=""></style>
