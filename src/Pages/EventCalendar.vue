<template>
  <div>
    <button @click="updateEvents">Refresh</button>
    <base-spiner v-if="isLoading"></base-spiner>
    <div v-else-if="!isEvent && !isLoading">
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
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import EventItem from "@/Components/ListItem/EventItem.vue";

export default {
  components: {
    EventItem,
  },
  setup() {
    const store = useStore();
    const isLoading = ref(false);
    const EventsCalendar = computed(() => {
      return store.getters["Events/getEvents"];
    });
    const isEvent = computed(() => {
      return store.getters["Events/isEvents"];
    });
    function removeApp(param) {
      store.dispatch("Events/rmAppoitment", param);
    }
    async function updateEvents() {
      isLoading.value = true;
      try {
        await store.dispatch("Events/lodaEvents");
      } catch (error) {
        console.log(error);
      }
      isLoading.value = false;
    }
    onMounted(updateEvents);

    return { EventsCalendar, removeApp, updateEvents, isEvent, isLoading };
  },
};
</script>
