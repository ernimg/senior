export default {
  remove(state, payload) {
    state.news = payload;
  },
  addNews(state, payload) {
    state.news.push(payload);
  },
  setNews(state, payload) {
    state.news = payload;
  },
  setTime(state) {
    state.upDate = new Date().getTime();
  },
};
