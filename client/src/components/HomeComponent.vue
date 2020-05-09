<template>
  <div class="container">
    <h1>Hello from home component!</h1>
    <!-- <div v-for="(project, index) in projects" :key="index">
			<p>{{project.title}}</p>
			<p>{{project.description}}</p>
    </div>-->
  </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import EventBus from "../event-bus";
import ProjectsService from "../ProjectsService";
export default {
  name: "HomeComponent",
  data() {
    return {
      projects: [],
      error: ""
    };
  },
  async created() {
    try {
      this.projects = await ProjectsService.getProjects();
    } catch (err) {
      this.error = err.message;
    }
  }
};
</script>