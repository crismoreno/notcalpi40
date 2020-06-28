<template>
  <div class="container mb-5 main-container">
    <div class="medium-fetched mt-5 mb-5">
      <h2 class="medium-fetched-title text-center">Check out my Latest Work!</h2>
      <DisplayProjects
        isFeatured="true"
        class="display-posts w-100 d-flex flex-row flex-wrap justify-content-center"
      ></DisplayProjects>
    </div>
    <a
      class="checkout-link-button text-left"
      href="https://medium.com/@cristinamorenomedran"
    >CHECKOUT MY BLOG >></a>
  </div>
</template>
<script>
import DisplayProjects from "./DisplayProjects.vue";
export default {
  name: "FeaturedProjectsComponent",
  components: {
    DisplayProjects
  }
};
</script>