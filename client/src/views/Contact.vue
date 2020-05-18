<template>
  <div
    class="reach-me-container container d-flex flex-wrap flex-column main-container"
  >
    <div
      class="connections-container container d-flex flex-wrap justify-content-center"
    >
      <a href="https://calendly.com/cristinamoreno" target="_blank"
        >Schedule a meeting</a
      >
      <a href="mailto:hello@notcalpi.me" target="_blank">Email me!</a>
    </div>

    <form
      id="contact-form"
      class="needs-validation"
      v-on:submit.prevent="sendContactForm"
    >
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
        <div class="invalid-feedback">
          Hey! Don't forget to write your message!
        </div>
      </div>
      <button type="submit" value="Submit" id="submit-button">Submit</button>
      <small class="form-text text-muted text-center"
        >I'll never share your data with anyone else.</small
      >
      <!-- <div class="feedback-message d-none alert alert-success" role="alert" >
          <p>👌I'm gonna get back to you very soon👌</p>
      </div>-->
    </form>
  </div>
</template>
<script>
import ContactService from "../ContactService";
export default {
  name: "ContactForm",
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
    (function() {
      "use strict";
      window.addEventListener(
        "load",
        function() {
          // Fetch all the forms we want to apply custom Bootstrap validation styles to
          var forms = document.getElementsByClassName("needs-validation");
          // Loop over them and prevent submission
          var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener(
              "submit",
              function(event) {
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
  methods: {
    sendContactForm() {
      const contactFormBody = {
        name: entered_name.value,
        telephone: telephone.value,
        email: email.value,
        company: company.value,
        message: message.value,
      };
      ContactService.postForm(contactFormBody);
    },
  },
};
</script>
