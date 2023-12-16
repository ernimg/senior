import getters from "./getters.js";
import actions from "./actions.js";
import mutations from "./mutations.js";

export default {
  namespaced: true,
  state() {
    return {
      news: [
        {
          id: "n1",
          title: "Wyjazd na Wyjazd rowerowy",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare sed leo eget porttitor. Proin id dui viverra, tincidunt nisi ut, lobortis nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam lacinia, augue at porttitor luctus, augue magna interdum odio, ullamcorper hendrerit lorem risus at mi. Praesent eu bibendum nisi. Aliquam vehicula sollicitudin nisi, ut sagittis arcu bibendum id. Sed tempus lobortis purus, non tincidunt turpis maximus euismod. Donec et facilisis magna. Pellentesque venenatis volutpat nisl id volutpat. Sed nec nibh purus. Pellentesque sit amet elementum purus. Etiam nec quam in sem tincidunt cursus a quis nunc.",

          publishDate: "13.10.2023",
          author: "ernimg",
          images: [],
        },
        {
          id: "n2",
          title: "Dzień melona",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare sed leo eget porttitor. Proin id dui viverra, tincidunt nisi ut, lobortis nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam lacinia, augue at porttitor luctus, augue magna interdum odio, ullamcorper hendrerit lorem risus at mi. Praesent eu bibendum nisi. Aliquam vehicula sollicitudin nisi, ut sagittis arcu bibendum id. Sed tempus lobortis purus, non tincidunt turpis maximus euismod. Donec et facilisis magna. Pellentesque venenatis volutpat nisl id volutpat. Sed nec nibh purus. Pellentesque sit amet elementum purus. Etiam nec quam in sem tincidunt cursus a quis nunc.",

          publishDate: "13.10.2023",
          author: "ernimg",
          images: [],
        },
        {
          id: "n3",
          title: "Zajęcia z fizjoterapii",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare sed leo eget porttitor. Proin id dui viverra, tincidunt nisi ut, lobortis nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam lacinia, augue at porttitor luctus, augue magna interdum odio, ullamcorper hendrerit lorem risus at mi. Praesent eu bibendum nisi. Aliquam vehicula sollicitudin nisi, ut sagittis arcu bibendum id. Sed tempus lobortis purus, non tincidunt turpis maximus euismod. Donec et facilisis magna. Pellentesque venenatis volutpat nisl id volutpat. Sed nec nibh purus. Pellentesque sit amet elementum purus. Etiam nec quam in sem tincidunt cursus a quis nunc.",

          publishDate: "13.10.2023",
          author: "ernimg",
          images: [],
        },
      ],
    };
  },
  getters,
  actions,
  mutations,
};
