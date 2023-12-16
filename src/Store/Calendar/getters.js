export default {
  getEvents(state) {
    return state.events;
  },
  isEvents(state) {
    return state.events && state.events.length;
  },
};
