<template>
  <div class="container mb-5 main-container mt-5">
    <div class="medium-fetched mt-5 mb-5">
      <h2 class="medium-fetched-title text-center">Check out my Blog!</h2>
      <DisplayPosts
        :limit="{limit}"
        v-if="fragment && fragment === 'true'"
        class="display-posts w-100 d-flex flex-row flex-wrap justify-content-center"
      ></DisplayPosts>
      <DisplayPosts :limit="{limit}" v-else class="display-posts w-100 d-flex flex-row flex-wrap"></DisplayPosts>
    </div>
    <a
      v-if="this.extras === 'true' || !this.extras"
      class="checkout-link-button text-left"
      href="https://medium.com/@cristinamorenomedran"
    >CHECKOUT MY BLOG >></a>
  </div>
</template>
<script>
import DisplayPosts from "./DisplayPosts.vue";
export default {
  name: "BlogComponent",
  props: ["limit", "extras", "fragment"],
  components: {
    DisplayPosts,
  },
};
</script>
