<template>
  <the-heading>
    <template #localization>{{ path }}</template>
    <template #default>Panel Logowania</template>
    <template #description>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
      voluptatem dolorum quaerat eius, nostrum amet mollitia architecto nobis
      perferendis non blanditiis quos quia. Modi, molestiae doloremque. Pariatur
      quasi dolorum possimus.
    </template>
  </the-heading>
  <div class="formWrapper">
    <form class="login" @submit.prevent="logIn">
      <input type="email" id="email" placeholder="email" v-model="email" />

      <input
        type="password"
        id="password"
        placeholder="password"
        v-model="password"
      />
      <base-button mode="basicBtn">LogIn</base-button>
    </form>
  </div>
</template>
<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import TheHeading from "@/Components/Layout/TheHeading.vue";
export default {
  components: {
    TheHeading,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const store = useStore();
    const email = ref("");
    const password = ref("");
    const isLogged = ref(false);
    const err = ref("");
    const path = computed(() => {
      return route.path;
    });
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
      router.replace(queryURL);
    }

    return { email, password, isLogged, logIn, path };
  },
};
</script>
<style lang="scss" scoped>
$greenSeaweed: #e67e22;
$blueQueen: crimson;

.formWrapper {
  width: 100%;
  height: 35rem;
  position: relative;
}
.login {
  overflow: hidden;
  background-color: white;
  padding: 4rem 3rem 3rem 3rem;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 40rem;
  transform: translate(-50%, -50%);
  transition: transform 300ms, box-shadow 300ms;
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 60rem;
    height: 60rem;
    border-top-left-radius: 40%;
    border-top-right-radius: 45%;
    border-bottom-left-radius: 35%;
    border-bottom-right-radius: 40%;
    z-index: -1;
  }

  &::before {
    left: 40%;
    bottom: -130%;
    background-color: rgba($blueQueen, 0.15);
    animation: wawes 6s infinite linear;
  }

  &::after {
    left: 35%;
    bottom: -125%;
    background-color: rgba($greenSeaweed, 0.2);
    animation: (wawes 7s infinite);
  }

  > input {
    display: block;
    border-radius: 0.5rem;
    font-size: 1.6rem;
    background: white;
    width: 100%;
    border: 0;
    padding: 1rem 1rem;
    margin: 1.5rem -1rem;
  }
}
@keyframes wawes {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
