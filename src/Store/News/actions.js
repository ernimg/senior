export default {
  rmNews(context, payload) {
    const news = context.state.news;
    const newList = news.filter((news) => news.id !== payload);
    console.log(newList);
    context.commit("remove", newList);
  },
};
