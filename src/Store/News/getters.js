export default{
    getNews(state){
        return state.news;
    },
    isNews(state){
        return state.news.length > 0 && state.news;
    },
}