<template lang="">
  <div v-if="this.influencer.length == 0">
    <h2>Empty</h2>
  </div>
  <div v-else class="flex flex-col md:flex-row justify-between">
    <div
      class="rounded-lg overflow-hidden shadow-lg w-1/4 mx-4 h-full bg-gray-50 border border-gray-200 mb-4"
    >
      <div class="relative">
        <img
          class="h-full w-full object-cover"
          :src="influencer[0].pic"
          alt="Mountain"
        />
        <div class="absolute bottom-3 left-0 ...">
          <router-link
            :to="{
              name: 'PicForm',
              params: { id: id },
              state: { name: influencer[0].name },
            }"
          >
            <div
              class="overflow-hidden w-auto shadow p-2 rounded-lg bg-yellow-500 mx-3 flex justify-center align-middle px-9"
            >
              <button>
                <font-awesome-icon color="#ffffff" icon="fa-solid fa-pencil" />
              </button>
            </div>
          </router-link>
        </div>
      </div>

      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ influencer[0].name }}</div>
        <p class="text-gray-700 text-base">
          {{ influencer[0].country["name"] }}
        </p>
      </div>
      <div class="px-6 py-4">
        <router-link
          :to="{
            name: 'ScoreForm',
            params: { id: id },
            state: { name: influencer[0].name },
          }"
        >
          <div class="flex flex-row pb-2 pr-2">
            <div
              class="w-auto shadow p-2 rounded-lg bg-green-400 flex justify-center align-middle px-11"
            >
              {{ influencer[0].score.$numberDecimal }}
            </div>
          </div>
        </router-link>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span
          v-for="tags in influencer[0].tags"
          :key="tags"
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >{{ tags }}</span
        >
      </div>
      <div class="px-6 pb-2 flex mr-2 flex-wrap">
        <div
          class="flex flex-row pb-2 pr-2"
          v-for="platform in influencer[0].platforms"
          :key="platform"
        >
          <a :href="platform.link" target="_blank">
            <div class="bg-black p-3 rounded-l-lg">
              <h1 class="text-white">{{ platform.platform }}</h1>
            </div></a
          >
          <div
            class="bg-red-700 p-3 rounded-r-lg"
            @click="delete_platform(platform._id)"
          >
            <font-awesome-icon color="#ffffff" icon="fa-solid fa-trash-can" />
          </div>
        </div>
        <router-link
          :to="{
            name: 'PlatformForm',
            params: { id: id },
            state: { name: influencer[0].name },
          }"
        >
          <div class="flex flex-row pb-2 pr-2">
            <div class="bg-gray-400 p-3 rounded-lg">
              <font-awesome-icon
                color="#ffffff"
                icon="fa-solid fa-plus"
                size="lg"
              />
            </div>
          </div>
        </router-link>
      </div>
    </div>

    <div class="flex justify-start flex-wrap px-5 w-3/4">
      <div
        class="h-96 mx-3 mb-20 rounded-lg shadow-lg"
        v-for="post in influencer[0].posts"
        :key="post"
      >
        <div class="h-full shadow">
          <a :href="post.file" target="_blank">
            <img
              :src="post.thumbnail"
              class="object-cover h-full rounded-t-lg"
            />
          </a>
          <div
            class="bg-red-700 flex mx-auto py-2 justify-center rounded-b-lg"
            @click="delete_post(post._id)"
          >
            <h2 class="text-lg">
              <font-awesome-icon color="#ffffff" icon="fa-solid fa-trash-can" />
            </h2>
          </div>
        </div>
      </div>
      <router-link
        :to="{
          name: 'PostForm',
          params: { id: id },
          state: { name: influencer[0].name },
        }"
      >
        <div
          class="overflow-hidden h-96 shadow rounded-lg bg-gray-500 mx-3 flex justify-center align-middle px-9"
        >
          <button>
            <font-awesome-icon
              color="#ffffff"
              icon="fa-solid fa-plus"
              size="lg"
            />
          </button>
        </div>
      </router-link>
    </div>

    <!-- <div class="flex">
      <div
        v-for="post in influencer[0].posts"
        :key="post"
        class="flex flex-wrap w-3/4"
      >
        <div class="m-10 relative flex flex-col rounded-lg">
          <img
            class="cover"
            :src="post.thumbnail"
            alt="Sunset in the mountains"
          />
          <button
            class="w-full h-auto bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 inline-flex items-center"
          >
            <svg
              class="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span>Download</span>
          </button>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "InfluencerDetail",
  data() {
    return {
      id: "",
      influencer: [],
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    this.fetchData();
  },
  methods: {
    async delete_platform(event) {
      if (confirm(event)) {
        this.$isLoading(true);
        await axios
          .delete(
            process.env.VUE_APP_ROOTURL +
              "/platforms/" +
              this.id +
              "/" +
              event +
              ""
          )
          .then(() => {
            this.fetchData();

            this.$isLoading(false);
          })
          .catch((error) => {
            console.log(error);
            this.$isLoading(false);
          });
      } else {
        console.log("no");
      }
    },
    async delete_post(event) {
      if (confirm(event)) {
        this.$isLoading(true);
        await axios
          .delete(
            process.env.VUE_APP_ROOTURL + "/posts/" + this.id + "/" + event + ""
          )
          .then(() => {
            this.fetchData();

            this.$isLoading(false);
          })
          .catch((error) => {
            console.log(error);
            this.$isLoading(false);
          });
      } else {
        console.log("no");
      }
    },
    async fetchData() {
      this.$isLoading(true);
      await axios
        .get(process.env.VUE_APP_ROOTURL + "/influencer/" + this.id + "")
        .then((response) => {
          if (response.status == "200") {
            this.influencer = response.data;
            console.log("jumlah : " + this.influencer.length);
          }

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
