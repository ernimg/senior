import getters from "./getters.js";
import actions from "./actions.js";
import mutations from "./mutation.js";
export default {
  namespaced: true,
  state() {
    return {
      events: [
        {
          id: "e1",
          eTitle: "Wycieczka rowerowa",
          eDate: "12.12.2024",
          eMail: "example@gmail.com",
          ePhone: "777-111-222",
        },
        {
          id: "e2",
          eTitle: "Wycieczka rowerowa",
          eDate: "12.12.2024",
          eMail: "example@gmail.com",
          ePhone: "777-111-222",
        },
        {
          id: "e3",
          eTitle: "Wycieczka rowerowa",
          eDate: "12.12.2024",
          eMail: "example@gmail.com",
          ePhone: "777-111-222",
        },
        {
          id: "e4",
          eTitle: "Wycieczka rowerowa",
          eDate: "12.12.2024",
          eMail: "example@gmail.com",
          ePhone: "777-111-222",
        },
        {
          id: "e5",
          eTitle: "Wycieczka rowerowa",
          eDate: "12.12.2024",
          eMail: "example@gmail.com",
          ePhone: "777-111-222",
        },
      ],
    };
  },
  getters,
  actions,
  mutations,
};
