<template>
	<div>

		<nav class="navbar navbar-expand-lg">
			<a class="navbar-brand" href="/"><img height="30" src="../src/assets/img/white-logo.svg"></a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
				<ul class="navbar-nav mr-0">
					<li class="nav-item">
						<a class="nav-link" href="/portfolio">Portfolio</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="/blog">Blog</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="/about-me">About Me</a>
					</li>
					<li class="nav-item highlight-menu-item">
						<a class="nav-link" href="/reach-me">Reach Me @</a>
					</li>
				</ul>
			</div>
		</nav>
		<router-view/>
		<footer>
			<div class="d-flex justify-content-between px-3 flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row">
				<p class="d-none d-sm-block d-md-block d-lg-block d-xl-block">Made with 💛 by Cristina Moreno</p>
				<div>
					<ul class="d-flex justify-content-center">
						<li><a href="https://github.com/crismoreno" target="_blank">Github</a></li>
						<li>·</li>
						<li><a href="https://www.linkedin.com/in/morenomedran/" target="_blank">LinkedIn</a></li>
						<li>·</li>
						<li><a href="https://medium.com/@cristinamorenomedran" target="_blank">Medium</a></li>
						<li>·</li>
						<li><a href="/reach-me">Reach me@</a></li>
						<li>·</li>
						<li><img height="30" src="../src/assets/img/mini-logo.svg"></li>
					</ul>
				</div>
			</div>
		</footer>
			<div class="container flex-xl-row flex-lg-column flex-md-column flex-sm-column flex-column justify-content-between" id="cookie_consent">
				<div><p>🍪 By using this site, you acknowledge that you have read and understood the <a href="/cookies">cookie policy</a>.🍪</p></div>
				<div class="d-flex justify-content-center"><button id="close-cookie-button">Close this</button></div>
			</div>
	</div>
</template>

<style>
  @import'~bootstrap/dist/css/bootstrap.css';
</style>

<script>
  export default {
	name: 'App'
  }
</script>
