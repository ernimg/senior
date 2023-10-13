export default{

    getNews(state){
        return state.news;
    },
    isNews(state){
        return state.news.lenght > 0 && state.news;
    }
}