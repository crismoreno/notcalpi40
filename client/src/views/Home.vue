<template>
  <div class="home main-container">
    <div class="header-background">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon fill="white" points="0,100 100,0 100,100" />
      </svg>
      <div
        class="container main-container d-flex flex-column flex-sm-column flex-md-row flex-lg-row flex-xl-row"
      >
        <div class="description-desktop d-none d-md-flex d-lg-flex d-xl-flex flex-column">
          <p>
            No, this is not Calpi. This website is a tribute to my dad, who
            wanted to name me Calpèrnia when I was born. Lucky me, he changed
            his mind at the very last moment and finally both my parents agreed
            on calling me Cristina. I assume that if you've read this far is
            because you were curious about this website's name. So now, let's
            get down to business. Welcome to my online portfolio, welcome to my
            world.
          </p>
          <p>- Cristina Moreno -</p>
          <div>
            <a
              role="button"
              href="https://drive.google.com/file/d/1VY5ZXG29Y2iagTz-6_fqbdENp9ppPIYo/view?usp=sharing"
            >DOWNLOAD MY CV</a>
          </div>
        </div>
        <div class="picture d-flex justify-content-center">
          <img src="../assets/img/homepage/noiron.png" />
        </div>
        <div
          class="description-mobile d-xs-flex d-sm-flex d-flex-column d-md-none d-lg-none d-xl-none flex-column"
        >
          <p>
            No, this is not Calpi. This website is a tribute to my dad, who
            wanted to name me Calpèrnia when I was born. Lucky me, he changed
            his mind at the very last moment and finally both my parents agreed
            on calling me Cristina. I assume that if you've read this far is
            because you were curious about this website's name. So now, let's
            get down to business. Welcome to my online portfolio, welcome to my
            world.
          </p>
          <p>- Cristina Moreno -</p>
          <div>
            <a
              role="button"
              href="https://drive.google.com/file/d/1VY5ZXG29Y2iagTz-6_fqbdENp9ppPIYo/view?usp=sharing"
            >DOWNLOAD MY CV</a>
          </div>
        </div>
      </div>
    </div>
    <div class="container about-me-home d-flex flex-column flex-md-row flex-lg-row flex-xl-row">
      <div class="characteristics d-flex justify-content-center flex-column">
        <div
          class="charcateristic-container d-flex justify-content-center justify-content-sm-start justify-content-md-end justify-content-lg-end justify-content-xl-end align-items-center"
        >
          <p>Methodical & Meticulous</p>
          <div class="img-container d-flex justify-content-center align-items-center">
            <img src="../assets/img/homepage/fingerprints.svg" />
          </div>
        </div>
        <div
          class="charcateristic-container d-flex justify-content-center justify-content-sm-start justify-content-md-end justify-content-lg-end justify-content-xl-end align-items-center"
        >
          <p>Proactive</p>
          <div class="img-container d-flex justify-content-center align-items-center">
            <img src="../assets/img/homepage/chat.svg" />
          </div>
        </div>
        <div
          class="charcateristic-container d-flex justify-content-center justify-content-sm-start justify-content-md-end justify-content-lg-end justify-content-xl-end align-items-center"
        >
          <p>Apt at team management</p>
          <div class="img-container d-flex justify-content-center align-items-center">
            <img src="../assets/img/homepage/team.svg" />
          </div>
        </div>
      </div>
      <div class="about-me-detail d-flex flex-column">
        <div class="d-flex title">
          <h2>Cristina Moreno Medran</h2>
          <p>(June 1993)</p>
        </div>
        <p class="border-bottom">FRONT-END DEVELOPER & DESINGER</p>
        <p class="description-about-me">
          Hello dear earthling! 🖖 Welcome to my website!
          <br />I'm a Junior Front-End developer and designer based in Barcelona
          and looking for inspiration!
          <br />After finishing the degree (in
          design management) I was asked to manage several digital projects
          which made me notice that
          <span
            class="highlight"
          >
            the relationship between designers and developers is a
            struggle
          </span>. This fact pushed me to try developing end user interfaces by
          myself. After some research, I decided to take the plunge and go for
          the
          <a
            href="https://medium.com/@cristinamorenomedran/wallapop-scholarship-for-ironhack-88aa5d9afa3c"
            target_="blank"
          >Wallapop scholarship at Ironhack</a>
          and guess what...! I did it!
          <span
            class="highlight"
          >Being that my entrance ticket to coding.</span>
          <span class="highlight">
            I'm very very motivated and committed to learning as much as I can!
            💪
          </span>
        </p>
        <a href="/about-me">FULL CV >></a>
      </div>
    </div>
    <div class="filters container d-flex justify-content-center flex-wrap">
      <router-link
        :to="`portfolio?tag=${tag.id}`"
        v-for="(tag, index) in availableTags"
        :key="index"
      >
        <button class="filter cursor-pointer-neg">{{tag.name}}</button>
      </router-link>
    </div>
    <div class="my-dev-projects">
      <!-- <h2>SOME OF MY PROJECTS</h2> -->
      <BlogComponent></BlogComponent>
      <!-- <a class="full-portfolio-button" href="/portfolio/">FULL PORTFOLIO >></a> -->
    </div>
  </div>
</template>
<script>
import BlogComponent from "../components/Blog.vue";
import ProjectsService from "../ProjectsService";
export default {
  name: "Home",
  components: {
    BlogComponent
  },
  data() {
    return {
      availableTags: []
    };
  },
  created() {
    this.getFilters();
  },
  methods: {
    getFilters: async function() {
      try {
        this.availableTags = await ProjectsService.getAvailableTags();
      } catch (err) {
        this.error = err.message;
      }
    }
  }
};
</script>
