export default {
  rmNews(context, payload) {
    const news = context.state.news;
    const newList = news.filter((news) => news.id !== payload);
    console.log(newList);
    context.commit("remove", newList);
  },
  createNews(context, payload) {
    const news = {
      title: payload.title,
      date: payload.date,
      description: payload.description,
      images: payload.images,
      author: payload.author,
    };
    news.id = "id" + Math.random().toString(15).slice(2);
    context.commit("addNews", news);
  },
};
