<template>
  <div>
    <div class="card" v-for="(post, index) in posts" :key="index">
      <a :href="post.link" target="_blank">
        <div class="card-content d-flex flex-column">
          <div class="img-container">
            <img class="project-image" :src="post.thumbnail" />
          </div>
          <div class="project-details d-flex flex-column justify-content-center">
            <p class="name" v-if="post.title.length > 30 ">{{ post.title.substr(0, 30) + "\u2026" }}</p>
            <p class="name" v-else>{{ post.title.substr(0, 30)}}</p>
            <p
              class="customer"
            >{{ getMomentedDate(post.pubDate.substr(0, 10)) }} - {{ getMomentedRelativeTime(post.pubDate.substr(0, 10)) }}</p>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import moment from "moment";
export default {
  name: "DisplayProjects",
  props: ["limit"],
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
          if (this.limit) {
            this.posts = mediumData.slice(0, this.limit.limit);
          } else {
            this.posts = mediumData;
          }
        });
    },
    shortenText(text, startingPoint, maxLength) {
      return text.length > maxLength
        ? text.slice(startingPoint, maxLength)
        : text;
    },
    getMomentedDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
    getMomentedRelativeTime(date) {
      return moment(date, "YYYYMMDD").fromNow();
    },
  },
  beforeMount() {
    this.getBlogPosts();
  },
};
</script>
