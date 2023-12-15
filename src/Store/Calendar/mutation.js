export default {
  remove(state, payload) {
    state.events = payload;
  },
  addEvent(state, payload) {
    console.log(payload);
    state.events.push(payload);
  },
  setEvent(state, payload) {
    console.log("set ivent: " + typeof payload);
    console.log("dlugosc: " + payload.length);
    state.events = payload;
  },
};
