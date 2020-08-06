<template>
  <div class="home main-container mt-5">
    <div class="header-background">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon fill="white" points="0,100 100,0 100,100" />
      </svg>
      <div
        class="container main-container d-flex flex-column flex-sm-column flex-md-row flex-lg-row flex-xl-row"
      >
        <div class="description-desktop d-none d-md-flex d-lg-flex d-xl-flex flex-column">
          <p>
            <!-- No, this is not Calpi. This website is a tribute to my dad, who
            wanted to name me Calpèrnia when I was born. Lucky me, he changed
            his mind at the very last moment and finally both my parents agreed
            on calling me Cristina. I assume that if you've read this far is
            because you were curious about this website's name. So now, let's
            get down to business. Welcome to my online portfolio, welcome to my
            world.-->
            After noticing that the relationship between designers and developers
            is a struggle, I decided to shift gears and try developing end user interfaces all by
            myself. In spite of being comfortable in both Front-End and Back-End technologies,
            I consider myself a Front-End developer.
            <!-- I'm highly motivated and committed to learning as much as I can! 💪 -->
            I’m highly motivated, willing to learn and eager to be challenged 💪.
            <br />Note that I’m ever so slightly OCD 🤏
          </p>
          <p>- Cristina Moreno -</p>
          <div>
            <router-link role="button" to="/about-me">CHECKOUT MY CV</router-link>
          </div>
        </div>
        <div class="picture d-flex justify-content-center">
          <img src="../assets/img/homepage/noiron.png" />
        </div>
        <div
          class="description-mobile d-xs-flex d-sm-flex d-flex-column d-md-none d-lg-none d-xl-none flex-column"
        >
          <p>
            <!-- No, this is not Calpi. This website is a tribute to my dad, who
            wanted to name me Calpèrnia when I was born. Lucky me, he changed
            his mind at the very last moment and finally both my parents agreed
            on calling me Cristina. I assume that if you've read this far is
            because you were curious about this website's name. So now, let's
            get down to business. Welcome to my online portfolio, welcome to my
            world.-->
            After noticing that the relationship between designers and developers
            is a struggle, I decided to shift gears and try developing end user interfaces by
            myself. In spite of being comfortable in both Front-End and Back-End technologies,
            I consider myself a Front-End developer.
            <!-- I'm highly motivated and committed to learning as much as I can! 💪 -->
            I’m highly motivated, willing to learn and eager to be challenged 💪. Note that I’m ever so slightly OCD 🤏
          </p>
          <p>- Cristina Moreno -</p>
          <div>
            <router-link role="button" to="/about-me">CHECKOUT MY CV</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="container about-me-home d-flex flex-column flex-md-row flex-lg-row flex-xl-row">
      <div class="characteristics d-flex justify-content-center flex-column">
        <div
          class="charcateristic-container d-flex justify-content-center justify-content-sm-start justify-content-md-end justify-content-lg-end justify-content-xl-end align-items-center"
        >
          <p>Pixel perfect obsesion</p>
          <div class="img-container d-flex justify-content-center align-items-center">
            <img src="../assets/img/homepage/fingerprints.svg" />
          </div>
        </div>
        <div
          class="charcateristic-container d-flex justify-content-center justify-content-sm-start justify-content-md-end justify-content-lg-end justify-content-xl-end align-items-center"
        >
          <p>Proactive and communicative</p>
          <div class="img-container d-flex justify-content-center align-items-center">
            <img src="../assets/img/homepage/chat.svg" />
          </div>
        </div>
        <div
          class="charcateristic-container d-flex justify-content-center justify-content-sm-start justify-content-md-end justify-content-lg-end justify-content-xl-end align-items-center"
        >
          <p>Team player</p>
          <div class="img-container d-flex justify-content-center align-items-center">
            <img src="../assets/img/homepage/team.svg" />
          </div>
        </div>
        <div
          class="charcateristic-container d-flex justify-content-center justify-content-sm-start justify-content-md-end justify-content-lg-end justify-content-xl-end align-items-center"
        >
          <p>Strong sense of duty</p>
          <div class="img-container d-flex justify-content-center align-items-center">
            <img src="../assets/img/homepage/anchor.svg" />
          </div>
        </div>
      </div>
      <div class="about-me-detail d-flex flex-column">
        <div class="d-flex title">
          <h2>Cristina Moreno Medran</h2>
          <!-- <p class="ml-1">{{age}} years old</p> -->
        </div>
        <p class="border-bottom">FRONT-END DEVELOPER & DESINGER</p>
        <p class="description-about-me">
          Hello dear earthling! 🖖 Welcome to my website!
          <br />
          I'm a {{age}} years old Junior Front-End developer and designer based in Barcelona.
          <br />After finishing the degree (in
          design management) I was asked to manage several digital projects
          which made me notice that
          <span
            class="highlight"
          >
            the relationship between designers and developers is a
            struggle
          </span>
          . It's been {{bootcampAgo}} years since I decided to introduce myself into coding and after an
          <a
            href="https://www.ironhack.com/es/barcelona"
          >Ironhack</a> bootcamp and a
          <a
            href="https://www.assemblerschool.com/"
          >Master degree at Assembler School</a> (and some work experience inbetween) here I'm! 🙋🏻‍♀.
          <span
            class="highlight"
          >I'm currently doing a part-time internship at RedPoints where I'm learning React and Redux.</span>
          If you wanna know more about me, don't hesitate to
          <router-link to="/reach-me">reach out to me</router-link>.
        </p>
        <!-- <router-link class="link-to-cv" to="/about-me">FULL CV >></router-link> -->
        <div class="accordion" id="accordionExample">
          <div class="card">
            <div class="card-header" id="headingOne">
              <h2 class="mb-0">
                <button
                  class="btn btn-link btn-block text-left d-flex justify-content-between"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                  v-on:click="toggleIcon('headingOne')"
                >
                  How old am I?
                  <span v-if="this.headingOne == 'closed'" class="material-icons">add</span>
                  <span v-if="this.headingOne == 'opened'" class="material-icons">close</span>
                </button>
              </h2>
            </div>

            <div
              id="collapseOne"
              class="collapse"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                I was born in June 1993, I'm
                <span class="mx-1">{{age}}</span>years old.
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingTwo">
              <h2 class="mb-0">
                <button
                  class="btn btn-link btn-block text-left collapsed d-flex justify-content-between"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                  v-on:click="toggleIcon('headingTwo')"
                >
                  Where am I from? Where am I based in?
                  <span
                    v-if="this.headingTwo == 'closed'"
                    class="material-icons"
                  >add</span>
                  <span v-if="this.headingTwo == 'opened'" class="material-icons">close</span>
                </button>
              </h2>
            </div>
            <div
              id="collapseTwo"
              class="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div
                class="card-body"
              >I was born in Sabadell but I'm currently based in Badalona, Barcelona.</div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingThree">
              <h2 class="mb-0">
                <button
                  class="btn btn-link btn-block text-left collapsed d-flex justify-content-between"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                  v-on:click="toggleIcon('headingThree')"
                >
                  Find out more about me
                  <span
                    v-if="this.headingThree == 'closed'"
                    class="material-icons"
                  >add</span>
                  <span v-if="this.headingThree == 'opened'" class="material-icons">close</span>
                </button>
              </h2>
            </div>
            <div
              id="collapseThree"
              class="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                <p class="d-flex align-items-center my-0">
                  <span class="material-icons mr-1">call</span> +34 · 630 · 149 · 516
                </p>
                <div
                  class="d-flex align-items-start align-items-sm-start align-items-md-start py-1 flex-column flex-sm-column flex-md-column flex-lg-row flex-xl-row"
                >
                  <span class="material-icons mr-1">accessibility_new</span>Personality type:
                  <u>
                    <a
                      class="mx-1"
                      href="https://www.16personalities.com/estj-personality"
                    >ESTJ-A / ESTJ-T</a>
                  </u>
                  <u>
                    <a
                      class="mx-1"
                      href="https://www.16personalities.com/esfj-personality"
                    >ESFJ-A / ESFJ-T</a>
                  </u>
                </div>
                <ul>
                  <li class="d-flex align-items-center">
                    <span class="material-icons mr-1">code</span>Checkout my
                    <u class="mr-1 ml-1">
                      <a href="https://github.com/crismoreno">Github</a>
                    </u>profile
                  </li>
                  <li class="d-flex align-items-center">
                    <span class="material-icons mr-1">face</span>Checkout my
                    <u class="mr-1 ml-1">
                      <a href="https://www.linkedin.com/in/morenomedran/">Linkedin</a>
                    </u> profile
                  </li>
                  <li class="d-flex align-items-center">
                    <span class="material-icons mr-1">create</span>Checkout my
                    <u class="mr-1 ml-1">
                      <a href="https://medium.com/@cristinamorenomedran">Medium</a>
                    </u> blog
                  </li>
                  <li class="d-flex align-items-center">
                    <span class="material-icons mr-1">email</span>Reach out to me!
                    <u class="mr-1 ml-1">
                      <router-link to="/reach-me">here</router-link>
                    </u>
                  </li>
                  <li class="mt-3">
                    <router-link class="link-to-cv" to="about-me">Checkout my CV</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
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
      <FeaturedProjectsComponent></FeaturedProjectsComponent>
    </div>
  </div>
</template>
<script>
import FeaturedProjectsComponent from "../components/DisplayFeaturedProjects.vue";
import BlogComponent from "../components/Blog.vue";
import ProjectsService from "../ProjectsService";
import moment from "moment";
export default {
  name: "Home",
  components: {
    // BlogComponent,
    FeaturedProjectsComponent,
  },
  data() {
    return {
      availableTags: [],
      age: "",
      bootcampAgo: "",
      headingOne: "closed",
      headingTwo: "closed",
      headingThree: "closed",
    };
  },
  created() {
    this.getFilters();
    this.age = moment().diff(moment("19930601", "YYYYMMDD"), "years");
    this.bootcampAgo = moment().diff(moment("20171001", "YYYYMMDD"), "years");
  },
  methods: {
    getFilters: async function () {
      try {
        this.availableTags = await ProjectsService.getAvailableTags();
      } catch (err) {
        this.error = err.message;
      }
    },
    toggleIcon: function (heading) {
      switch (heading) {
        case "headingOne":
          this.headingOne == "closed"
            ? (this.headingOne = "opened")
            : (this.headingOne = "closed");
          this.headingTwo = "closed";
          this.headingThree = "closed";
          break;
        case "headingTwo":
          this.headingTwo == "closed"
            ? (this.headingTwo = "opened")
            : (this.headingTwo = "closed");
          this.headingOne = "closed";
          this.headingThree = "closed";
          break;
        case "headingThree":
          this.headingThree == "closed"
            ? (this.headingThree = "opened")
            : (this.headingThree = "closed");
          this.headingTwo = "closed";
          this.headingOne = "closed";
          break;
      }
    },
  },
};
</script>
