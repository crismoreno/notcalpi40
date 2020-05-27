<template>
  <div
    class="container flex-xl-row flex-lg-column flex-md-column flex-sm-column flex-column justify-content-between"
    id="cookie_consent"
  >
    <div>
      <p>
        🍪 By using this site, you acknowledge that you have read and understood
        the
        <router-link to="/cookies">cookie policy</router-link>.🍪
      </p>
    </div>
    <div class="d-flex justify-content-center">
      <button id="close-cookie-button" v-on:click="setCookie()">
        Close this
      </button>
    </div>
  </div>
</template>
<script>
import EventBus from "../event-bus";
export default {
  name: "CookieWarning",
  methods: {
    setCookie: function() {
      const fifteenDays = 1000 * 60 * 60 * 24 * 15;
      const expires = new Date(new Date().valueOf() + fifteenDays);
      document.cookie = "cookieconsent=true;expires=" + expires.toUTCString();
      EventBus.$emit("SETCOOKIE");
    },
  },
};
</script>
