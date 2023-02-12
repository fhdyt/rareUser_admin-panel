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
                v-model="formData.username"
                type="text"
                class="relative block w-full appearance-none rounded-full border border-gray-300 px-5 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Username"
              />
            </div>
            <div class="pb-1">
              <input
                v-model="formData.password"
                type="password"
                class="relative block w-full appearance-none rounded-full border border-gray-300 px-5 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>
        </div>
        <div>
          <button
            type="submit"
            class="group relative flex w-full justify-center rounded-full border border-transparent bg-black py-4 px-4 text-sm font-medium text-white hover:bg-grey-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { useToast } from "vue-toastification";

export default {
  name: "LoginView",
  data() {
    return {
      formData: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async submitForm() {
      this.$isLoading(true);
      try {
        const response = await axios.post(
          process.env.VUE_APP_ROOTURL + "/auth/login",
          this.formData
        );
        console.log(response.data["status"]);
        if (response.data["status"]) {
          localStorage.setItem("isAutenticated", true);
          localStorage.setItem("token", response.data["token"]);
          this.$router.push({ name: "home" });
        } else {
          this.$isLoading(false);
          const toast = useToast();
          toast.error("Login Failed");
        }
      } catch (error) {
        console.error(error);
        this.$isLoading(false);
      }
    },
  },
};
</script>
<style lang=""></style>
