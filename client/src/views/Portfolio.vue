<template>
  <div
    class="main-container d-flex flex-column flex-sm-column flex-md-column flex-lg-row flex-xl-row"
  >
    <div class="accordion filtering-projects" id="filtersAccordion">
      <div class="card filter-by-tag">
        <div class="card-header" id="headingOne">
          <h2 class="mb-0">
            <button
              v-on:click="uncheckCheckboxes()"
              id="filter-by-tag-button"
              class="btn btn-link btn-block text-left collapsable-button"
              v-bind:class="{collapsed : !this.$route.query.tag}"
              type="button"
              data-toggle="collapse"
              data-target="#collapseOne"
              :aria-expanded="this.$route.query.tag ? 'true' : 'false'"
              aria-controls="collapseOne"
            >Filter by Tags</button>
          </h2>
        </div>

        <div
          id="collapseOne"
          class="collapse"
          v-bind:class="{show : this.$route.query.tag}"
          aria-labelledby="headingOne"
          data-parent="#filtersAccordion"
        >
          <div class="card-body">
            <ul>
              <li class="tag-filter" v-for="(tag, index) in availableTags" :key="index">
                <input
                  v-model="tags_checked"
                  type="checkbox"
                  :value="tag.id"
                  class="filter-by-tag-checkbox filter-checkbox"
                />
                <label>{{tag.name}}</label>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="card filter-by-codinglang">
        <div class="card-header" id="headingTwo">
          <h2 class="mb-0">
            <button
              v-on:click="uncheckCheckboxes()"
              id="filter-by-codinglang-button"
              class="btn btn-link btn-block text-left collapsed collapsable-button"
              v-bind:class="{collapsed : !this.$route.query.place}"
              type="button"
              data-toggle="collapse"
              data-target="#collapseTwo"
              :aria-expanded="this.$route.query.codingLang ? 'true' : 'false'"
              aria-controls="collapseTwo"
            >Filter by coding Languages</button>
          </h2>
        </div>
        <div
          id="collapseTwo"
          class="collapse"
          aria-labelledby="headingTwo"
          data-parent="#filtersAccordion"
          v-bind:class="{show : this.$route.query.codingLang}"
        >
          <div class="card-body">
            <ul class="d-flex flex-wrap flex-column">
              <li
                class="tag-filter"
                v-for="(codingLang, index) in availableCodingLangs"
                :key="index"
              >
                <input
                  v-model="codingLangs_checked"
                  type="checkbox"
                  class="filter-by-codinglang-checkbox filter-checkbox"
                  :value="codingLang.id"
                />
                <label>{{codingLang.name}}</label>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="card filter-by-madeat">
        <div class="card-header" id="headingThree">
          <h2 class="mb-0">
            <button
              v-on:click="uncheckCheckboxes()"
              id="filter-by-place-button"
              class="btn btn-link btn-block text-left collapsed collapsable-button"
              v-bind:class="{collapsed : !this.$route.query.place}"
              type="button"
              data-toggle="collapse"
              data-target="#collapseThree"
              aria-controls="collapseThree"
              :aria-expanded="this.$route.query.place ? 'true' : 'false'"
            >Filter by place</button>
          </h2>
        </div>
        <div
          id="collapseThree"
          class="collapse"
          v-bind:class="{show : this.$route.query.place}"
          aria-labelledby="headingThree"
          data-parent="#filtersAccordion"
        >
          <div class="card-body">
            <ul>
              <li class="tag-filter" v-for="(madeAt, index) in availableMadeAts" :key="index">
                <input
                  v-model="place_picked"
                  type="radio"
                  :value="madeAt.id"
                  class="filter-by-madeat-checkbox filter-checkbox"
                />
                <label>{{madeAt.name}}</label>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <button
        class="remove-filters-button"
        v-on:click="uncheckCheckboxes()"
        :disabled="!tags_checked.length && !codingLangs_checked.length && place_picked == ''"
      >Remove all Filters</button>
    </div>
    <DisplayProjects
      class="display-projects d-flex flex-row flex-wrap justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-start justify-content-xl-start"
    ></DisplayProjects>
  </div>
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
  },
  data() {
    return {
      availableTags: [],
      availableCodingLangs: [],
      availableMadeAts: [],
      error: "",
      tags_checked: [],
      codingLangs_checked: [],
      place_picked: ""
    };
  },
  created() {
    this.getFilters();
    this.updateStateWithQueryParams();
  },
  watch: {
    tags_checked(tagId) {
      this.$router.push({
        query: { tag: tagId }
      });
      this.emitSearch();
    },
    codingLangs_checked(codingLangId) {
      this.$router.push({
        query: { codingLang: codingLangId }
      });
      this.emitSearch();
    },
    place_picked(placeId) {
      this.$router.push({
        query: { place: placeId }
      });
      this.emitSearch();
    }
  },
  methods: {
    emitSearch: function() {
      let filterParams = {
        ...(this.tags_checked.length && { tags: this.tags_checked }),
        ...(this.codingLangs_checked.length && {
          codingLangs: this.codingLangs_checked
        }),
        ...(this.place_picked != "" && { place: this.place_picked })
      };
      EventBus.$emit("SEARCH", filterParams);
    },
    updateStateWithQueryParams: function() {
      let queryParams = this.$route.query;
      if (Object.entries(queryParams).length) {
        queryParams = Object.entries(queryParams);
        const filterType = queryParams[0][0];
        let filterValues = queryParams[0][1];

        if (Array.isArray(filterValues)) {
          filterValues.forEach(element => {
            switch (filterType) {
              case "tag":
                this.tags_checked.push(element);
                break;
              case "codingLang":
                this.codingLangs_checked.push(element);
                break;
            }
          });
        } else {
          switch (filterType) {
            case "tag":
              this.tags_checked.push(filterValues);
              break;
            case "codingLang":
              this.codingLangs_checked.push(filterValues);
              break;
            case "place":
              this.place_picked = filterValues;
              break;
          }
        }
      }
      this.emitSearch();
    },
    getFilters: async function() {
      try {
        this.availableTags = await ProjectsService.getAvailableTags();
        this.availableCodingLangs = await ProjectsService.getAvailableCodingLangs();
        this.availableMadeAts = await ProjectsService.getAvailableMadeAts();
      } catch (err) {
        this.error = err.message;
      }
    },
    uncheckCheckboxes: function() {
      this.tags_checked != [] ? (this.tags_checked = []) : this.tags_checked;
      this.codingLangs_checked = [];
      this.place_picked = [];
      EventBus.$emit("EMPTY_FILTERS");
    }
  }
};
</script>
