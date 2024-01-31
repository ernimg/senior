<template>
  <the-heading>
    <template #localization></template>
    <template #default>O nas</template>
    <template #description> </template>
  </the-heading>
  <section id="about" class="about">
    <div class="container-fluid">
      <div class="row">
        <div
          class="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative overflow-hidden image_container"
        >
          <img
            class="senior"
            src="../../Assets/img/elderly-5518002_1280.png"
            alt="exampleimg "
          />
        </div>

        <div
          class="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5"
        >
          <h3>Nasz klub seniora.</h3>
          <p class="description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
            quasi earum sed, aliquam voluptatum nisi eius. In, mollitia dolore
            omnis rem excepturi animi accusantium eos odio tenetur, nemo dolor
            cupiditate.
          </p>

          <div class="icon-box">
            <div class="icon"></div>
            <h4 class="title">Atrakcje jakie zapewniamy</h4>
            <p class="description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloremque repellendus vel ea rerum sed, totam laborum, ullam,
              facere voluptatem harum maiores? Molestias autem veritatis eum
              facere, provident mollitia illo consequuntur!
            </p>
          </div>

          <div class="icon-box">
            <div class="icon"><i class="bx bx-happy-alt"></i></div>
            <h4 class="title">Przykdowy bagłówek</h4>
            <p class="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              inventore reprehenderit assumenda, hic cumque pariatur neque
              voluptatum, labore, fuga odio placeat saepe dolorum voluptates! Ad
              rem quaerat porro cupiditate excepturi.
            </p>
          </div>

          <div class="icon-box">
            <div class="icon"><i class="bx bx-user-voice"></i></div>
            <h4 class="title">Nagłówek2</h4>
            <p class="description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
              voluptatum qui harum enim, debitis provident accusamus saepe
              ratione eaque explicabo minima at possimus modi exercitationem,
              distinctio aut repellendus ab recusandae!
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import TheHeading from "../Layout/TheHeading.vue";
export default {
  components: {
    TheHeading,
  },
};
</script>
<style lang="scss" scoped>
.image_container {
  padding: 2.4rem 0;
}
.senior {
  max-width: 37rem;
  @media screen and (min-width: 767px) {
    max-width: 50rem;
  }
}
h3,
h4 {
  color: #e67e22;
  font-family: "DM Sans", sans-serif;
  font-weight: 700;
  letter-spacing: 0.2rem;
}
h3 {
  font-size: 2.4rem;
}
h4 {
  font-size: 2rem;
}
.description {
  text-align: left;
  font-size: 1.4rem;
  color: #222;
  letter-spacing: 0.1rem;
  line-height: 200%;
}
</style>
