<template>
    <section class="news">
        <div class="news__header">
            <h2>Aktualności</h2>
        </div>
        <ul class="news__list">
            <news-item v-for="news in printNewsItems" :key="news.id" :title="news.title"
                :description="news.description" :publish-date="news.publishDate"></news-item>
        </ul>
    </section>
</template>
<script>
import NewsItem from '../Components/ListItem/NewsItem.vue'
export default {
    components: {
        NewsItem,
    },
    computed: {
        printNewsItems() {
            return this.$store.getters['News/getNews'];
        },
    },
}
</script>