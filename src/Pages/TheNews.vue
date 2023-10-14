<template>
    <section class="news">
        <div class="news__header">
            <h2>Aktualności</h2>
        </div>
        <div v-if="!isNews">
            <h3>
                Brak treści ...
            </h3>
            <p>
                Nie przejmuj się pracujemy nad tym aby ta zakładka nie była pusta :D.
            </p>
        </div>
        <ul v-else class="news__list">
            <news-item v-for="news in NewsItems" :key="news.id" :id="news.id" :title="news.title"
                :description="news.description" :publish-date="news.publishDate" ></news-item>
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
        NewsItems() {
            return this.$store.getters['News/getNews'];
        },
        isNews(){
            console.log(this.$store.getters['News/isNews']);
            return this.$store.getters['News/isNews'];
        }
    },
}
</script>