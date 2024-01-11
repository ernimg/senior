<template>
  <header class="header">
    <router-link class="logo" to="/"
      ><img
        src="../../Assets/img/324926660_1650716752028103_6854250667136713309_n.jpg"
        alt="logo"
    /></router-link>
    <nav class="main-nav">
      <ul class="main-nav-list">
        <li>
          <router-link class="main-nav-link" to="/news"
            >Aktualności</router-link
          >
        </li>
        <li>
          <router-link class="main-nav-link" to="/eventCalendar"
            >Terminy wydarzeń</router-link
          >
        </li>
        <li>
          <router-link class="main-nav-link" to="/gallery"
            >Galeria zdjęć</router-link
          >
        </li>
        <li>
          <router-link class="main-nav-link" to="/contact">Kontakt</router-link>
        </li>
        <li v-if="!isAuth">
          <router-link class="main-nav-link nav-cta" to="/auth?redirect=addPost"
            >Logowanie</router-link
          >
        </li>
        <li v-else>
          <router-link class="main-nav-link nav-cta" @click="logOut" to="#">
            Wyloguj</router-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const isAuth = computed(() => {
      console.log("auth - " + store.getters["Auth/isAuthenticated"]);
      return store.getters["Auth/isAuthenticated"];
    });
    function logOut() {
      store.dispatch("Auth/logOut");
      router.replace("/");
    }
    return {
      isAuth,
      logOut,
    };
  },
};
</script>
<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fdf2e9;

  height: 9.6rem;
  padding: 0 4.8rem;
  position: relative;
}
.logo {
  padding: 2rem 5rem 2rem 0;
}
.logo img {
  width: 15rem;
}
/**************************/
/* NAVIGATION */
/**************************/

.main-nav-list {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 4.8rem;
}

.main-nav-link:link,
.main-nav-link:visited {
  display: inline-block;
  text-decoration: none;
  color: #333;
  font-weight: 500;
  font-size: 1.8rem;
  transition: all 0.3s;
}

.main-nav-link:hover,
.main-nav-link:active {
  color: #f19000;
}

.main-nav-link.nav-cta:link,
.main-nav-link.nav-cta:visited {
  padding: 1.2rem 2.4rem;
  border-radius: 9px;
  color: #fff;
  background-color: #e67e22;
}

.main-nav-link.nav-cta:hover,
.main-nav-link.nav-cta:active {
  background-color: #f19000;
}

/* STICKY NAVIGATION */
.header {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 8rem;
  padding-top: 0;
  padding-bottom: 0;
  background-color: rgba(255, 255, 255, 0.97);
  z-index: 999;
  box-shadow: 0 1.2rem 3.2rem rgba(0, 0, 0, 0.03);
}
</style>
