export default {
  async createPicture(context, payload) {
    const file = {};

    const cloudName = context.rootState.Auth.cloud_name;
    const api_key = context.rootState.Auth.cloudinary_key;
    const timestamp = Math.round(new Date().getTime() / 1000);
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
    const fd = new FormData();
    fd.append("upload_preset", "ml_default");
    fd.append("api_key", api_key);
    fd.append("timestamp", timestamp);
    fd.append("folder", "gallery");
    fd.append("tags", payload.title);
    fd.append("file", payload.images[0]);

    await fetch(url, {
      method: "POST",
      body: fd,
    })
      .then((response) => response.json())
      .then((data) => {
        file.id = data.asset_id;
        file.url = data.url;
        file.title = payload.title;
      })
      .catch((error) => {
        console.error("Error uploading the file:", error);
      });
    const token = context.rootGetters["Auth/getToken"];
    await fetch(
      `https://senior-38e13-default-rtdb.firebaseio.com/gallery/${file.id}.json?auth=` +
        token,
      {
        method: "PUT",
        body: JSON.stringify(file),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });

    context.commit("addPicture", file);
  },
  async loadGallery(context) {
    const images = [];
    await fetch(`https://senior-38e13-default-rtdb.firebaseio.com/gallery.json`)
      .then((response) => response.json())
      .then((data) => {
        for (const key in data) {
          const img = {
            id: data[key].id,
            title: data[key].title,
            url: data[key].url,
          };

          images.push(img);
        }
      });
    context.commit("setPictures", images);
  },
};
