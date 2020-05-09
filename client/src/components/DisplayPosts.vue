<template>
  <div>
    <div class="card" v-for="(post, index) in posts" :key="index">
      <a :href="post.link" target="_blank">
        <div class="card-content d-flex flex-column">
          <div class="img-container">
            <img class="project-image" :src="post.thumbnail" />
          </div>
          <div
            class="project-details d-flex flex-column justify-content-center"
          >
            <p class="name">{{ post.title }}</p>
            <!-- <p class="customer">{{ post.pubDate }}</p> -->
          </div>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "DisplayPosts",
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    getBlogPosts() {
      axios
        .get(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@cristinamorenomedran"
        )
        // .then((res) => res.json())
        .then((data) => {
          const res = data.data.items;
          const mediumData = res.filter((item) => item.categories.length > 0);
          this.posts = mediumData;
        });
    },
    shortenText(text, startingPoint, maxLength) {
      return text.length > maxLength
        ? text.slice(startingPoint, maxLength)
        : text;
    },
  },
  beforeMount() {
    this.getBlogPosts();
  },
};
</script>
