<template>
  <div class="container not-found main-container">
    <h1 class="text-center">
      <span rol="img">⚠️</span> This is
      <span class="notcalpi-red" style="border-radius: 5px;">not</span> a 404
      page
      <span rol="img">⚠️</span>
    </h1>
    <p class="text-center">
      Hey, let's make this not just a 404 page! These are facts about me so you
      can get to know me better
    </p>
    <div class="foto-grid d-flex justify-content-center flex-wrap">
      <div class="cris-fact">
        <div class="overlapped-info-container">
          <p class="overlapped-info">I practice Karate</p>
        </div>
        <div class="fact-container">
          <img src="../assets/img/404/cris-facts/cris-fact-1.jpg" />
        </div>
      </div>
      <div class="cris-fact">
        <div class="overlapped-info-container">
          <p class="overlapped-info">
            I appeared on a TV show when I was a kid [check it out]
            <span rel="img">🔗</span>
          </p>
        </div>
        <a target="_blank" href="https://www.youtube.com/watch?v=hVoVGMJjrCI&t=539s">
          <div class="fact-container">
            <img src="../assets/img/404/cris-facts/cris-fact-2.jpg" />
          </div>
        </a>
      </div>
      <div class="cris-fact">
        <div class="overlapped-info-container">
          <p class="overlapped-info">People say I sing on tune!</p>
        </div>
        <div class="fact-container">
          <img src="../assets/img/404/cris-facts/cris-fact-3.gif" />
        </div>
      </div>
      <div class="cris-fact">
        <div class="overlapped-info-container">
          <p class="overlapped-info">I like scuba diving</p>
        </div>
        <div class="fact-container">
          <img src="../assets/img/404/cris-facts/cris-fact-4.jpg" />
        </div>
      </div>
      <div class="cris-fact">
        <div class="overlapped-info-container">
          <p class="overlapped-info">
            I LOVE HEDGEHOGS
            <span rol="img">❤️</span>
          </p>
        </div>
        <div class="fact-container">
          <img src="../assets/img/404/cris-facts/cris-fact-5.gif" />
        </div>
      </div>
      <div class="cris-fact">
        <div class="overlapped-info-container">
          <p class="overlapped-info">
            I like taking photos [Go have a look at my Instagram account
            <span rel="img">📸</span>]
          </p>
        </div>
        <a target="_blank" href="https://www.instagram.com/calpimoreno/">
          <div class="fact-container">
            <img src="../assets/img/404/cris-facts/cris-fact-6.jpg" />
          </div>
        </a>
      </div>
      <div class="cris-fact">
        <div class="overlapped-info-container">
          <p class="overlapped-info">I like salty popcorn over sweet.</p>
        </div>
        <div class="fact-container">
          <img src="../assets/img/404/cris-facts/cris-fact-7.gif" />
        </div>
      </div>
      <div class="cris-fact">
        <div class="overlapped-info-container">
          <p class="overlapped-info">Tomato is my cryptonite</p>
        </div>
        <div class="fact-container">
          <img src="../assets/img/404/cris-facts/cris-fact-8.jpg" />
        </div>
      </div>
      <div class="cris-fact">
        <div class="overlapped-info-container">
          <p class="overlapped-info">Addicted to crisps</p>
        </div>
        <div class="fact-container">
          <img src="../assets/img/404/cris-facts/cris-fact-9.jpg" />
        </div>
      </div>
      <div class="cris-fact">
        <div class="overlapped-info-container">
          <p class="overlapped-info">I love speaking english</p>
        </div>
        <div class="fact-container">
          <img src="../assets/img/404/cris-facts/cris-fact-10.gif" />
        </div>
      </div>
      <div class="cris-fact">
        <div class="overlapped-info-container">
          <p class="overlapped-info">My favourite film is: Fight Club</p>
        </div>
        <div class="fact-container">
          <img src="../assets/img/404/cris-facts/cris-fact-11.jpg" />
        </div>
      </div>
      <div class="cris-fact">
        <div class="overlapped-info-container">
          <p class="overlapped-info">I'm ever so slightly OCD</p>
        </div>
        <div class="fact-container">
          <img src="../assets/img/404/cris-facts/cris-fact-12.gif" />
        </div>
      </div>
    </div>
    <div class="get-to-know-me">
      <h2>Get to know me!</h2>
      <div class="connections-container container d-flex flex-wrap justify-content-center">
        <a href="https://calendly.com/cristinamoreno" target="_blank">Schedule a meeting</a>
        <!-- <a [routerLink]="['/reach-me']">Drop me a line</a> -->
        <a href="mailto:moreno.medran@gmail.com" target="_blank">Email me!</a>
        <a href="https://www.instagram.com/calpimoreno/?hl=de" target="_blank">Instagram</a>
        <a href="https://www.linkedin.com/in/morenomedran/" target="_blank">Linkedin</a>
        <a href="https://medium.com/@cristinamorenomedran" target="_blank">Medium</a>
        <a href="https://github.com/crismoreno" target="_blank">Github</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PageNotFound"
};
</script>
