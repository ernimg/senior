<template>
  <header class="header_wrapper">
    <div class="mobile_nav">
      <div
        @click="toggleBurgerIcon(true)"
        class="mobile_bars"
        :class="{ active: !hamburgerMenuIsOpen }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0 0 50 50"
        >
          <path
            d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"
          ></path>
        </svg>
      </div>
      <div
        @click="toggleBurgerIcon(false)"
        class="mobile_close"
        :class="{ active: hamburgerMenuIsOpen }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0 0 50 50"
        >
          <path
            d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"
          ></path>
        </svg>
      </div>
    </div>

    <div class="main_menu_wrapper" :class="{ active: hamburgerMenuIsOpen }">
      <div class="social_wrapper">
        <a href="#">
          <svg
            class="social_item"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0,0,256,256"
          >
            <g
              fill="#e67e22"
              fill-rule="nonzero"
              stroke="none"
              stroke-width="1"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-miterlimit="10"
              stroke-dasharray=""
              stroke-dashoffset="0"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
              style="mix-blend-mode: normal"
            >
              <g transform="scale(5.12,5.12)">
                <path
                  d="M17.72266,10c-7.162,0 -7.72266,0.56066 -7.72266,7.72266v14.55469c0,7.162 0.56066,7.72266 7.72266,7.72266h14.55469c7.162,0 7.72266,-0.56066 7.72266,-7.72266v-14.50781c0,-7.206 -0.56353,-7.76953 -7.76953,-7.76953zM17,11h16c5.565,0 6,0.435 6,6v16c0,5.565 -0.435,6 -6,6h-3.28711v-9.64453h3.74023l0.56055,-4.46094h-4.29883v-3.12305c0,-1.237 0.83466,-1.87109 1.72266,-1.87109c0.888,0 2.72656,-0.02539 2.72656,-0.02539v-3.99023c0,0 -1.63564,-0.18945 -3.30664,-0.18945c-1.404,0 -2.9495,0.39592 -4.1875,1.66992c-1.259,1.295 -1.44141,3.20702 -1.44141,5.54102v1.99023h-3.75v4.46094h3.75v9.64258h-8.22852c-5.565,0 -6,-0.435 -6,-6v-16c0,-5.565 0.435,-6 6,-6z"
                ></path>
              </g>
            </g>
          </svg>
        </a>
        <a href="#"
          ><svg
            class="social_item"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0,0,256,256"
          >
            <g
              fill="#e67e22"
              fill-rule="nonzero"
              stroke="none"
              stroke-width="1"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-miterlimit="10"
              stroke-dasharray=""
              stroke-dashoffset="0"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
              style="mix-blend-mode: normal"
            >
              <g transform="scale(5.12,5.12)">
                <path
                  d="M24.84961,10c-13.772,0 -14.84961,1.07761 -14.84961,14.84961v0.30078c0,13.772 1.07761,14.84961 14.84961,14.84961h0.30078c13.772,0 14.84961,-1.07761 14.84961,-14.84961v-0.30078c0,-13.772 -1.07761,-14.84961 -14.84961,-14.84961zM23.75195,11h2.49609c11.826,0 12.75195,0.92595 12.75195,12.75195v2.49609c0,11.826 -0.92595,12.75195 -12.75195,12.75195h-2.49609c-11.826,0 -12.75195,-0.92595 -12.75195,-12.75195v-2.49609c0,-11.826 0.92595,-12.75195 12.75195,-12.75195zM33.49609,15c-0.828,0.002 -1.49809,0.67491 -1.49609,1.50391c0.002,0.828 0.67491,1.49809 1.50391,1.49609c0.828,-0.002 1.49809,-0.67491 1.49609,-1.50391c-0.002,-0.828 -0.67491,-1.49809 -1.50391,-1.49609zM24.98047,17c-4.418,0.011 -7.99147,3.60153 -7.98047,8.01953c0.01,4.418 3.60153,7.99147 8.01953,7.98047c4.418,-0.01 7.99147,-3.60153 7.98047,-8.01953c-0.01,-4.418 -3.60153,-7.99147 -8.01953,-7.98047zM24.98242,18c3.866,-0.009 7.00858,3.11642 7.01758,6.98242c0.009,3.866 -3.11642,7.00858 -6.98242,7.01758c-3.866,0.009 -7.00858,-3.11642 -7.01758,-6.98242c-0.009,-3.866 3.11642,-7.00858 6.98242,-7.01758z"
                ></path>
              </g>
            </g></svg
        ></a>
        <a href="#">
          <svg
            class="social_item"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0,0,256,256"
          >
            <g
              fill="#e67e22"
              fill-rule="nonzero"
              stroke="none"
              stroke-width="1"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-miterlimit="10"
              stroke-dasharray=""
              stroke-dashoffset="0"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
              style="mix-blend-mode: normal"
            >
              <g transform="scale(5.12,5.12)">
                <path
                  d="M25,12c-13.508,0 -15.31197,0.13547 -17.04297,1.85547c-1.731,1.721 -1.95703,4.45553 -1.95703,11.14453c0,6.689 0.22603,9.42353 1.95703,11.14453c1.731,1.72 3.53497,1.85547 17.04297,1.85547c13.508,0 15.31197,-0.13547 17.04297,-1.85547c1.731,-1.721 1.95703,-4.45553 1.95703,-11.14453c0,-6.689 -0.22603,-9.42353 -1.95703,-11.14453c-1.731,-1.72 -3.53497,-1.85547 -17.04297,-1.85547zM25,13c13.937,0 15.20775,0.36206 16.21875,1.41406c1.012,1.052 1.78125,1.78594 1.78125,10.58594c0,8.8 -0.77702,9.54959 -1.79102,10.55859c-1.034,1.03 -2.04398,1.44141 -16.20898,1.44141c-14.165,0 -15.2683,-0.44505 -16.2793,-1.49805c-1.012,-1.052 -1.7207,-1.81495 -1.7207,-10.50195c0,-8.687 0.76925,-9.53394 1.78125,-10.58594c1.011,-1.052 3.16875,-1.41406 16.21875,-1.41406zM21.75977,19.41406v11.17188l9.7168,-5.63086z"
                ></path>
              </g>
            </g></svg
        ></a>
      </div>
      <nav class="nav_wrapper">
        <ul class="main_nav_list">
          <li class="nav_limk">
            <router-link @click="toggleBurgerIcon(false)" to="/"
              >Senior <span>+</span></router-link
            >
          </li>
          <li class="nav_limk">
            <router-link @click="toggleBurgerIcon(false)" to="/news"
              >Aktualności</router-link
            >
          </li>
          <li class="nav_limk">
            <router-link @click="toggleBurgerIcon(false)" to="/eventCalendar"
              >Terminy wydarzeń</router-link
            >
          </li>
          <li class="nav_limk">
            <router-link @click="toggleBurgerIcon(false)" to="/gallery"
              >Galeria zdjęć</router-link
            >
          </li>
          <li class="nav_limk">
            <router-link @click="toggleBurgerIcon(false)" to="/contact"
              >Kontakt</router-link
            >
          </li>
          <li class="nav_limk" v-if="isAuth">
            <router-link @click="toggleBurgerIcon(false)" to="/admin"
              >Admin Panel</router-link
            >
          </li>
          <li class="nav_limk" v-if="isAuth">
            <router-link class="main-nav-link" @click="logOut" to="#">
              Wyloguj</router-link
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const hamburgerMenuIsOpen = ref(false);
    const isAuth = computed(() => {
      return store.getters["Auth/isAuthenticated"];
    });
    function toggleBurgerIcon(param) {
      hamburgerMenuIsOpen.value = param === false ? false : true;
    }
    function logOut() {
      store.dispatch("Auth/logOut");
      router.replace("/");
      toggleBurgerIcon(false);
    }
    return {
      isAuth,
      logOut,
      toggleBurgerIcon,
      hamburgerMenuIsOpen,
    };
  },
};
</script>
<style lang="scss" scoped>
.header_wrapper {
  overflow: hidden;
  background-color: #ede;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
}
.main_nav_list {
  padding: 0;
  margin: 0;
  list-style: none;
}
.nav_limk {
  a {
    color: #222;
    text-decoration: none;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
  }
}

.mobile_nav {
  position: fixed;
  top: 0;
  width: 100%;
  max-height: 7.1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.8rem 1.2rem 0.8rem 0;
  background-color: #fff;
  box-shadow: 0 -4px 30px rgba(0, 0, 0, 0.1);
  z-index: 1;
  @media screen and (min-width: 1024px) {
    display: none;
    position: unset;
  }

  .mobile_bars,
  .mobile_close {
    display: none;
    width: 5.5rem;
    height: 5.5rem;
    padding: 0.2rem;

    align-items: center;
    justify-content: center;
    &.active {
      display: flex;
      animation: togleBurger 0.7s ease;
      @keyframes togleBurger {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
    }
    svg {
      width: 4.5rem;
      height: 4.5rem;
      stroke: #222222;
    }
  }
}

.main_menu_wrapper {
  position: fixed;
  display: none;

  background-color: #fff;
  font-family: "DM Sans", sans-serif;

  &.active {
    height: 100dvh;
    width: 100%;
    padding: 1.2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.6rem;
    z-index: 1;
    top: 7.1rem;

    animation: show 0.7s ease;
    @media screen and (orientation: landscape) {
      overflow: scroll;
    }
    @keyframes show {
      0% {
        opacity: 0;
        left: -100%;
      }
      100% {
        opacity: 1;
        left: 0;
      }
    }
    .social_wrapper,
    .nav_wrapper {
      width: 90%;
      margin: 0 auto;
    }
    .social_wrapper {
      text-align: center;
      .social_item {
        width: 7rem;
        height: 7rem;
      }
    }
    .nav_wrapper {
      .main_nav_list {
        @media screen and (orientation: landscape) {
          min-height: 65rem;
        }
        .nav_limk {
          text-align: center;
          margin-bottom: 0.8rem;
          border-bottom: 0.5px solid #e1e1e1;
          a {
            display: block;
            padding: 0.8rem 0.2rem;
            font-size: 3rem;

            @media screen and (min-width: 720px) {
              font-size: 3.6rem;
            }
          }
        }
      }
    }
  }
  @media screen and (min-width: 1024px) {
    top: 0;
    left: 0;
    display: flex;
    width: 100%;
    height: 7.1rem;
    box-shadow: 0 -4px 30px rgba(0, 0, 0, 0.1);
    z-index: 1;

    .social_wrapper {
      flex-basis: 20%;
      padding-left: 1.2rem;
      display: flex;
      align-items: center;
      a {
        display: inline-block;
        margin: 0.2rem;
        cursor: pointer;
        .social_item {
          width: 5rem;
          height: 5rem;
        }
      }
    }
    .nav_wrapper {
      flex-basis: 80%;
      display: flex;
      .main_nav_list {
        flex-basis: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        .nav_limk {
          a {
            font-size: 1.6rem;
          }
        }
      }
    }
  }
}
</style>
