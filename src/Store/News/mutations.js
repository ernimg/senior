export default {
  remove(state, payload) {
    state.news = payload;
  },
  addNews(state, payload) {
    console.log(payload);
    state.news.push(payload);
  },
};
