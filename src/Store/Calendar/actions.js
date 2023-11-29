export default {
  rmAppoitment(context, payload) {
    const news = context.state.events;
    const newList = news.filter((app) => app.id !== payload);
    context.commit("remove", newList);
  },
  cerateEvent(context, payload) {
    const event = {
      eTitle: payload.title,
      ePhone: payload.phone,
      eDate: payload.date,
      eMail: payload.email,
    };

    event.id = "id" + Math.random().toString(15).slice(2);
    context.commit("addEvent", event);
  },
};
