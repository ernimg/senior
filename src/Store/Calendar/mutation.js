export default {
  remove(state, payload) {
    state.events = payload;
  },
  addEvent(state, payload) {
    console.log(payload);
    state.events.push(payload);
  },
  setEvent(state, payload) {
    state.events = payload;
  },
};
