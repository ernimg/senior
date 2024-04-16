import { defineStore } from "pinia";
import { userAuthStore } from "@/Store/auth";
export const calendarStore = defineStore("calendar", {
  state: () => ({
    events: [],
  }),
  getters: {
    getEvents(state) {
      return state.events;
    },
    isEvents(state) {
      return state.events && state.events.length;
    },
  },
  actions: {
    async rmAppoitment(payload) {
      const news = this.events;
      const newList = news.filter((app) => app.id !== payload);
      const token = userAuthStore.getToken;

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

      this.events = newList;
    },

    async lodaEvents() {
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
      this.events = events;
    },
  },
});
