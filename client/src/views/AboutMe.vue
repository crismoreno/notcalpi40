<template>
  <div class="mt-5">
    <div class="about-me-container container main-container">
      <div class="jumbotron">
        <h1 class="display-4">Cristina Moreno Medran 🙋🏻</h1>
        <p class="lead">
          I'm a 26 year-old Front-End developer and designer living in Badalona,
          Barcelona
        </p>
        <hr class="my-4" />
        <p>Have a look at my CV and don't hesitate to get in touch!</p>
        <div class="d-flex flex-column flex-xl-row flex-lg-row flex-md-row flex-sm-row">
          <a
            role="button"
            href="https://drive.google.com/file/d/1J1yWyi_fzuU4_WoKa5Cw6UKMQ-CxUpRN/view?usp=sharing"
          >DOWNLOAD MY CV</a>
          <a
            role="button"
            href="https://drive.google.com/drive/folders/145Jw5lp1VuNUGamjwxWtCyeujZOj1VPt?usp=sharing"
          >DOWNLOAD MY CERTIFICATES</a>
        </div>
      </div>

      <div class="others d-flex flex-wrap justify-content-between mb-3">
        <p>Català: Nivell Nadiu</p>
        <p>Castellano: Nivel Nativo</p>
        <p>English: C1</p>
      </div>

      <div class="studies">
        <!-- <h1>Studies</h1> -->
        <div class="studies-container container d-flex justify-content-center flex-wrap">
          <div class="assembler d-flex flex-column justify-content-center">
            <a href="https://www.assemblerschool.com/" target="_blank">
              <div class="card">
                <img
                  class="card-img-top"
                  src="../assets/img/cv/assembler.png"
                  alt="Web Development at Assembler School"
                />
                <div class="card-body">
                  <p class="card-text">
                    <strong>OCT 2019 - JUN 2020</strong> · Full Stack master's
                    degree
                  </p>
                </div>
              </div>
            </a>
            <router-link
              class="projects-link"
              to="/portfolio?place=5"
            >Check out my projects developed at Assembler School</router-link>
          </div>
          <div class="ironhack d-flex flex-column justify-content-center">
            <a href="https://www.ironhack.com/es" target="_blank">
              <div class="card">
                <img
                  class="card-img-top"
                  src="../assets/img/cv/ironhack.png"
                  alt="Web Development at Ironhack"
                />
                <div class="card-body">
                  <p class="card-text">
                    <strong>OCT - DES 2017</strong> · Full Stack / Full Time Web
                    Dev Bootcamp.
                  </p>
                </div>
              </div>
            </a>
            <router-link
              class="projects-link"
              to="/portfolio?place=1"
            >Check out my projects developed at Ironhack</router-link>
          </div>
          <div class="esdi d-flex flex-column justify-content-center">
            <a href="https://esdi.es/" target="_blank">
              <div class="card">
                <img class="card-img-top" src="../assets/img/cv/esdi.png" alt="Design at ESDI" />
                <div class="card-body">
                  <p class="card-text">
                    <strong>2011 - 2015</strong> · Bachelor’s degree in Design
                    Management. (URL)
                  </p>
                </div>
              </div>
            </a>
            <router-link
              class="projects-link"
              to="/portfolio?place=2"
            >Check out my projects developed ESDI (Escola Superior de Diseny), URL</router-link>
          </div>
        </div>
        <div class="studies-container container d-flex justify-content-center flex-wrap">
          <a href="https://reactgraphql.academy/" target="_blank">
            <div class="card">
              <img
                class="card-img-top"
                src="../assets/img/cv/reactgraphqlacademy.png"
                alt="React at ReactGraphQLAcademy"
              />
              <div class="card-body">
                <p class="card-text">
                  <strong>2019</strong> · Attended a single-day React Fundamentals
                  Bootcamp. Among a lot other activities they organised.
                </p>
              </div>
            </div>
          </a>
          <a href="http://www.seeway.net/es" target="_blank">
            <div class="card">
              <img
                class="card-img-top"
                src="../assets/img/cv/seeway.png"
                alt="HTML & CSS at Seeway"
              />
              <div class="card-body">
                <p class="card-text">
                  <strong>2016</strong> · HTML & CSS Summer Workshop. Designed to
                  start learning code. (My first approach to coding)
                </p>
              </div>
            </div>
          </a>
          <a href="https://www.certificaciongoogleanalytics.com/" target="_blank">
            <div class="card">
              <img
                class="card-img-top"
                src="../assets/img/cv/mide.png"
                alt="Google Analytics technical specialist at Mide y Vencerás"
              />
              <div class="card-body">
                <p class="card-text">
                  <strong>MAY 2018</strong> · Technical Specialist in Google
                  Analytics and Tag Manager. (Mide y Vencerás)
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div class="software-container container d-flex justify-content-center flex-wrap">
        <div class="card">
          <div class="card-header">ADOBE SUITE</div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Photoshop</li>
            <li class="list-group-item">Illustrator</li>
            <li class="list-group-item">Indesign</li>
            <li class="list-group-item">Premiere Pro</li>
            <li class="list-group-item">After Effects</li>
          </ul>
        </div>
        <div class="card">
          <div class="card-header">MANAGEMENT TOOLS</div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Atlassian Suite</li>
            <li class="list-group-item">Teamwork</li>
            <li class="list-group-item">Trello</li>
            <li class="list-group-item">Asana</li>
            <li class="list-group-item">Meistertask</li>
          </ul>
        </div>
        <div class="card">
          <div class="card-header">ONLINE MARKETING TOOLS</div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Google Ads</li>
            <li class="list-group-item">Google Analytics</li>
            <li class="list-group-item">Google Tag Manager</li>
            <li class="list-group-item">Facebook Business Manager</li>
          </ul>
        </div>
      </div>

      <div class="code-tools mt-5">
        <h2>Tech Skills</h2>
        <div class="html code-tool">
          <div class="d-flex justify-content-between">
            <h3>HTML</h3>
            <router-link to="/portfolio?codingLang=5">Go to HTML projects</router-link>
          </div>
          <div class="progress">
            <div
              class="progress-bar progress-bar-striped bg-danger"
              role="progressbar"
              style="width: 95%"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>

        <div class="css code-tool">
          <div class="d-flex justify-content-between">
            <h3>CSS</h3>
            <router-link to="/portfolio?codingLang=6">Go to CSS projects</router-link>
          </div>
          <div class="progress">
            <div
              class="progress-bar progress-bar-striped bg-danger"
              role="progressbar"
              style="width: 95%"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>

        <h2>Coding Languages</h2>

        <div class="JS code-tool">
          <div class="d-flex justify-content-between">
            <h3>JS</h3>
            <router-link to="/portfolio?codingLang=7">Go to jS projects</router-link>
          </div>
          <div class="progress">
            <div
              class="progress-bar progress-bar-striped bg-danger"
              role="progressbar"
              style="width: 80%"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>

        <div class="node code-tool">
          <div class="d-flex justify-content-between">
            <h3>NODE</h3>
            <router-link to="/portfolio?codingLang=2">Go to NodejS projects</router-link>
          </div>
          <div class="progress">
            <div
              class="progress-bar progress-bar-striped bg-danger"
              role="progressbar"
              style="width: 70%"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>

        <div class="php code-tool">
          <div class="d-flex justify-content-between">
            <h3>PHP</h3>
            <router-link to="/portfolio?codingLang=11">Go to PHP projects</router-link>
          </div>
          <div class="progress">
            <div
              class="progress-bar progress-bar-striped bg-danger"
              role="progressbar"
              style="width: 60%"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <h2>Libraries</h2>
        <div class="bootstrap code-tool">
          <div class="d-flex justify-content-between">
            <h3>BOOTSTRAP</h3>
            <router-link to="/portfolio?codingLang=4">Go to Bootstrap projects</router-link>
          </div>
          <div class="progress">
            <div
              class="progress-bar progress-bar-striped bg-danger"
              role="progressbar"
              style="width: 95%"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <div class="jquery code-tool">
          <div class="d-flex justify-content-between">
            <h3>JQUERY</h3>
            <router-link to="/portfolio?codingLang=3">Go to jQuery projects</router-link>
          </div>
          <div class="progress">
            <div
              class="progress-bar progress-bar-striped bg-danger"
              role="progressbar"
              style="width: 90%"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>

        <h2>Database</h2>
        <div class="mysql code-tool">
          <div class="d-flex justify-content-between">
            <h3>MYSQL</h3>
            <router-link to="/portfolio?codingLang=14">Go to Mysql projects</router-link>
          </div>
          <div class="progress">
            <div
              class="progress-bar progress-bar-striped bg-danger"
              role="progressbar"
              style="width: 70%"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>

        <div class="mysql code-tool">
          <div class="d-flex justify-content-between">
            <h3>MONGODB</h3>
            <!-- <router-link to="/portfolio?codingLang=14">Go to mongodb projects</router-link> -->
          </div>
          <div class="progress">
            <div
              class="progress-bar progress-bar-striped bg-danger"
              role="progressbar"
              style="width: 70%"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>

        <h2>Front-End Frameworks / Libraries</h2>

        <div class="express code-tool">
          <div class="d-flex justify-content-between">
            <h3>VUEjS</h3>
            <router-link to="/portfolio?codingLang=1">Go to VuejS projects</router-link>
          </div>
          <div class="progress">
            <div
              class="progress-bar progress-bar-striped bg-danger"
              role="progressbar"
              style="width: 80%"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>

        <div class="express code-tool">
          <div class="d-flex justify-content-between">
            <h3>React</h3>
            <router-link to="/portfolio?codingLang=1">Go to React projects</router-link>
          </div>
          <div class="progress">
            <div
              class="progress-bar progress-bar-striped bg-danger"
              role="progressbar"
              style="width: 60%"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>

        <div class="express code-tool">
          <div class="d-flex justify-content-between">
            <h3>Redux</h3>
            <router-link to="/portfolio?codingLang=1">Go to Redux projects</router-link>
          </div>
          <div class="progress">
            <div
              class="progress-bar progress-bar-striped bg-danger"
              role="progressbar"
              style="width: 40%"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>

        <div class="angular code-tool">
          <div class="d-flex justify-content-between">
            <h3>ANGULAR</h3>
            <router-link to="/portfolio?codingLang=9">Go to Angular projects</router-link>
          </div>
          <div class="progress">
            <div
              class="progress-bar progress-bar-striped bg-danger"
              role="progressbar"
              style="width: 40%"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>

        <h2>Back-End Frameworks</h2>
        <div class="express code-tool">
          <div class="d-flex justify-content-between">
            <h3>EXPRESS</h3>
            <router-link to="/portfolio?codingLang=1">Go to Express projects</router-link>
          </div>
          <div class="progress">
            <div
              class="progress-bar progress-bar-striped bg-danger"
              role="progressbar"
              style="width: 80%"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>

        <h2>Bundlers, loaders and preprocessors</h2>
        <div class="gulp code-tool">
          <div class="d-flex justify-content-between">
            <h3>GULP</h3>
            <router-link to="/portfolio?codingLang=18">Go to Gulp projects</router-link>
          </div>
          <div class="progress">
            <div
              class="progress-bar progress-bar-striped bg-danger"
              role="progressbar"
              style="width: 90%"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>

        <div class="webpack code-tool">
          <div class="d-flex justify-content-between">
            <h3>WEBPACK</h3>
            <router-link to="/portfolio?codingLang=21">Go to Webpack projects</router-link>
          </div>
          <div class="progress">
            <div
              class="progress-bar progress-bar-striped bg-danger"
              role="progressbar"
              style="width: 70%"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>

        <div class="sass code-tool">
          <div class="d-flex justify-content-between">
            <h3>SASS</h3>
            <router-link to="/portfolio?codingLang=16">Go to SASS projects</router-link>
          </div>
          <div class="progress">
            <div
              class="progress-bar progress-bar-striped bg-danger"
              role="progressbar"
              style="width: 90%"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>

        <h2>CMS</h2>

        <div class="wordpress code-tool">
          <div class="d-flex justify-content-between">
            <h3>WORDPRESS</h3>
            <router-link to="/portfolio?codingLang=10">Go to Wordpress projects</router-link>
          </div>
          <div class="progress">
            <div
              class="progress-bar progress-bar-striped bg-danger"
              role="progressbar"
              style="width: 80%"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <div class="magento code-tool">
          <div class="d-flex justify-content-between">
            <h3>MAGENTO</h3>
            <router-link to="/portfolio?codingLang=15">Go to Magento projects</router-link>
          </div>
          <div class="progress">
            <div
              class="progress-bar progress-bar-striped bg-danger"
              role="progressbar"
              style="width: 40%"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>

        <h2>OTHER TOOLS</h2>

        <div class="git code-tool">
          <div class="d-flex justify-content-between">
            <h3>GIT</h3>
            <a href="https://github.com/crismoreno" target="_blank">Go to GITHUB</a>
          </div>
          <div class="progress">
            <div
              class="progress-bar progress-bar-striped bg-danger"
              role="progressbar"
              style="width: 90%"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>

      <div class="work-experience mt-5">
        <h2>Work Experience</h2>
        <ul>
          <li>
            <button
              class="more-info-button"
              type="button"
              data-toggle="collapse"
              data-target="#collapseRedPoints"
              aria-expanded="false"
              aria-controls="collapseRedPoints"
            >
              <img src="../assets/img/icons/expand_more.svg" class="more-info-button-down" />
              <img src="../assets/img/icons/expand_less.svg" class="more-info-button-up d-none" />
              <span class="highlight">
                <strong>April 2020 · Ongoing</strong>
                Intern Front-End developer at
                <a
                  href="https://www.redpoints.com"
                  target="_blank"
                >Red Points</a>
              </span>
            </button>
          </li>
          <div class="collapse-assembler collapse" id="collapseRedPoints">
            <div class="card card-body">
              <p>As an Intern Front-End developer at Red Points, I'm learning React-Redux by helping them improving their platform. Also having the chance to work at Red Points is being a revealing experience in terms of being introduced to Agile methodolgies. Also at Red Points I'm learning code best practices from top notch developers in a sophisticated work pipeline I never had the chance to work before. This is being challenging but also very stimulating!</p>
            </div>
          </div>
          <li></li>
          <li>
            <button
              class="more-info-button"
              type="button"
              data-toggle="collapse"
              data-target="#collapseAssembler"
              aria-expanded="false"
              aria-controls="collapseAssembler"
            >
              <img src="../assets/img/icons/expand_more.svg" class="more-info-button-down" />
              <img src="../assets/img/icons/expand_less.svg" class="more-info-button-up d-none" />
              <strong>Octubre 2019 · June 2020</strong>
              <a href="https://www.assemblerschool.com/" target="_blank">Assembler School</a> Full-Stack web development master degree.
            </button>
          </li>
          <div class="collapse-assembler collapse" id="collapseAssembler">
            <div class="card card-body">
              <p>
                Having gone through Assembler School of Software Engineering Full-Stack programme means I accomplished 9 months of fulltime work on both back-end and front-end technologies. This Master Degree maily involves JavaScript and PHP knowledge plus some GoLang. Below, you can see my global scoring with detail on every single technology we have worked on having achieved
                <b>9,6/10</b> average score.
              </p>
              <img
                class="card-img-top"
                src="../assets/img/cv/assembler-scoring.png"
                alt="Web Development at Assembler School"
              />
              <router-link to="/portfolio?place=5">Projects developed at Assembler School</router-link>
            </div>
          </div>
          <li>
            <button
              class="more-info-button"
              type="button"
              data-toggle="collapse"
              data-target="#collapseDobcn"
              aria-expanded="false"
              aria-controls="collapseDobcn"
            >
              <img src="../assets/img/icons/expand_more.svg" class="more-info-button-down" />
              <img src="../assets/img/icons/expand_less.svg" class="more-info-button-up d-none" />
              <strong>February 2018 · Octubre 2019</strong> Front-End developer at
              <a href="https://www.dobcn.com/" target="_blank">DoBcn</a>.
            </button>
          </li>

          <div class="collapse-dobcn collapse" id="collapseDobcn">
            <div class="card card-body">
              <p>
                At dobcn I've mainly worked on the front end side of the platforms they
                have developed. This pushed me to learn PHP, CMS (Wordpress and
                Magento) while involved me in real world projects. Go check my
                Projects developed as part of the team at dobcn.
              </p>
              <router-link to="/portfolio?place=4">Projects developed at DoBcn</router-link>
            </div>
          </div>
          <li>
            <button
              class="more-info-button"
              type="button"
              data-toggle="collapse"
              data-target="#collapseNordic"
              aria-expanded="false"
              aria-controls="collapseNordic"
            >
              <img src="../assets/img/icons/expand_more.svg" class="more-info-button-down" />
              <img src="../assets/img/icons/expand_less.svg" class="more-info-button-up d-none" />
              <strong>Junio 2016 · Septiembre 2017</strong> SEM & SMM at
              <a target="_blank" href="https://nordicwebsites.com">Nordic Websites</a>.
            </button>
          </li>

          <div class="collapse-nordic collapse" id="collapseNordic">
            <div class="card card-body">
              <p>
                At Nordic Websites I had the pleasure to be involved in real world
                projects as SEM and SMM while I had the chance to go through several
                marketing related trainings. (Google Analytics technical specialist
                in Google Analytics at Mide y Vencerás.)
              </p>
              <router-link to="/portfolio?place=3">Projects developed at Nordic Projects</router-link>
            </div>
          </div>

          <li>
            <strong>April 2017 · June 2017</strong> Crew Member at The Art Of
            Performance Tour by Jaguar and The Above & Beyond Tour by Land Rover.
          </li>

          <li>
            <strong>2013 · 2017</strong> Design and comunication at
            <a
              target="_blank"
              href="https://www.naturalkids.cat/"
            >naturalKIDS</a>.
          </li>
          <li>
            <strong>September 2015 · March 2016</strong> Designer at
            <a target="_blank" href="https://www.sieteysiete.com/">SieteySiete Media</a>.
          </li>
          <li>
            <strong>2013 · 2015</strong> Comunication, management and design at
            Club esportiu Are you Ready?.
          </li>
          <li>
            <strong>2016 · 2017</strong> Design & comunication at
            <a
              target="_blank"
              href="https://comacsl.com/"
            >COMAC Esports i Lleure S.L</a>.
          </li>
          <li>
            <strong>2013 · 2014</strong> Head of the design department and
            comunication at
            <a
              target="_blank"
              href="http://medran.cat/"
            >Cansaladeries Medrán.</a>
          </li>
          <li>
            <strong>2015</strong> Relationship Management at Open Espanya de Golf.
          </li>
          <li>
            <strong>2014</strong> Internship at
            <a
              target="_blank"
              href="http://www.dogwood.es/"
            >Dowgood brand partner agency</a>'s Design dept.
          </li>
          <li>
            <strong>2014</strong> Recording, production and edition of a
            promotional teaser for
            <a
              target="_blank"
              href="http://www.nataciosabadell.com/"
            >Club de Natació de Sabadell</a>
            (Freelance project).
          </li>
          <li>
            <strong>2014</strong> Corporate identity design for Villena & Rühl
            (Freelance project).
          </li>
          <li>
            <strong>2014</strong> Internship at
            <a
              target="_blank"
              href="http://www.lavanguardia.com/de-moda/20140526/54408360842/intercolor-acuerda-en-barcelona-los-colores-de-moda-para-el-verano-de-2016.html"
            >ESDI Color_Lab</a>
            collaborator in the Intercolor Project.
          </li>
          <li>
            <strong>2013 · 2014</strong> Project
            <a target="_blank" href="http://www.esdi.es/content/pdf/gala279.pdf">GALA 279</a>: Intercity cargo bike. As a collaborator in charge of design
            management, comunication, partner search and translation.
          </li>
        </ul>
        <h2 class="mt-5">Other work experience non related to code nor design</h2>
        <ul>
          <li>
            <strong>2007 · 2013</strong> Dealer at
            <a target="_blank" href="http://medran.cat/">Cansaladeries Medrán</a>.
          </li>
          <li>
            <strong>2010 · 2013</strong> Clerk and TA at
            <a
              target="_blank"
              href="https://www.ihes.comInternational"
            >House Sabadell</a>.
          </li>
          <li>
            <strong>2013 · 2017</strong> English teacher at
            <a target="_blank" href="https://www.naturalkids.cat/">NaturalKids</a>.
          </li>
        </ul>

        <h2 class="mt-5">Volunteering experiencies</h2>
        <ul>
          <li>
            <strong>2013 · 2014 · 2015</strong> Volunteer at festival
            <a target="_blank" href="http://offf.barcelona/">OFFF</a> festival, as
            head of the volunteers’ team.
          </li>
          <li>
            <strong>2013</strong> Volunteer at
            <a target="_blank" href="https://fiberfib.com/">FIB</a>, Festival
            Independent de Benicàssim.
          </li>
        </ul>
        <h2 class="mt-5">Look! I've been on the papers</h2>
        <ul>
          <li>
            <a
              target="_blank"
              href="https://www.elpuntavui.cat/economia/article/18-economia/1690337-el-talent-digital-mes-buscat.html"
            >
              <strong>2019 | El Punt Avui</strong>
            </a>
          </li>
        </ul>
        <!-- <iframe src="https://giphy.com/embed/xIJLgO6rizUJi" width="480" height="367" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/alice-in-wonderland-thank-you-xIJLgO6rizUJi"></a></p> -->
      </div>
      <div class="get-to-know-me">
        <h2>Get to know me!</h2>
        <div class="connections-container container d-flex flex-wrap justify-content-center">
          <a href="https://calendly.com/cristinamoreno" target="_blank">Schedule a meeting</a>
          <!-- <a [routerLink]="['/reach-me']">Drop me a line</a> -->
          <a href="mailto:hello@notcalpi.me" target="_blank">Email me!</a>
          <a href="https://www.instagram.com/calpimoreno/?hl=de" target="_blank">Instagram</a>
          <a href="https://www.linkedin.com/in/morenomedran/" target="_blank">Linkedin</a>
          <a href="https://medium.com/@cristinamorenomedran" target="_blank">Medium</a>
          <a href="https://github.com/crismoreno" target="_blank">Github</a>
        </div>
      </div>
    </div>
    <div class="medium-fetched">
      <BlogComponent class="display-projects d-flex flex-row flex-wrap justify-content-center"></BlogComponent>
    </div>
  </div>
</template>
<script>
import BlogComponent from "../components/Blog.vue";
export default {
  name: "AboutMe",
  components: {
    BlogComponent
  }
};
</script>
