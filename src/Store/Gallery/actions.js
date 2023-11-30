export default {
  createPicture(context, payload) {
    const picture = {
      title: payload.title,
      images: payload.images,
    };
    picture.id = "id" + Math.random().toString(15).slice(2);
    context.commit("addPicture", picture);
  },
};
