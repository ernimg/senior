<template>
  <section>
    <the-heading>
      <template #localization>{{ path }}</template>
      <template #default>Terminy Wydarzeń</template>
      <template #description> </template>
    </the-heading>
    <base-button mode="basicBtn" @click="updateEvents">
      <font-awesome-icon icon="fa-solid fa-rotate-right"
    /></base-button>

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
  </section>
</template>
<script>
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { calendarStore } from "@/Store/calerndar";
import EventItem from "@/Components/ListItem/EventItem.vue";
import TheHeading from "@/Components/Layout/TheHeading.vue";
export default {
  components: {
    EventItem,
    TheHeading,
  },
  setup() {
    const store = useStore();
    const calendarS = calendarStore();

    const isLoading = ref(false);
    const route = useRoute();
    const path = computed(() => {
      return route.path;
    });

    const EventsCalendar = computed(() => {
      return calendarS.getEvents;
    });
    const isEvent = computed(() => {
      return !!calendarS.isEvents;
    });
    function removeApp(param) {
      store.dispatch("Events/rmAppoitment", param);
    }
    async function updateEvents() {
      isLoading.value = true;
      try {
        await calendarS.lodaEvents();
      } catch (error) {
        console.log(error);
      }
      isLoading.value = false;
    }
    onMounted(updateEvents);

    return {
      EventsCalendar,
      removeApp,
      updateEvents,
      isEvent,
      isLoading,
      path,
      calendarS,
    };
  },
};
</script>
@/Store/callerndar@/Store/calerndar
