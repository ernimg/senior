<template>
  <div class="post_header_title">
    <div class="path">
      <span>
        <!-- <slot></slot> -->
        <router-link to="Home">Home</router-link>
      </span>

      <span><slot name="localization"></slot></span>
    </div>
    <h2 class="text_heading2"><slot></slot></h2>
    <hr class="title_break" />
    <div class="details">
      <p class="post_info_date">
        <slot name="description"></slot>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/*
SPACING SYSTEM (px)
2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128

FONT SIZE SYSTEM (px)
10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98
*/
.post_header_title {
  padding: 1.2rem 0.4rem;
  background-color: rgb(247, 247, 247);

  .path {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 1.2rem;
    span,
    span a {
      font-size: 1.2rem;
      text-transform: uppercase;
      color: #e67e22;
    }
  }
  .text_heading2 {
    text-align: center;
    font-size: 2.6rem;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 0.2rem;
    color: #222222;
    font-family: "DM Sans", sans-serif;
    @media screen and (min-width: 767px) {
      font-size: 3.6rem;
    }
  }
  hr {
    height: 1px;
    border: 0;
    border-top: 0.2rem solid #e67e22;
    background: transparent;
    margin: 1.2rem auto 2.4rem auto;
    width: 5rem;
    clear: both;
  }
  .post_info_date {
    text-align: left;
    padding: 0 0.8rem;
    font-size: 1.4rem;
    line-height: 200%;
    letter-spacing: 0.1rem;
    color: #999999;
    @media screen and (min-width: 767px) {
      max-width: 76.7rem;
      margin: 0 auto;
    }
  }
}
</style>
