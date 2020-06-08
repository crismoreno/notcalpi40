<template>
  <div class="project-detail-container container py-5">
    <!-- <pre>{{this.project[0]}}</pre> -->
    <img
      class="project-cover"
      v-if="this.headerImgExist"
      :src="require(`../assets/img/projects/${this.project[0].imgs}/${this.project[0].imgs}.png`)"
    />
    <iframe
      style="width: 100%;"
      v-if="!this.headerImgExist"
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
    <div class="d-flex justify-content-between mt-5 pb-3">
      <div class="d-flex flex-column">
        <h1>{{this.project[0].title}}</h1>
        <p class="project-customer m-0">{{this.project[0].customer}}</p>
      </div>
      <!-- <div class="d-flex flex-column">
        <p class="mt-2 project-completion-date text-right">{{this.project[0].completion_date}}</p>
        <p class="m-0 text-right">{{this.project[0].developed_at}}</p>
      </div>-->
    </div>

    <div
      class="d-flex extra-info pt-3 flex-column flex-sm-column flex-md-column flex-lg-row flex-xl-row"
    >
      <div class="specs mr-lg-3 mg-xl-3">
        <ul class="mb-3">
          <li
            v-if="this.project[0].collaborators"
            class="project-collaborators"
          >Collaborators: {{this.project[0].collaborators}}</li>
          <li
            v-if="this.project[0].developed_at"
            class="project-developed_at"
          >Developed at: {{this.project[0].developed_at}}</li>
          <li
            v-if="this.project[0].completion_date"
            class="project-completion-date"
          >Completion date: {{this.project[0].completion_date}}</li>
        </ul>
        <div class="d-flex flex-wrap">
          <div v-if="this.project[0].link_to_prod" class="m-1">
            <a class="link-to-button" :href="this.project[0].link_to_prod">Let's see 👀</a>
          </div>
          <div v-if="this.project[0].link_to_repo" class="m-1">
            <a class="link-to-button" :href="this.project[0].link_to_repo">Link to repo 📁</a>
          </div>
          <div v-if="this.project[0].link_to_download" class="m-1">
            <a class="link-to-button" :href="this.project[0].link_to_download">Download 📦</a>
          </div>
        </div>
      </div>
      <div class="description ml-lg-3 ml-xl-3">
        <p>{{this.project[0].description}}</p>
        <img
          class="project-cover"
          v-if="this.descriptionPhotoExist"
          :src="require(`../assets/img/projects/${this.project[0].imgs}/photo.png`)"
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
      descriptionPhotoExist: false
    };
  },
  created() {
    this.getProject();
  },
  methods: {
    getProject: async function() {
      try {
        this.project = await ProjectsService.getProjectById(
          this.$route.params.id
        );
        require(`../assets/img/projects/${this.project[0].imgs}/${this.project[0].imgs}.png`)
          ? (this.headerImgExist = true)
          : (this.headerImgExist = false);
        require(`../assets/img/projects/${this.project[0].imgs}/photo.png`)
          ? (this.descriptionPhotoExist = true)
          : (this.descriptionPhotoExist = false);
      } catch (err) {
        this.error = err.message;
      }
    }
  }
};
</script>
