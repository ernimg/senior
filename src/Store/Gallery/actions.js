export default {
  async createPicture(context, payload) {
    const file = {};

    const cloudName = "dz3kblnlk";
    const timestamp = Math.round(new Date().getTime() / 1000);
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`;
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
};
