<template>
  <div class="container mb-5 main-container">
    <div class="medium-fetched mt-5 mb-5">
      <h2 class="medium-fetched-title text-center">Check out my projects</h2>
      <DisplayProjects
        :limit="{limit}"
        isFeatured="true"
        class="display-posts w-100 d-flex flex-row flex-wrap justify-content-center"
      ></DisplayProjects>
    </div>
    <router-link
      v-if="this.extras === 'true' || !this.extras"
      class="checkout-link-button text-left"
      to="/portfolio"
    >CHECKOUT MY PROJECTS >></router-link>
  </div>
</template>
<script>
import DisplayProjects from "./DisplayProjects.vue";
export default {
  name: "FeaturedProjectsComponent",
  props: ["extras", "limit"],
  components: {
    DisplayProjects,
  },
};
</script>