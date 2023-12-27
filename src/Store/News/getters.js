export default {
  getNews(state) {
    return state.news;
  },
  isNews(state) {
    return state.news.length > 0 && state.news;
  },
  getLastUpdateDate(state) {
    return state.upDate;
  },
  shouldUpdate(state) {
    const updateDate = state.upDate;
    if (!updateDate) {
      console.log("pobiera pierwsze");
      return true;
    }
    const genDate = new Date().getTime();

    return (genDate - updateDate) / 1000 > 60;
  },
};
