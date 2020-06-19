<template>
  <div class="container mb-5 main-container mt-5">
    <div class="medium-fetched mt-5 mb-5">
      <h2 class="medium-fetched-title text-center">Check out my Blog!</h2>
      <DisplayPosts class="display-posts w-100 d-flex flex-row flex-wrap justify-content-center"></DisplayPosts>
    </div>
    <a
      class="checkout-link-button text-left"
      href="https://medium.com/@cristinamorenomedran"
    >CHECKOUT MY BLOG >></a>
  </div>
</template>
<script>
import DisplayPosts from "./DisplayPosts.vue";
export default {
  name: "BlogComponent",
  components: {
    DisplayPosts
  }
};
</script>
