export default {
  remove(state, payload) {
    state.news = payload;
  },
  addNews(state, payload) {
    state.news.push(payload);
  },
};
