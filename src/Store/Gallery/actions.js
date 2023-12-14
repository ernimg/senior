import axios from "axios";

export default {
  async createPicture(context, payload) {
    const file = {};

    const cloudName = "dz3kblnlk";
    const timestamp = Math.round(new Date().getTime() / 1000);
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
    const fd = new FormData();
    fd.append("upload_preset", "ml_default");
    fd.append("api_key", "235334789777131");
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

    context.commit("addPicture", file);
  },

  async loadGallery(context, payload) {
    const url = `https://api.cloudinary.com/v1_1/dz3kblnlk/resources/image/upload.json`;
    // const response = await axios.get(
    //   "https://235334789777131:vkX_nb9HpGiYBhNJZiZJzSQAEFY@api.cloudinary.com/v1_1/dz3kblnlk/resources"
    // );
    // console.log("***response msg***");
    // console.log(response);

    const api_key = "235334789777131";
    const api_secret = "vkX_nb9HpGiYBhNJZiZJzSQAEFY";
    await fetch(url, {
      method: "GET",
      // mode: "no-cors",
      headers: {
        Authorization: "Basic " + btoa(api_key + ":" + api_secret),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error uploading the file:", error);
      });
    console.log(files);
    console.log(context, payload);
  },
};
