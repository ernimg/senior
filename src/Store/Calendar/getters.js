export default {
  getEvents(state) {
    return state.events;
  },
  isEvents(state) {
    console.log(state.events && state.events.length);
    return state.events && state.events.length;
  },
};
