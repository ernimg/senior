export default {
  remove(state, payload) {
    state.events = payload;
  },
  addEvent(state, payload) {
    state.events.push(payload);
  },
  setEvent(state, payload) {
    state.events = payload;
  },
};
