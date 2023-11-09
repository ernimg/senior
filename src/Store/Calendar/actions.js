export default {
  rmAppoitment(context, payload) {
    const news = context.state.events;
    const newList = news.filter((app) => app.id !== payload);
    context.commit("remove", newList);
  },
};
