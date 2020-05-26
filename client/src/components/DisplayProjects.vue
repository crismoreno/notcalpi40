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
      place_picked: []
    };
  },
  created() {
    this.getProjects("default");
  },
  mounted() {
    EventBus.$on("SEARCH_BY_TAG", tag => {
      const index = this.tags_checked.indexOf(tag);
      if (index > -1) {
        this.tags_checked.splice(index, 1);
      } else {
        this.tags_checked.push(tag);
      }
      this.getProjects("tags");
    });
    EventBus.$on("SEARCH_BY_CODINGLANG", codingLang => {
      const index = this.codingLangs_checked.indexOf(codingLang);
      if (index > -1) {
        this.codingLangs_checked.splice(index, 1);
      } else {
        this.codingLangs_checked.push(codingLang);
      }
      this.getProjects("codingLangs");
    });
    EventBus.$on("SEARCH_BY_PLACE", place => {
      this.place_picked = place;
      this.getProjects("place");
    });
    EventBus.$on("EMPTY_ALL_FILTERS", () => {
      this.tags_checked = [];
      this.codingLangs_checked = [];
      this.place_picked = [];
      this.getProjects("default");
    });
  },
  methods: {
    getProjects: async function(getKind) {
      switch (getKind) {
        case "tags":
          try {
            this.projects = await ProjectsService.filterByTags(
              this.tags_checked
            );
          } catch (err) {
            this.error = err.message;
          }
          break;
        case "codingLangs":
          try {
            this.projects = await ProjectsService.filterByCodingLang(
              this.codingLangs_checked
            );
          } catch (err) {
            this.error = err.message;
          }
          break;
        case "place":
          try {
            this.projects = await ProjectsService.filterByPlace(
              this.place_picked
            );
          } catch (err) {
            this.error = err.message;
          }
          break;
        case "default":
          try {
            this.projects = await ProjectsService.getProjects();
          } catch (err) {
            this.error = err.message;
          }
          break;
      }
    }
  }
};
</script>
