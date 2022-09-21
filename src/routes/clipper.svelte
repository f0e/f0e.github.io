<script>
	import Title from '$lib/Title.svelte';
</script>

<svelte:head>
	<title>f0e / clipper</title>
	<meta name="description" content="Automatic POV demo recording tool for CS:GO" />
</svelte:head>

<Title text="clipper" />
<p>clipper is a pov demo recording and management tool for csgo.</p>

<div style="margin-top: 0.5rem" />

<div class="list">
	<h3>modes</h3>
	<ul>
		<li>archiver</li>
		<span class="muted">automatically record every match you play</span>

		<li>clipper</li>
		<span class="muted"
			>record specific rounds in a game using a shadowplay-like clipping system</span
		>
	</ul>
</div>

<p>
	you can also view and manage all of your demos through a web interface, which makes organising
	them easier than working directly with files.
</p>

<br />

<nav class="links">
	<div class="link"><a href="https://github.com/f0e/clipper">homepage</a></div>
	<div class="link">
		<a href="https://github.com/f0e/clipper/releases/latest">download</a>
	</div>
</nav>
