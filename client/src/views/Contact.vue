<template>
  <div class="reach-me-container container d-flex flex-wrap flex-column main-container mt-5">
    <div class="connections-container container d-flex flex-wrap justify-content-center">
      <a href="https://calendly.com/cristinamoreno" target="_blank">Schedule a meeting</a>
      <a href="mailto:moreno.medran@gmail.com" target="_blank">Email me!</a>
    </div>

    <form id="contact-form" class="needs-validation" v-on:submit="sendContactForm">
      <div
        class="alert alert-success"
        role="alert"
        v-if="this.$route.query.success"
      >Message sent successfully!</div>
      <div
        class="alert alert-danger"
        role="alert"
        v-if="this.$route.query.error"
      >Message couldn't be sent. Try again later...</div>
      <h2>Drop me a line✏️</h2>
      <div class="form-group">
        <label for="email">Email address*</label>
        <input
          v-model="email"
          type="email"
          class="form-control"
          id="email"
          name="email"
          aria-describedby="emailHelp"
          placeholder="khaleese@gmail.com"
          required
        />
        <div class="invalid-feedback">This is not a valid e-mail.</div>
      </div>
      <div class="form-group">
        <label for="name">Enter Name*</label>
        <input
          v-model="entered_name"
          type="text"
          class="form-control"
          id="entered_name"
          name="entered_name"
          placeholder="Daenerys Targaryen"
          required
        />
        <div class="invalid-feedback">This field is required.</div>
      </div>
      <div class="form-group">
        <label for="telephone">Enter telephone number*</label>
        <input
          v-model="telephone"
          type="tel"
          class="form-control"
          id="telephone"
          name="telephone"
          required
          minlength="9"
          placeholder="666666666"
        />
        <div class="invalid-feedback">This field is required.</div>
      </div>
      <div class="form-group">
        <label for="company">Enter company</label>
        <input
          v-model="company"
          type="text"
          class="form-control"
          id="company"
          name="company"
          placeholder="Dracarys Enterprises"
        />
      </div>
      <div class="form-group">
        <label for="message">Tell me!*</label>
        <textarea
          v-model="message"
          class="form-control"
          id="message"
          rows="3"
          placeholder="He was not a true dragon. Fire cannot kill a dragon..."
          required
        ></textarea>
        <div class="invalid-feedback">Hey! Don't forget to write your message!</div>
      </div>
      <div class="d-flex justify-content-center mb-3">
        <vue-recaptcha
          sitekey="6LdoQfkUAAAAAPbWi4bSJSXbhgNsoHfhAHN6W9KT"
          :loadRecaptchaScript="true"
          theme="light"
        ></vue-recaptcha>
      </div>
      <button type="submit" value="Submit" id="submit-button">Submit</button>
      <small class="form-text text-muted text-center">I'll never share your data with anyone else.</small>
      <!-- <div class="feedback-message d-none alert alert-success" role="alert" >
          <p>👌I'm gonna get back to you very soon👌</p>
      </div>-->
    </form>
  </div>
</template>
<script>
import VueRecaptcha from "vue-recaptcha";
import ContactService from "../ContactService";
export default {
  name: "ContactForm",
  components: { VueRecaptcha },
  data() {
    return {
      telephone: "",
      email: "",
      entered_name: "",
      company: "",
      message: "",
    };
  },
  onMount() {
    (function () {
      "use strict";
      window.addEventListener(
        "load",
        function () {
          // Fetch all the forms we want to apply custom Bootstrap validation styles to
          var forms = document.getElementsByClassName("needs-validation");
          // Loop over them and prevent submission
          var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener(
              "submit",
              function (event) {
                if (form.checkValidity() === false) {
                  event.preventDefault();
                  event.stopPropagation();
                }
                form.classList.add("was-validated");
              },
              false
            );
          });
        },
        false
      );
    })();
  },
  watch: {
    $route(to, from) {
      this.show = false;
    },
  },
  methods: {
    sendContactForm: function () {
      const contactFormBody = {
        name: entered_name.value,
        telephone: telephone.value,
        email: email.value,
        company: company.value,
        message: message.value,
      };
      try {
        ContactService.postForm(contactFormBody);
        // self.$router.push('/?success="true"');
        this.$router.push({ path: "/reach-me", query: { success: "true" } });
      } catch (err) {
        console.log(err);
        this.$router.push({ path: "/reach-me", query: { error: "true" } });
      }
    },
  },
};
</script>
