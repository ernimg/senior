<template>
    <li>
        <header class="news__header">
            <h3>{{ title }}</h3>
            <span>{{ publishDate }}</span>
            <section>
                <img :src="img" alt="img">
                <p>{{ description }}</p>
            </section>
        </header>
    </li>

</template>
<script>
export default{
    props:['img','title','description','publishDate']
}

</script>
<style scoped>
.news__header {
  background-color: white;
  width: 70%; /* You can change the size however you like. */
  height: 15em;
  padding: 1em;
  margin: 1em;
  overflow: hidden;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.4);
}
</style>