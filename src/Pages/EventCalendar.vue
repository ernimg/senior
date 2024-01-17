<template>
  <section>
    <the-heading>
      <template #localization>{{ path }}</template>
      <template #default>Terminy Wydarzeń</template>
      <template #description> </template>
    </the-heading>
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
  </section>
</template>
<script>
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import EventItem from "@/Components/ListItem/EventItem.vue";
import TheHeading from "@/Components/Layout/TheHeading.vue";
export default {
  components: {
    EventItem,
    TheHeading,
  },
  setup() {
    const store = useStore();
    const isLoading = ref(false);
    const route = useRoute();
    const path = computed(() => {
      return route.path;
    });
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

    return {
      EventsCalendar,
      removeApp,
      updateEvents,
      isEvent,
      isLoading,
      path,
    };
  },
};
</script>
