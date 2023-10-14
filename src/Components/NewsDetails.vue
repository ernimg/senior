<template>
    <h2>{{ setTitle }}</h2>
</template>
<script>
export default{
    props:['newsId'],
    state(){
        return{
            selectedNenws: null,
        }
    },

    computed:{
        setTitle(){
            return this.selectedNenws.title;
        }
    },

    created(){
        this.selectedNenws = this.$store.getters['News/getNews'].find(news => news.id === this.newsId);
    }
}

</script>