<template>
  <div>
    <li class="card" v-for="(project, index) in projects" :key="index">
      <router-link :to="'/project/' + project.id">
        <div class="card-content d-flex flex-column">
          <div class="img-container">
            <img
              class="project-image"
              :src="require(`../assets/img/projects/${project.imgs}/cover.png`)"
            />
          </div>
          <div class="project-details d-flex flex-column justify-content-center">
            <p class="name">{{project.title}}</p>
            <!-- <p class="type">{{project.metatags}}</p> -->
            <p class="customer">{{project.customer}}</p>
          </div>
        </div>
      </router-link>
    </li>
  </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import EventBus from "../event-bus";
import ProjectsService from "../ProjectsService";
export default {
  name: "DisplayProjects",
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
