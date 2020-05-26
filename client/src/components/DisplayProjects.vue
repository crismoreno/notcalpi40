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
            <!-- <p class="type">{{project.metatags}}</p> -->
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
      error: "",
      tags_checked: [],
      codingLangs_checked: [],
      places_picked: []
    };
  },
  async created() {
    try {
      this.projects = await ProjectsService.getProjects();
    } catch (err) {
      this.error = err.message;
    }
  },
  mounted() {
    EventBus.$on("SEARCH_BY_TAG", tag => {
      const index = this.tags_checked.indexOf(tag);
      if (index > -1) {
        this.tags_checked.splice(index, 1);
      } else {
        this.tags_checked.push(tag);
      }
    });
    EventBus.$on("SEARCH_BY_CODINGLANG", codingLang => {
      const index = this.codingLangs_checked.indexOf(codingLang);
      if (index > -1) {
        this.codingLangs_checked.splice(index, 1);
      } else {
        this.codingLangs_checked.push(codingLang);
      }
    });
    EventBus.$on("SEARCH_BY_PLACE", place => {
      this.places_picked = place;
    });
    EventBus.$on("EMPTY_ALL_FILTERS", () => {
      this.tags_checked = [];
      this.codingLangs_checked = [];
      this.places_picked = [];
    });
  }
};
</script>
