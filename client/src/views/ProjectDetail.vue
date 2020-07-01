<template>
  <div class="project-detail-container container py-5 main-container">
    <!-- SINGLE IMG HERE -->
    <!-- <img
      class="project-cover mt-5"
      v-if="this.headerImgExist === true && this.carouselQty <= 0"
      :src="
        require(`../assets/img/projects/${this.project[0].id}/${this.project[0].id}.png`)
      "
    />-->
    <img
      class="project-cover mt-5"
      v-if="this.headerImgExist === true && this.carouselQty <= 0"
      :src="
        `https://res.cloudinary.com/hyavxktsb/image/upload/projects/${this.project[0].id}/${this.project[0].id}.png`
      "
    />
    <!-- SINGLE IMG HERE -->
    <!-- VIDEO HERE -->
    <iframe
      v-if="
        !this.headerImgExist && this.project[0].video && this.carouselQty === 0
      "
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
    <!-- VIDEO HERE -->
    <!-- CAROUSEL HERE -->
    <div
      id="carouselExampleIndicators"
      class="carousel slide mt-5"
      data-ride="carousel"
      v-if="this.headerImgExist === false && this.carouselQty >= 1"
    >
      <ol class="carousel-indicators">
        <li
          v-for="index in this.carouselQty"
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          :key="index"
          :class="{ active: index == 1 }"
        ></li>
      </ol>

      <div class="carousel-inner">
        <div
          class="carousel-item"
          v-for="index in this.carouselQty"
          :key="index"
          :class="{ active: index == 1 }"
        >
          <img
            :src="
              `https://res.cloudinary.com/hyavxktsb/image/upload/projects/${project[0].id}/carousel/${index}.png`
            "
            class="d-block w-100"
            :alt="`Img num ${index}`"
          />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <!-- CAROUSEL HERE -->
    <div
      class="d-flex flex-column flex-sm-column flex-md-row flex-lg-row flex-xl-row justify-content-between mt-5 pb-3 align-items-start align-items-sm-start align-items-md-end align-items-lg-end align-items-xl-end"
    >
      <div class="d-flex flex-column">
        <h1>{{ this.project[0].title }}</h1>
        <p
          class="small-red-font m-0"
          v-if="
            this.project[0].customer !== 'Full Stack Bootcamp' &&
              this.project[0].customer !== 'Degree Project' &&
              this.project[0].customer !== 'Full Stack Master\'s Degree' &&
              this.project[0].customer !== 'Personal Project' &&
              this.project[0].customer !== 'WeDrink'
          "
        >Customer: {{ this.project[0].customer }}</p>
        <p
          class="small-red-font m-0"
          v-if="
            this.projectMadeAts.length > 0 &&
              this.projectMadeAts[0].madeat.full_name !== 'Freelance'
          "
        >{{ this.projectMadeAts[0].madeat.full_name }}</p>
      </div>
      <div>
        <p
          v-if="this.project[0].completion_date"
          class="small-red-font m-0"
        >Completion date: {{ this.project[0].completion_date }}</p>
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
          <!-- <li
            v-if="this.projectMadeAts.length > 0"
            class="small-red-font m-0"
          >Developed at: {{this.projectMadeAts[0].madeat.full_name}}</li>-->
          <!-- <li
            v-if="this.project[0].completion_date"
            class="small-red-font m-0"
          >Completion date: {{this.project[0].completion_date}}</li>-->
        </ul>
        <p class="small-red-font m-0" v-if="this.projectTags.length">This project is related to:</p>
        <ul v-if="this.projectTags">
          <li
            v-for="(tag, index) in projectTags"
            :key="index"
            class="project-tags"
          >{{ tag.tag.name }}</li>
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
          >{{ codingLang.codinglang.name }}</li>
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
              target="_blank"
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
        >Collaborators: {{ this.project[0].collaborators }}</p>
        <pre>{{ this.project[0].description }}</pre>
        <img
          class="project-cover"
          v-if="this.descriptionPhotoExist"
          :src="
            require(`../assets/img/projects/${this.project[0].id}/photo.png`)
          "
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
import axios from "axios";
// import cloudinary from "cloudinary-core";
export default {
  name: "ProjectDetail",
  data() {
    return {
      project: [],
      headerImgExist: false,
      // headerCarouselExist: true,
      carouselQty: 0,
      descriptionPhotoExist: false,
      projectTags: [],
      projectCodingLangs: [],
      projectMadeAts: [],
      linksToProd: []
    };
  },
  async created() {
    await this.getProject();
    this.countCarouselImgs();
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
      } catch (err) {
        this.error = err.message;
      }
      // try {
      //   require(`../assets/img/projects/${this.project[0].id}/${this.project[0].id}.png`)
      //     ? (this.headerImgExist = true)
      //     : (this.headerImgExist = false);
      // } catch (err) {
      //   console.error;
      // }
      fetch(
        `https://res.cloudinary.com/hyavxktsb/image/upload/projects/${this.project[0].id}/${this.project[0].id}.png`
      ).then(res => {
        if (res.ok) {
          this.headerImgExist = true;
        } else {
          this.headerImgExist = false;
        }
      });
      // .catch(err => console.log("Error:", err));

      // try {
      //   require(`../assets/img/projects/${this.project[0].id}/carousel/1.png`)
      //     ? (this.headerCarouselExist = true)
      //     : (this.headerCarouselExist = false);
      // } catch (err) {
      //   console.error;
      // }
      fetch(
        `https://res.cloudinary.com/hyavxktsb/image/upload/projects/${this.project[0].id}/photo.png`
      ).then(res => {
        if (res.ok) {
          this.descriptionPhotoExist = true;
        } else {
          this.descriptionPhotoExist = false;
        }
      });
      // .catch(err => console.log("Error:", err));
      // try {
      //   require(`../assets/img/projects/${this.project[0].id}/photo.png`)
      //     ? (this.descriptionPhotoExist = true)
      //     : (this.descriptionPhotoExist = false);
      // } catch (err) {
      //   console.error;
      // }
      const str = this.project[0].link_to_prod;
      const res = str.split(" ");
      this.linksToProd = res;
    },
    countCarouselImgs: async function() {
      let qty = 0;
      do {
        qty = qty + 1;
      } while ((await this.checkCarouselImg(qty)) === 200);
      this.carouselQty = qty - 1;
    },
    checkCarouselImg: async function(num) {
      try {
        const proj = this.project[0].id;
        const url = `https://res.cloudinary.com/hyavxktsb/image/upload/projects/${proj}/carousel/${num}.png`;
        const exists = await axios.get(url);
        return exists.status;
      } catch (err) {
        console.log(err);
      }
      // try {
      //   require(`../assets/img/projects/${this.project[0].id}/carousel/${num}.png`);
      //   return true;
      // } catch (err) {
      //   console.log(err);
      // }
      // return false;
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
