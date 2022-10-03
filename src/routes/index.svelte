<svelte:head>
	<title>f0e</title>
</svelte:head>

<div>
	<h1 class="title welcome">welcome</h1>

	<nav class="links">
		<div class="category">applications</div>
		<div class="link"><a href="/blur">blur</a></div>
		<div class="link"><a href="/archiver">youtube archiver</a></div>
		<br />
		<div class="category">csgo tools</div>
		<div class="link"><a href="/clipper">clipper</a></div>
		<div class="link"><a href="/rank-reveal">rank reveal</a></div>
		<div class="link"><a href="/hlae">hlae configs</a></div>
		<div class="link"><a href="/crosshair">crosshair generator</a></div>
	</nav>
</div>

<style lang="scss">
	.category {
		font-weight: bold;
	}

	@media only screen and (max-width: 600px), screen and (max-height: 700px) {
		.category {
			margin-bottom: 0.5rem;
		}

		.welcome {
			margin-bottom: 1rem;
		}
	}
</style>
