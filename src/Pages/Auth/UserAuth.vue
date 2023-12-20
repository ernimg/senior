<template>
  <h2>Strona Logowania</h2>
  <form @submit.prevent="logIn">
    <base-container>
      <div class="form-control">
        <label for="email"></label>
        <input type="email" id="email" v-model="email" />
      </div>
      <div class="form-control">
        <label for="password"></label>
        <input type="password" id="password" v-model="password" />
      </div>
      <button>LogIn</button>
    </base-container>
  </form>
</template>
<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const store = useStore();
    const email = ref("");
    const password = ref("");
    const isLogged = ref(false);
    const err = ref("");

    async function logIn() {
      const credential = {
        email: email.value,
        password: password.value,
      };
      try {
        await store.dispatch("Auth/logInToApp", credential);
      } catch (error) {
        err.value = error.message || "faild to logIn";
      }
      const queryURL = "/" + route.query.redirect || "addPost";
      console.log(queryURL);
      router.replace(queryURL);
    }

    return { email, password, isLogged, logIn };
  },
};
</script>
<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type="checkbox"] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type="checkbox"] {
  display: inline;
  width: auto;
  border: none;
}

input[type="checkbox"]:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}
</style>
