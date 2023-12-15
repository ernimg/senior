<template>
  <div>
    <button @click="updateEvents">Refresh</button>
    <event-item
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
    function removeApp(param) {
      store.dispatch("Events/rmAppoitment", param);
    }
    function updateEvents() {
      store.dispatch("Events/lodaEvents");
    }
    onMounted(updateEvents);

    return { EventsCalendar, removeApp, updateEvents };
  },
};
</script>
