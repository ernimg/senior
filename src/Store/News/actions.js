import getters from "./getters";

export default {
  async rmNews(context, payload) {
    const news = context.state.news;
    const newList = news.filter((news) => news.id !== payload);
    const token = context.rootGetters["Auth/getToken"];

    await fetch(
      `https://senior-38e13-default-rtdb.firebaseio.com/posts/${payload}.json?auth=` +
        token,
      {
        method: "DELETE",
      }
    )
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error deleting the file:", error);
      });

    context.commit("remove", newList);
  },
  async createNews(context, payload) {
    const news = {
      title: payload.title,
      date: new Date().toDateString(),
      description: payload.description,
      author: payload.author,
      images: [],
    };

    const cloudName = "dz3kblnlk";

    for (const img of payload.img) {
      const timestamp = Math.round(new Date().getTime() / 1000);
      const fd = new FormData();
      fd.append("upload_preset", "ml_default");
      fd.append("api_key", "235334789777131");
      fd.append("timestamp", timestamp);
      fd.append("folder", news.title);
      fd.append("tags", "xxx");
      fd.append("file", img);

      await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/upload`, {
        method: "POST",
        body: fd,
      })
        .then((response) => response.json())
        .then((data) => {
          news.images.push(data.url);
        })
        .catch((error) => {
          console.error("Error uploading the file:", error);
        });
    }

    news.id = "id" + Math.random().toString(15).slice(2);
    const token = context.rootGetters["Auth/getToken"];
    await fetch(
      `https://senior-38e13-default-rtdb.firebaseio.com/posts/${news.id}.json?auth=` +
        token,
      {
        method: "PUT",
        body: JSON.stringify(news),
      }
    )
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error uploading the file:", error);
      });

    context.commit("addNews", news);
  },
  async loadNews(context, payload) {
    console.log(payload.foreceRefresh, !getters.shouldUpdate);
    if (payload.foreceRefresh && !getters.shouldUpdate) return;

    const news = [];
    await fetch(`https://senior-38e13-default-rtdb.firebaseio.com/posts.json`)
      .then((response) => response.json())
      .then((data) => {
        for (const key in data) {
          const item = {
            id: key,
            title: data[key].title,
            description: data[key].description,
            publishDate: data[key].publishDate,
            author: data[key].author,
            images: data[key].images,
          };

          news.push(item);
        }
      })
      .catch((error) => {
        console.error("Error get the news:", error);
      });

    context.commit("setNews", news);
    context.commit("setTime");
  },
};
