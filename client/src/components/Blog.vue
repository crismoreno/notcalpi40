<template>
  <div class="medium-fetched mt-5 mb-5 main-container">
    <h2 class="medium-fetched-title text-center">Check out my Blog!</h2>
    <DisplayPosts
      class="display-posts d-flex flex-row flex-wrap justify-content-center"
    ></DisplayPosts>
  </div>
</template>
<script>
import DisplayPosts from "./DisplayPosts.vue";
export default {
  name: "BlogComponent",
  components: {
    DisplayPosts,
  },
};
</script>
