<template>
  <event-item
    v-for="event in EventsCalendar"
    :key="event.id"
    :e-title="event.eTitle"
    :e-date="event.eDate"
    :e-mail="event.eMail"
    :e-phone="event.ePhone"
    >{{ event.eTitle }}</event-item
  >
</template>
<script>
import EventItem from "@/Components/ListItem/EventItem.vue";
export default {
  components: {
    EventItem,
  },
  computed: {
    EventsCalendar() {
      return this.$store.getters["Events/getEvents"];
    },
  },
};
</script>
