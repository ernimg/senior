export default {
  rmNews(context, payload) {
    const news = context.state.news;
    const newList = news.filter((news) => news.id !== payload);
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

      console.log(img);

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

    await fetch(
      `https://senior-38e13-default-rtdb.firebaseio.com/posts/${news.id}.json`,
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
};
