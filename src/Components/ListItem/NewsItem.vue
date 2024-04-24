<template>
  <article>
    <div class="article-wrapper">
      <figure>
        <img :src="img" alt="" />
      </figure>
      <div class="article-body">
        <h3>{{ title }}</h3>
        <p>
          {{ description }}
        </p>
      </div>
    </div>
    <div class="bar"></div>
    <base-button link mode="basicBtn" :to="newsIdUrl" class="showMore"
      >Zobacz więcej</base-button
    >
    <button class="rm_btn" v-if="isAuth" @click="removeNews(id)">
      <font-awesome-icon icon="fa-solid fa-trash" />
    </button>
  </article>
</template>
<script>
import { computed } from "vue";
// import { useRoute } from "vue-router";
import { userAuthStore } from "@/Store/auth";
export default {
  props: ["id", "title", "publishDate", "img", "description"],
  setup(props, context) {
    // const route = useRoute();
    const authStore = userAuthStore();
    const newsIdUrl = computed(() => {
      // route.path + "/" + props.id
      return "/news/" + props.id;
    });
    const isAuth = computed(() => {
      return authStore.isAuthenticated;
    });
    function removeNews(param) {
      context.emit("rm-wews", param);
    }
    return { newsIdUrl, removeNews, isAuth };
  },
};
</script>
<style lang="scss" scoped>
article {
  --img-scale: 1.001;
  --title-color: black;
  --link-icon-translate: -20px;
  --link-icon-opacity: 0;
  position: relative;
  box-shadow: none;
  background: #fff;
  transform-origin: center;
  transition: all 0.4s ease-in-out;
  overflow: hidden;
  border: solid 0.2rem #f7f7f7;

  a {
    &::after {
      position: absolute;
      inset-block: 0;
      inset-inline: 0;
      cursor: pointer;
      content: "";
    }
  }
}

figure {
  margin: 0;
  padding: 0;
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

article img {
  max-width: 100%;
  transform-origin: center;
  transform: scale(var(--img-scale));
  transition: transform 0.4s ease-in-out;
}

.article-body {
  padding: 2.4rem;
  h3 {
    margin: 0 0 18px 0;
    font-size: 1.9rem;
    letter-spacing: 0.06em;
    color: var(--title-color);
    transition: color 0.3s ease-out;
    text-align: center;
  }
  p {
    height: 26rem;
    overflow: hidden;
    font-size: 1.2rem;
    color: #555;
    letter-spacing: 0.1rem;
    text-align: justify;
    line-height: 150%;
  }
}

article:has(:hover, :focus) {
  --img-scale: 1.1;
  --title-color: #28666e;
  --link-icon-translate: 0;
  --link-icon-opacity: 1;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
}
.bar {
  height: 3.2rem;
}
.showMore {
  position: absolute;
  bottom: 0.8rem;
  left: 50%;
  transform: translatex(-50%);
}
@media screen and (max-width: 660px) {
  article {
    container: card/inline-size;
  }
}

@container card (min-width: 380px) {
  .article-wrapper {
    display: grid;
    grid-template-columns: 100px 1fr;
    gap: 16px;
  }
  .article-body {
    padding-left: 0;
  }
  figure {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  figure img {
    height: 100%;
    aspect-ratio: 1;
    object-fit: cover;
  }
}

.sr-only:not(:focus):not(:active) {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
</style>
