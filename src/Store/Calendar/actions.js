export default {
  async rmAppoitment(context, payload) {
    const news = context.state.events;
    const newList = news.filter((app) => app.id !== payload);
    const token = context.rootGetters["Auth/getToken"];

    await fetch(
      `https://senior-38e13-default-rtdb.firebaseio.com/events/${payload}.json?auth=` +
        token,
      {
        method: "DELETE",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));

    context.commit("remove", newList);
  },
  async cerateEvent(context, payload) {
    const event = {
      eTitle: payload.title,
      ePhone: payload.phone,
      eDate: payload.date,
      eMail: payload.email,
    };
    event.id = "id" + Math.random().toString(15).slice(2);
    const response = await fetch(
      `https://senior-38e13-default-rtdb.firebaseio.com/events/${event.id}.json`,
      {
        method: "PUT",
        body: JSON.stringify(event),
      }
    );

    if ((await response).status != 200) {
      console.log(response);
    }

    context.commit("addEvent", event);
  },
  async lodaEvents(context) {
    const response = await fetch(
      `https://senior-38e13-default-rtdb.firebaseio.com/events.json`
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || "Faild to fetch");
      throw error;
    }
    const events = [];

    for (const key in responseData) {
      const event = {
        id: responseData[key].id,
        eTitle: responseData[key].eTitle,
        eDate: responseData[key].eDate,
        eMail: responseData[key].eMail,
        ePhone: responseData[key].ePhone,
      };
      events.push(event);
    }
    context.commit("setEvent", events);
  },
};
