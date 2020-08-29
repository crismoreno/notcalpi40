<template>
  <div>
    <ul
      class="d-flex flex-row flex-wrap justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-start justify-content-xl-start"
    >
      <li class="card" v-for="(project, index) in projects" :key="index">
        <router-link :to="'/project/' + project.id">
          <div class="card-content d-flex flex-column">
            <div class="img-container">
              <cld-image :publicId="`projects/${project.id}/cover.png`"></cld-image>
              <!-- <img
                class="project-image"
                :src="require(`../assets/img/projects/${project.id}/cover.png`)"
              />-->
            </div>
            <div class="project-details d-flex flex-column justify-content-center">
              <p class="name">{{project.title}}</p>
              <p class="customer" v-if="project.customer">{{project.customer}}</p>
              <p class="customer" v-else>{{project.customer}}</p>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
    <p v-if="this.projects.length < 1">No projects available 😭</p>
  </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import EventBus from "../event-bus";
import ProjectsService from "../ProjectsService";
import { CldImage } from "cloudinary-vue";
export default {
  name: "DisplayProjects",
  props: ["isFeatured", "limit"],
  data() {
    return {
      projects: [],
      error: "",
    };
  },
  mounted() {
    if (this.isFeatured == "false") {
      this.getAllProjects();
    } else {
      this.getFeaturedProjects();
    }
    EventBus.$on("SEARCH", (filters) => {
      this.getProjectsFiltered(filters);
    });
    EventBus.$on("EMPTY_FILTERS", () => {
      this.getAllProjects();
    });
  },
  methods: {
    getAllProjects: async function () {
      try {
        this.projects = await ProjectsService.getProjects();
      } catch (err) {
        this.error = err.message;
      }
    },
    getFeaturedProjects: async function () {
      try {
        if (this.limit) {
          const fetchedProjects = await ProjectsService.getFeaturedProjects();
          this.projects = fetchedProjects.slice(0, this.limit.limit);
        } else {
          this.projects = await ProjectsService.getFeaturedProjects();
        }
      } catch (err) {
        this.error = err.message;
      }
    },
    getProjectsFiltered: async function (getFilters) {
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
      } else if (place) {
        try {
          this.projects = await ProjectsService.filterByPlace(place);
        } catch (err) {
          this.error = err.message;
        }
      } else {
        this.getAllProjects();
      }
    },
  },
};
</script>
