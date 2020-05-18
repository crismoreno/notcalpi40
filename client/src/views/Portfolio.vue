<template>
  <div class="d-flex flex-column flex-sm-column flex-md-column flex-lg-row flex-xl-row">
    <div class="accordion filtering-projects" id="filtersAccordion">
      <div class="card filter-by-tag">
        <div class="card-header" id="headingOne">
          <h2 class="mb-0">
            <button
              v-on:click="uncheckCheckboxes"
              id="filter-by-tag-button"
              class="btn btn-link btn-block text-left collapsable-button"
              type="button"
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >Filter by Tags</button>
          </h2>
        </div>

        <div
          id="collapseOne"
          class="collapse show"
          aria-labelledby="headingOne"
          data-parent="#filtersAccordion"
        >
          <div class="card-body">
            <ul>
              <li class="tag-filter" v-for="(tag, index) in availableTags" :key="index">
                <input
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
              type="button"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >Filter by coding Languages</button>
          </h2>
        </div>
        <div
          id="collapseTwo"
          class="collapse"
          aria-labelledby="headingTwo"
          data-parent="#filtersAccordion"
        >
          <div class="card-body">
            <ul class="d-flex flex-wrap flex-column">
              <li
                class="tag-filter"
                v-for="(codingLang, index) in availableCodingLangs"
                :key="index"
              >
                <input
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
              v-on:click="uncheckCheckboxes"
              id="filter-by-place-button"
              class="btn btn-link btn-block text-left collapsed collapsable-button"
              type="button"
              data-toggle="collapse"
              data-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >Filter by place</button>
          </h2>
        </div>
        <div
          id="collapseThree"
          class="collapse"
          aria-labelledby="headingThree"
          data-parent="#filtersAccordion"
        >
          <div class="card-body">
            <ul>
              <li class="tag-filter" v-for="(madeAt, index) in availableMadeAts" :key="index">
                <input
                  type="radio"
                  :name="madeAt"
                  :value="madeAt.id"
                  class="filter-by-madeat-checkbox filter-checkbox"
                />
                <label>{{madeAt.name}}</label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <DisplayProjects
      class="main-container display-projects d-flex flex-row flex-wrap justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-start justify-content-xl-start"
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
      filter_checkbox: ""
    };
  },
  //AVAILABLE TAGS
  async created() {
    try {
      this.availableTags = await ProjectsService.getAvailableTags();
      this.availableCodingLangs = await ProjectsService.getAvailableCodingLangs();
      this.availableMadeAts = await ProjectsService.getAvailableMadeAts();
    } catch (err) {
      this.error = err.message;
    }
  },
  methods: {
    uncheckCheckboxes: function() {}
  }
};
</script>
