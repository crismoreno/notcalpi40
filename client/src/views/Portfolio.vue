<template>
  <DisplayProjects
    class="main-container display-projects d-flex flex-row flex-wrap justify-content-center"
  ></DisplayProjects>
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
