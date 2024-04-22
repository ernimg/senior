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
      <ul class="clearfix">
        <event-item
          v-for="event in EventsCalendar"
          :key="event.id"
          :id="event.id"
          :e-title="event.eTitle"
          :e-date="event.eDate"
          :e-mail="event.eMail"
          :e-phone="event.ePhone"
          :e-descrition="event.eDescrition"
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
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
.timeline {
  position: relative;
  margin: 5rem auto;
  padding: 4rem 0;
  width: 100rem;
  box-sizing: border-box;
  &::before {
    content: "";
    position: absolute;
    left: 50%;
    width: 0.2rem;
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
      padding: 2rem 4rem;

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
  width: 1rem;
  height: 1rem;
  top: 2.4rem;
  right: -6px;
  background: #6f916f;
  border-radius: 50%;
  box-shadow: 0 0 0 3px #86ad86;
}
.timeline ul li:nth-child(even):before {
  content: "";
  position: absolute;
  width: 1rem;
  height: 1rem;
  top: 2.4rem;
  left: -0.4rem;
  background: #6f916f;
  border-radius: 50%;
  box-shadow: 0 0 0 3px #86ad86;
}

.timeline ul li:nth-child(odd) .time {
  position: absolute;
  top: 12px;
  right: -165px;
  margin: 0;
  padding: 8px 16px;
  background: #6f916f;
  color: #fff;
  border-radius: 18px;
  box-shadow: 0 0 0 3px #86ad86;
}

.timeline ul li:nth-child(even) .time {
  position: absolute;
  top: 12px;
  left: -165px;
  margin: 0;
  padding: 8px 16px;
  background: #6f916f;
  color: #fff;
  border-radius: 18px;
  box-shadow: 0 0 0 3px #86ad86;
}
@media (max-width: 1000px) {
  .timeline {
    width: 100%;
  }
}

@media (max-width: 767px) {
  .timeline {
    width: 100%;
    padding-bottom: 0;
  }
  .timeline:before {
    left: 2rem;
    height: 100%;
  }
  .timeline ul li:nth-child(odd),
  .timeline ul li:nth-child(even) {
    width: 100%;
    text-align: left;
    padding-left: 50px;
    padding-bottom: 50px;
  }
  .timeline ul li:nth-child(odd):before,
  .timeline ul li:nth-child(even):before {
    top: -18px;
    left: 16px;
  }
  .timeline ul li:nth-child(odd) .time,
  .timeline ul li:nth-child(even) .time {
    top: -30px;
    left: 50px;
    right: inherit;
  }
}
</style>
