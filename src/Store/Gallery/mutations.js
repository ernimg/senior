export default {
  addPicture(state, payload) {
    console.log(payload);
    state.images.push(payload);
  },
};
