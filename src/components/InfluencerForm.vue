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
              <input
                v-model="formData.name"
                type="text"
                class="relative block w-full appearance-none rounded-full border border-gray-300 px-5 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Name"
              />
            </div>
            <div class="pb-3">
              <input
                v-model="formData.gender"
                type="text"
                class="relative block w-full appearance-none rounded-full border border-gray-300 px-5 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Gender"
              />
            </div>
            <div class="pb-3">
              <input
                v-model="formData.country"
                type="text"
                class="relative block w-full appearance-none rounded-full border border-gray-300 px-5 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Country"
              />
            </div>
            <div class="pb-3">
              <input
                v-model="formData.desc"
                type="text"
                class="relative block w-full appearance-none rounded-full border border-gray-300 px-5 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Description"
              />
            </div>
            <div class="pb-3">
              <input
                v-model="formData.tags"
                type="text"
                class="relative block w-full appearance-none rounded-full border border-gray-300 px-5 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Tags"
              />
            </div>
            <div class="pb-3">
              <span
                v-for="i in tags"
                :key="i"
                @click="selTag(i)"
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >{{ i }}</span
              >
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
  name: "InfluencerFrom",
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
      tags: [],
    };
  },
  mounted() {
    this.fetchTag();
  },
  methods: {
    selTag(value) {
      console.log(value);
      var getTags = this.formData.tags;
      if (this.formData.tags == "") {
        this.formData.tags = value;
      } else {
        this.formData.tags = getTags + " " + value;
      }
    },
    async fetchTag() {
      this.$isLoading(true);
      await axios
        .get(process.env.VUE_APP_ROOTURL + "/search/tags/all")
        .then((response) => {
          this.tags = response.data;
          console.log(this.tags);
          this.$isLoading(false);
        })
        .catch((error) => {
          console.log(error);
          this.$isLoading(false);
        });
    },
    onFileChange(e) {
      console.log(e);
      this.selectedFile = e.target.files[0];
    },
    async submitForm() {
      console.log(process.env.VUE_APP_ROOTURL);
      this.$isLoading(true);
      try {
        const fd = new FormData();
        fd.append("name", this.formData.name);
        fd.append("gender", this.formData.gender);
        fd.append("country", this.formData.country);
        fd.append("tags", this.formData.tags);
        fd.append("desc", this.formData.desc);
        fd.append("pic", this.selectedFile, this.selectedFile.name);

        const response = await axios.post(
          process.env.VUE_APP_ROOTURL + "/influencer",
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
