<template>
    <li class="news__item">
        <div class="news__header">
                <h3>{{ title }}</h3>
                <span>{{ publishDate }}</span>
        </div>
        <router-link :to="newsIdUrl">
            Zobacz więcej
       </router-link>
    </li>
</template>
<script>
export default{
    props:['id','title','publishDate'],
    computed:{
        newsIdUrl(){
            return this.$route.path + '/' + this.id;
        }
    },
}

</script>
<style scoped>
.news__item {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem 0;
  max-width: 20rem;
}
.news__header{
    display: flex;
    justify-content: space-between ;
}

</style>