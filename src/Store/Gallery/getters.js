export default {
  getPicturest(state) {
    return state.images;
  },
  existPicures(state) {
    return state.images.length > 0 && state.images;
  },
};
