<template>
  <DisplayProjects class="display-projects main-container"></DisplayProjects>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import EventBus from "../event-bus";
import ProjectsService from "../ProjectsService";
import DisplayProjects from "../components/DisplayProjects.vue";
export default {
  name: "Portfolio",
  components: {
    DisplayProjects
  }
};
</script>
