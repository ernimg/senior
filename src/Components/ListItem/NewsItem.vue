<template>
    <li class="news__item">
        <header class="news__header">
            <h3>{{ title }}</h3>
            <span>{{ publishDate }}</span>
        </header>
        <section>
            <img :src="img" alt="img">
            <p>{{ description }}</p>
        </section>
    </li>
</template>
<script>
export default{
    props:['img','title','description','publishDate']
}

</script>
<style scoped>
.news__item {
  background-color: white;
  width: 50%; 
  height: 15em;
  padding: 1em;
  margin: 1em;
  overflow: hidden;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.4);
}
.news__header{
    display: flex;
    justify-content: space-between ;
}
.news__header span{
    display: block;
}
</style>