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
    <div class="timeline" v-else>
      <ul>
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
      </ul>
    </div>
  </section>
</template>
<script>
import { computed, onMounted, ref } from "vue";
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
      calendarS.rmAppoitment(param);
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
<style lang="scss">
.timeline {
  position: relative;
  margin: 50px auto;
  padding: 40px 0;
  width: 1000px;
  box-sizing: border-box;
  &::before {
    content: "";
    position: absolute;
    left: 50%;
    width: 2px;
    height: 100%;
    background: #c5c5c5;
  }
  ul {
    padding: 0;
    margin: 0;

    li {
      list-style: none;
      position: relative;
      width: 50%;
      padding: 20px 40px;
      box-sizing: border-box;

      &:nth-child(odd) {
        float: left;
        text-align: right;
        clear: both;
      }
      &:nth-child(even) {
        float: right;
        text-align: left;
        clear: both;
      }
    }
  }
}
.timeline ul li:nth-child(odd):before {
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  top: 24px;
  right: -6px;
  background: rgba(233, 33, 99, 1);
  border-radius: 50%;
  box-shadow: 0 0 0 3px rgba(233, 33, 99, 0.2);
}
.timeline ul li:nth-child(even):before {
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  top: 24px;
  left: -4px;
  background: rgba(233, 33, 99, 1);
  border-radius: 50%;
  box-shadow: 0 0 0 3px rgba(233, 33, 99, 0.2);
}
</style>
