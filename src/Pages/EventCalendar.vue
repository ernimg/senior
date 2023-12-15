<template>
  <div>
    <button @click="updateEvents">Refresh</button>
    <div v-if="!isEvent">
      <h3>Brak treści ...</h3>
      <p>
        Nie przejmuj się pracujemy nad tym aby ta zakładka nie była pusta :D.
      </p>
    </div>
    <event-item
      v-else
      v-for="event in EventsCalendar"
      :key="event.id"
      :id="event.id"
      :e-title="event.eTitle"
      :e-date="event.eDate"
      :e-mail="event.eMail"
      :e-phone="event.ePhone"
      @rm-event="removeApp"
    ></event-item>
  </div>
</template>
<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import EventItem from "@/Components/ListItem/EventItem.vue";
export default {
  components: {
    EventItem,
  },
  setup() {
    const store = useStore();
    const EventsCalendar = computed(() => {
      return store.getters["Events/getEvents"];
    });
    const isEvent = computed(() => {
      return store.getters["Events/isEvents"];
    });
    function removeApp(param) {
      store.dispatch("Events/rmAppoitment", param);
    }
    function updateEvents() {
      store.dispatch("Events/lodaEvents");
    }
    onMounted(updateEvents);

    return { EventsCalendar, removeApp, updateEvents, isEvent };
  },
};
</script>
