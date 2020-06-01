<template>
  <ul>
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
            <p class="customer">{{project.customer}}</p>
          </div>
        </div>
      </router-link>
    </li>
  </ul>
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
  mounted() {
    this.getAllProjects();
    EventBus.$on("SEARCH", filters => {
      this.getProjectsFiltered(filters);
    });
    EventBus.$on("EMPTY_FILTERS", () => {
      this.getAllProjects();
    });
  },
  methods: {
    getAllProjects: async function() {
      try {
        this.projects = await ProjectsService.getProjects();
      } catch (err) {
        this.error = err.message;
      }
    },
    getProjectsFiltered: async function(getFilters) {
      const { tags, codingLangs, place } = getFilters;
      if (tags) {
        try {
          this.projects = await ProjectsService.filterByTags(tags);
        } catch (err) {
          this.error = err.message;
        }
      } else if (codingLangs) {
        try {
          this.projects = await ProjectsService.filterByCodingLang(codingLangs);
        } catch (err) {
          this.error = err.message;
        }
      } else {
        try {
          this.projects = await ProjectsService.filterByPlace(place);
        } catch (err) {
          this.error = err.message;
        }
      }
    }
  }
};
</script>
