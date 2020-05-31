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
    this.getQueryParams();
  },
  mounted() {
    EventBus.$on("SEARCH", () => {
      this.getQueryParams();
    });
    EventBus.$on("EMPTY_ALL_FILTERS", () => {
      this.tags_checked = [];
      this.codingLangs_checked = [];
      this.place_picked = [];
      this.getProjects("default");
    });
  },
  methods: {
    getQueryParams: function() {
      let queryParams = this.$route.query;
      if (Object.entries(queryParams).length) {
        queryParams = Object.entries(queryParams);
        const filterType = queryParams[0][0];
        let filterValues = queryParams[0][1];
        filterValues = Object.values(filterValues);

        filterValues.forEach(element => {
          switch (filterType) {
            case "tag":
              this.tags_checked.push(element);
              break;
            case "codingLang":
              this.codingLangs_checked.push(element);
              break;
            case "place":
              this.place_picked.push(element);
              break;
          }
        });

        this.getProjects(filterType);
      } else {
        this.getProjects("default");
      }
    },
    getProjects: async function(getKind) {
      switch (getKind) {
        case "tag":
          try {
            this.projects = await ProjectsService.filterByTags(
              this.tags_checked
            );
          } catch (err) {
            this.error = err.message;
          }
          break;
        case "codingLang":
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
