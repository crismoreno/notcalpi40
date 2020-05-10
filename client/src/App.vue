<template>
  <div class="layout-container">
    <nav class="navbar navbar-expand-lg">
      <router-link class="navbar-brand" to="/">
        <img height="30" src="../src/assets/img/white-logo.svg" />
      </router-link>

      <button
        class="navbar-toggler navbar-dark"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul class="navbar-nav mr-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/portfolio">Portfolio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/blog">Blog</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about-me">About Me</router-link>
          </li>
          <li class="nav-item highlight-menu-item">
            <router-link class="nav-link" to="/reach-me">Reach Me @</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view />
    <footer>
      <div
        class="d-flex justify-content-between px-3 flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row"
      >
        <p
          class="d-none d-sm-block d-md-block d-lg-block d-xl-block"
        >Made with 💛 by Cristina Moreno</p>
        <div>
          <ul class="d-flex justify-content-center">
            <li>
              <a href="https://github.com/crismoreno" target="_blank">Github</a>
            </li>
            <li>·</li>
            <li>
              <a href="https://www.linkedin.com/in/morenomedran/" target="_blank">LinkedIn</a>
            </li>
            <li>·</li>
            <li>
              <a href="https://medium.com/@cristinamorenomedran" target="_blank">Medium</a>
            </li>
            <li>·</li>
            <li>
              <router-link to="/reach-me">Reach me@</router-link>
            </li>
            <li>·</li>
            <li>
              <img height="30" src="../src/assets/img/mini-logo.svg" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
    <div
      class="container flex-xl-row flex-lg-column flex-md-column flex-sm-column flex-column justify-content-between"
      id="cookie_consent"
    >
      <div>
        <p>
          🍪 By using this site, you acknowledge that you have read and
          understood the
          <a
            href="/cookies"
          >cookie policy</a>.🍪
        </p>
      </div>
      <div class="d-flex justify-content-center">
        <button id="close-cookie-button">Close this</button>
      </div>
    </div>
  </div>
</template>

<style>
@import "~bootstrap/dist/css/bootstrap.css";
</style>

<script>
export default {
  name: "App"
};
</script>
