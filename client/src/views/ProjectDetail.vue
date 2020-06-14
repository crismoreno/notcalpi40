<template>
  <div class="project-detail-container container py-5 main-container">
    <!-- <pre>{{this.project[0].id}}</pre> -->
    <img
      class="project-cover"
      v-if="this.headerImgExist"
      :src="require(`../assets/img/projects/${this.project[0].id}/${this.project[0].id}.png`)"
    />

    <iframe
      v-if="!this.headerImgExist && this.project[0].video"
      style="width: 100%;"
      class="videoandimg"
      allowfullscreen
      frameborder="0"
      width="1200"
      height="600"
      scrolling="yes"
      align="bottom"
      mozallowfullscreen
      :src="this.project[0].video"
      webkitAllowFullScreen
    ></iframe>
    <div
      class="d-flex flex-column flex-sm-column flex-md-row flex-lg-row flex-xl-row justify-content-between mt-5 pb-3 align-items-start align-items-sm-start align-items-md-end align-items-lg-end align-items-xl-end"
    >
      <div class="d-flex flex-column">
        <h1>{{this.project[0].title}}</h1>
        <p class="small-red-font m-0">{{this.project[0].customer}}</p>
      </div>
      <div>
        <p
          v-if="this.project[0].completion_date"
          class="small-red-font m-0"
        >Completion date: {{this.project[0].completion_date}}</p>
      </div>
    </div>

    <div
      class="d-flex extra-info pt-3 flex-column flex-sm-column flex-md-column flex-lg-row flex-xl-row"
    >
      <div class="specs mr-lg-3 mg-xl-3">
        <!-- <ul class="mb-3"> -->
        <ul>
          <!-- <li
            v-if="this.project[0].collaborators"
            class="small-red-font m-0"
          >Collaborators: {{this.project[0].collaborators}}</li>-->
          <li
            v-if="this.project[0].developed_at"
            class="small-red-font m-0"
          >Developed at: {{this.project[0].developed_at}}</li>
          <!-- <li
            v-if="this.project[0].completion_date"
            class="small-red-font m-0"
          >Completion date: {{this.project[0].completion_date}}</li>-->
        </ul>
        <p class="small-red-font m-0" v-if="this.projectTags.length">This project is related to:</p>
        <ul v-if="this.projectTags">
          <li v-for="(tag, index) in projectTags" :key="index" class="project-tags">{{tag.tag.name}}</li>
        </ul>
        <p
          class="small-red-font m-0"
          v-if="this.projectCodingLangs.length"
        >This project developed in:</p>
        <ul v-if="this.projectCodingLangs">
          <li
            v-for="(codingLang, index) in projectCodingLangs"
            class="project-coding-langs"
            :key="index"
          >{{codingLang.codinglang.name}}</li>
        </ul>

        <!-- <ul v-if="this.projectMadeAts">
          <li
            v-for="(madeAt, index) in projectMadeAts"
            :key="index"
            class="project-madeats"
          >{{madeAt.madeat.full_name}}</li>
        </ul>-->

        <div class="d-flex flex-wrap links-to-buttons">
          <div v-if="this.project[0].link_to_prod">
            <a
              v-for="(link, index) in linksToProd"
              :key="index"
              class="link-to-button"
              :href="link"
            >Let's see 👀</a>
          </div>
          <div v-if="this.project[0].link_to_repo">
            <a class="link-to-button" :href="this.project[0].link_to_repo">Link to repo 📁</a>
          </div>
          <div v-if="this.project[0].link_to_download">
            <a class="link-to-button" :href="this.project[0].link_to_download">Download 📦</a>
          </div>
        </div>
      </div>
      <div class="description ml-lg-3 ml-xl-3">
        <p
          v-if="this.project[0].collaborators"
          class="small-red-font m-0 text-right"
        >Collaborators: {{this.project[0].collaborators}}</p>
        <p>{{this.project[0].description}}</p>
        <img
          class="project-cover"
          v-if="this.descriptionPhotoExist"
          :src="require(`../assets/img/projects/${this.project[0].id}/photo.png`)"
        />
        <iframe
          style="width: 100%;"
          v-if="this.headerImgExist && this.project[0].video"
          class="videoandimg"
          allowfullscreen
          frameborder="0"
          width="1200"
          height="400"
          scrolling="yes"
          align="bottom"
          mozallowfullscreen
          :src="this.project[0].video"
          webkitAllowFullScreen
        ></iframe>
      </div>
    </div>
  </div>
</template>
<script>
import ProjectsService from "../ProjectsService";
export default {
  name: "ProjectDetail",
  data() {
    return {
      project: [],
      headerImgExist: false,
      descriptionPhotoExist: false,
      projectTags: [],
      projectCodingLangs: [],
      projectMadeAts: [],
      linksToProd: []
    };
  },
  created() {
    this.getProject();
    this.getTags();
    this.getCodingLangs();
    this.getMadeAts();
  },
  methods: {
    getProject: async function() {
      try {
        this.project = await ProjectsService.getProjectById(
          this.$route.params.id
        );
        require(`../assets/img/projects/${this.project[0].id}/${this.project[0].id}.png`)
          ? (this.headerImgExist = true)
          : (this.headerImgExist = false);
        require(`../assets/img/projects/${this.project[0].id}/photo.png`)
          ? (this.descriptionPhotoExist = true)
          : (this.descriptionPhotoExist = false);
      } catch (err) {
        this.error = err.message;
      }
      const str = this.project[0].link_to_prod;
      const res = str.split(" ");
      this.linksToProd = res;
    },
    getTags: async function() {
      try {
        this.projectTags = await ProjectsService.getTagsById(
          this.$route.params.id
        );
      } catch (err) {
        this.error = err.message;
      }
    },
    getCodingLangs: async function() {
      try {
        this.projectCodingLangs = await ProjectsService.getCodingLangsById(
          this.$route.params.id
        );
      } catch (err) {
        this.error = err.message;
      }
    },
    getMadeAts: async function() {
      try {
        this.projectMadeAts = await ProjectsService.getMadeAtsById(
          this.$route.params.id
        );
      } catch (err) {
        this.error = err.message;
      }
    }
  }
};
</script>
