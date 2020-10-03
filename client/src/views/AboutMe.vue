<template>
  <div class="mt-5">
    <div class="about-me-container container main-container">
      <div class="jumbotron">
        <h1 class="display-4">Cristina Moreno Medran 🙋🏻</h1>
        <p class="lead">
          I'm a {{ age }} year-old Front-End developer and designer living in
          Badalona, Barcelona
        </p>
        <hr class="my-4" />
        <p>Have a look at my CV and don't hesitate to get in touch!</p>
        <div
          class="d-flex flex-column flex-xl-row flex-lg-row flex-md-row flex-sm-row"
        >
          <a
            role="button"
            href="https://drive.google.com/file/d/1BQoUKNr6914pvyGldv4lyLLb8v_cybwA/view?usp=sharing"
            >DOWNLOAD MY CV</a
          >
          <a
            role="button"
            href="https://drive.google.com/drive/folders/1XeHfBeqMyA6vIZsKpu-0J8tQq7xgNSu6?usp=sharing"
            >CHECK MY CERTIFICATES</a
          >
        </div>
      </div>

      <div class="others d-flex flex-wrap justify-content-between mb-3">
        <p>Català: Nivell Nadiu</p>
        <p>Castellano: Nivel Nativo</p>
        <p>English: C1</p>
      </div>

      <div class="studies">
        <!-- <h1>Studies</h1> -->
        <div
          class="studies-container container d-flex justify-content-center flex-wrap"
        >
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
            <router-link class="projects-link" to="/portfolio?place=5"
              >Check out my projects developed at Assembler School</router-link
            >
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
            <router-link class="projects-link" to="/portfolio?place=1"
              >Check out my projects developed at Ironhack</router-link
            >
          </div>
          <div class="esdi d-flex flex-column justify-content-center">
            <a href="https://esdi.es/" target="_blank">
              <div class="card">
                <img
                  class="card-img-top"
                  src="../assets/img/cv/esdi.png"
                  alt="Design at ESDI"
                />
                <div class="card-body">
                  <p class="card-text">
                    <strong>2011 - 2015</strong> · Bachelor’s degree in Design
                    Management. (URL)
                  </p>
                </div>
              </div>
            </a>
            <router-link class="projects-link" to="/portfolio?place=2"
              >Check out my projects developed ESDI (Escola Superior de Diseny),
              URL</router-link
            >
          </div>
        </div>
        <div
          class="studies-container container d-flex justify-content-center flex-wrap"
        >
          <a href="https://reactgraphql.academy/" target="_blank">
            <div class="card">
              <img
                class="card-img-top"
                src="../assets/img/cv/reactgraphqlacademy.png"
                alt="React at ReactGraphQLAcademy"
              />
              <div class="card-body">
                <p class="card-text">
                  <strong>2019</strong> · Attended a single-day React
                  Fundamentals Bootcamp. Among a lot other activities they
                  organised.
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
                  <strong>2016</strong> · HTML & CSS Summer Workshop. Designed
                  to start learning code. (My first approach to coding)
                </p>
              </div>
            </div>
          </a>
          <a
            href="https://www.certificaciongoogleanalytics.com/"
            target="_blank"
          >
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

      <div
        class="software-container container d-flex justify-content-center flex-wrap"
      >
        <div class="card">
          <div class="card-header">ADOBE SUITE</div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Photoshop</li>
            <li class="list-group-item">Illustrator</li>
            <li class="list-group-item">Indesign</li>
            <li class="list-group-item">Premiere Pro</li>
          </ul>
        </div>
        <div class="card">
          <div class="card-header">MANAGEMENT TOOLS</div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Jira</li>
            <li class="list-group-item">Confluence</li>
            <li class="list-group-item">Bitbucket</li>
            <li class="list-group-item">Teamwork</li>
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
            <router-link to="/portfolio?codingLang=5"
              >Go to HTML projects</router-link
            >
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
            <router-link to="/portfolio?codingLang=6"
              >Go to CSS projects</router-link
            >
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
            <router-link to="/portfolio?codingLang=7"
              >Go to jS projects</router-link
            >
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

        <div class="php code-tool">
          <div class="d-flex justify-content-between">
            <h3>PHP</h3>
            <router-link to="/portfolio?codingLang=11"
              >Go to PHP projects</router-link
            >
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
            <router-link to="/portfolio?codingLang=4"
              >Go to Bootstrap projects</router-link
            >
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
            <router-link to="/portfolio?codingLang=3"
              >Go to jQuery projects</router-link
            >
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
            <router-link to="/portfolio?codingLang=14"
              >Go to Mysql projects</router-link
            >
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
            <router-link to="/portfolio?codingLang=1"
              >Go to VuejS projects</router-link
            >
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
            <router-link to="/portfolio?codingLang=1"
              >Go to React projects</router-link
            >
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

        <div class="angular code-tool">
          <div class="d-flex justify-content-between">
            <h3>ANGULAR</h3>
            <router-link to="/portfolio?codingLang=9"
              >Go to Angular projects</router-link
            >
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
            <router-link to="/portfolio?codingLang=1"
              >Go to Express projects</router-link
            >
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
            <h3>HAPI</h3>
          </div>
          <div class="progress">
            <div
              class="progress-bar progress-bar-striped bg-danger"
              role="progressbar"
              style="width: 65%"
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
            <router-link to="/portfolio?codingLang=18"
              >Go to Gulp projects</router-link
            >
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
            <router-link to="/portfolio?codingLang=21"
              >Go to Webpack projects</router-link
            >
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
            <router-link to="/portfolio?codingLang=16"
              >Go to SASS projects</router-link
            >
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
            <router-link to="/portfolio?codingLang=10"
              >Go to Wordpress projects</router-link
            >
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
            <router-link to="/portfolio?codingLang=15"
              >Go to Magento projects</router-link
            >
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
            <a href="https://github.com/crismoreno" target="_blank"
              >Go to GITHUB</a
            >
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
        <h2>Code Related Work Experience</h2>
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
              <img
                src="../assets/img/icons/expand_more.svg"
                class="more-info-button-down"
              />
              <img
                src="../assets/img/icons/expand_less.svg"
                class="more-info-button-up d-none"
              />
              <span class="highlight">
                <strong>October 2020 · Ongoing</strong>
                Front-End developer at
                <a href="https://www.redpoints.com" target="_blank"
                  >Red Points</a
                >
              </span>
            </button>
          </li>
          <div class="collapse" id="collapseRedPoints">
            <div class="card card-body">
							<img
                  class="card-img-top"
                  src="../assets/img/cv/red_points.png"
                  alt="Web Development at Assembler School"
									style="width: 140px; margin-bottom: 20px;"
                />
              <p>
                As an Front-End developer at Red Points, I'm improving my jS
                (React, Redux, React Testing Library & AntDesign) skills by
                helping the team improve the company product. Moreover, having
                the chance to work at that company has been a revealing
                experience in terms of Agile methodolgies. In addition, no
                sooner had I entered at my workplace, top notch developers were
                teaching me code best practices in a sophisticated work pipeline
                I never had the chance to work before. This is not only being
                challenging but very stimulating!
              </p>
            </div>
          </div>
          <li>
            <button
              class="more-info-button"
              type="button"
              data-toggle="collapse"
              data-target="#collapseRedPointsIntern"
              aria-expanded="false"
              aria-controls="collapseRedPointsIntern"
            >
              <img
                src="../assets/img/icons/expand_more.svg"
                class="more-info-button-down"
              />
              <img
                src="../assets/img/icons/expand_less.svg"
                class="more-info-button-up d-none"
              />
              <span>
                <strong>April 2020 · October 2020</strong>
                Intern Front-End developer at
                <a href="https://www.redpoints.com" target="_blank"
                  >Red Points</a
                >
              </span>
            </button>
          </li>
          <div class="collapse" id="collapseRedPointsIntern">
            <div class="card card-body">
							<img
                  class="card-img-top"
                  src="../assets/img/cv/red_points.png"
                  alt="Web Development at Assembler School"
									style="width: 140px; margin-bottom: 20px;"
                />
              <p>
                As an Intern Front-End developer at Red Points, I'm learning
                React-Redux by helping my team to improve the Red Point's
                digital product. Moreover, having the chance to work at that
                company has been a revealing experience in terms of Agile
                methodolgies. In addition, no sooner had I entered at my
                workplace, top notch developers were teaching me code best
                practices in a sophisticated work pipeline I never had the
                chance to work before. This is not only being challenging but
                very stimulating!
              </p>
            </div>
          </div>
          <li>
            <button
              class="more-info-button"
              type="button"
              data-toggle="collapse"
              data-target="#collapseAssembler"
              aria-expanded="false"
              aria-controls="collapseAssembler"
            >
              <img
                src="../assets/img/icons/expand_more.svg"
                class="more-info-button-down"
              />
              <img
                src="../assets/img/icons/expand_less.svg"
                class="more-info-button-up d-none"
              />
              <strong>October 2019 · June 2020</strong>
              <a href="https://www.assemblerschool.com/" target="_blank"
                >Assembler School</a
              >
              Full-Stack web development master degree.
            </button>
          </li>
          <div class="collapse-assembler collapse" id="collapseAssembler">
            <div class="card card-body">
							<img
                  class="card-img-top"
                  src="../assets/img/cv/assembler_school.png"
                  alt="Web Development at Assembler School"
									style="width: 60px; margin-bottom: 20px;"
                />
              <p>
                Having gone through Assembler School of Software Engineering
                Full-Stack program means I accomplished 9 months of fulltime
                real-life-oriented-projects (1200 hours) in both back-end and
                front-end technologies. This Master Degree maily involves
                JavaScript and PHP technologies plus some GoLang. Below, you can
                see my global scoring with detail on every single technology we
                have worked on having achieved
                <b>9,6/10</b> average score.
              </p>
              <img
                class="card-img-top"
                src="../assets/img/cv/assembler-scoring.png"
                alt="Web Development at Assembler School"
              />
              <router-link to="/portfolio?place=5"
                >Projects developed at Assembler School</router-link
              >
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
              <img
                src="../assets/img/icons/expand_more.svg"
                class="more-info-button-down"
              />
              <img
                src="../assets/img/icons/expand_less.svg"
                class="more-info-button-up d-none"
              />
              <strong>February 2018 · October 2019</strong> Front-End developer
              at <a href="https://www.dobcn.com/" target="_blank">DoBcn</a>.
            </button>
          </li>

          <div class="collapse-dobcn collapse" id="collapseDobcn">
            <div class="card card-body">
							<img
                  class="card-img-top"
                  src="../assets/img/cv/dobcn.png"
                  alt="Web Development at Assembler School"
									style="width: 60px; margin-bottom: 20px;"
                />
              <p>
                At dobcn I've mainly worked on the front end side of the
                platforms they have developed. This pushed me to learn PHP, CMS
                (Wordpress and Magento) while involved me in real world
                projects. I introduced GIT and switched plain CSS stylesheets
                too SASS in all of the projects I had the chance to work in. Go
                check my Projects developed as part of the team at dobcn.
              </p>
              <router-link to="/portfolio?place=4"
                >Projects developed at DoBcn</router-link
              >
            </div>
          </div>
          <h2 class="mt-5">Digital Marketing Related Work Experience</h2>
          <li>
            <button
              class="more-info-button"
              type="button"
              data-toggle="collapse"
              data-target="#collapseNordic"
              aria-expanded="false"
              aria-controls="collapseNordic"
            >
              <img
                src="../assets/img/icons/expand_more.svg"
                class="more-info-button-down"
              />
              <img
                src="../assets/img/icons/expand_less.svg"
                class="more-info-button-up d-none"
              />
              <strong>June 2016 · September 2017</strong> SEM & SMM at
              <a target="_blank" href="https://nordicprojects.es"
                >Nordic Projects</a
              >.
            </button>
          </li>

          <div class="collapse-nordic collapse" id="collapseNordic">
            <div class="card card-body">
							<img
                  class="card-img-top"
                  src="../assets/img/cv/nordic.png"
                  alt="Web Development at Assembler School"
									style="width: 160px; margin-bottom: 20px;"
                />
              <p>
                At Nordic Websites I had the pleasure to be involved in real
                world projects as SEM and SMM while I had the chance to go
                through several marketing related trainings. (Google Analytics
                technical specialist in Google Analytics at Mide y Vencerás.)
              </p>
              <router-link to="/portfolio?place=3"
                >Projects developed at Nordic Projects</router-link
              >
            </div>
          </div>
          <h2 class="mt-5">
            Design Management / Event Planning work experience
          </h2>
          <li>
            <strong>April 2017 · June 2017</strong> Crew Member at The Art Of
            Performance Tour by Jaguar and The Above & Beyond Tour by Land
            Rover.
          </li>

          <li>
            <strong>2013 · 2017</strong> Design and communication at
            <a target="_blank" href="https://www.naturalkids.cat/"
              >naturalKIDS</a
            >.
            <router-link class="projects-link ml-1" to="/project/7"
              >Check it out</router-link
            >
          </li>
          <li>
            <strong>September 2015 · March 2016</strong> Designer at
            <a target="_blank" href="https://www.sieteysiete.com/"
              >SieteySiete Media</a
            >.
          </li>
          <li>
            <strong>2013 · 2015</strong> Communication, management and design at
            Club esportiu Are you Ready?.
          </li>
          <li>
            <strong>2016 · 2017</strong> Design & communication at
            <a target="_blank" href="https://comacsl.com/"
              >COMAC Esports i Lleure S.L</a
            >.
            <router-link class="projects-link ml-1" to="/project/13"
              >Check it out</router-link
            >
          </li>
          <li>
            <strong>2013 · 2014</strong> Head of the design department and
            communication at
            <a target="_blank" href="http://medran.cat/"
              >Cansaladeries Medrán.</a
            >
            <router-link class="projects-link ml-1" to="/project/6"
              >Check it out</router-link
            >
          </li>
          <li>
            <strong>2015</strong> Relationship Management at Open Espanya de
            Golf.
          </li>
          <li>
            <strong>2014</strong> Internship at
            <a target="_blank" href="http://www.dogwood.es/"
              >Dowgood brand partner agency</a
            >'s Design dept.
          </li>
          <li>
            <strong>2014</strong> Recording, production and edition of a
            promotional teaser for
            <a target="_blank" href="http://www.nataciosabadell.com/"
              >Club de Natació de Sabadell</a
            >
            (Freelance project).
            <router-link class="projects-link" to="/project/15"
              >Check it out</router-link
            >
          </li>
          <li>
            <strong>2014</strong> Corporate identity design for Villena & Rühl
            (Freelance project).
            <router-link class="projects-link" to="/project/10"
              >Check it out</router-link
            >
          </li>
          <li>
            <strong>2014</strong> Internship at
            <a
              target="_blank"
              href="http://www.lavanguardia.com/de-moda/20140526/54408360842/intercolor-acuerda-en-barcelona-los-colores-de-moda-para-el-verano-de-2016.html"
              >ESDI Color_Lab</a
            >
            collaborator in the Intercolor Project.
          </li>
          <li>
            <strong>2013 · 2014</strong> Project
            <a target="_blank" href="http://www.esdi.es/content/pdf/gala279.pdf"
              >GALA 279</a
            >: Intercity cargo bike. As a collaborator in charge of design
            management, communication, partner search and translation.
          </li>
        </ul>
        <h2 class="mt-5">
          Other work experience non related to code nor design
        </h2>
        <ul>
          <li>
            <strong>2007 · 2013</strong> Dealer at
            <a target="_blank" href="http://medran.cat/">Cansaladeries Medrán</a
            >.
          </li>
          <li>
            <strong>2010 · 2013</strong> Clerk and TA at
            <a target="_blank" href="https://www.ihes.com"
              >International House Sabadell</a
            >.
          </li>
          <li>
            <strong>2013 · 2017</strong> English teacher at
            <a target="_blank" href="https://www.naturalkids.cat/"
              >NaturalKids</a
            >.
          </li>
        </ul>

        <h2 class="mt-5">Volunteering experiencies</h2>
        <ul>
          <li>
            <strong>2013 · 2014 · 2015</strong> Volunteer at festival
            <a target="_blank" href="http://offf.barcelona/">OFFF</a> festival,
            as head of the volunteers’ team.
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
        <div
          class="connections-container container d-flex flex-wrap justify-content-center"
        >
          <a href="https://calendly.com/cristinamoreno" target="_blank"
            >Schedule a meeting</a
          >
          <!-- <a [routerLink]="['/reach-me']">Drop me a line</a> -->
          <a href="mailto:moreno.medran@gmail.com" target="_blank">Email me!</a>
          <a href="https://www.instagram.com/calpimoreno/?hl=de" target="_blank"
            >Instagram</a
          >
          <a href="https://www.linkedin.com/in/morenomedran/" target="_blank"
            >Linkedin</a
          >
          <a href="https://medium.com/@cristinamorenomedran" target="_blank"
            >Medium</a
          >
          <a href="https://github.com/crismoreno" target="_blank">Github</a>
        </div>
      </div>
    </div>
    <div class="medium-fetched">
      <BlogComponent
        limit="4"
        class="display-projects d-flex flex-row flex-wrap justify-content-center"
        fragment="true"
      ></BlogComponent>
    </div>
  </div>
</template>
<script>
import BlogComponent from "../components/Blog.vue";
import moment from "moment";
export default {
  name: "AboutMe",
  components: {
    BlogComponent,
  },
  data() {
    return {
      age: "",
    };
  },
  created() {
    this.age = moment().diff(moment("19930601", "YYYYMMDD"), "years");
  },
};
</script>
