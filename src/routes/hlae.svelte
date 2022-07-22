<script>
	import Title from '$lib/Title.svelte';
</script>

<svelte:head>
	<title>f0e / hlae configs</title>
	<meta name="description" content="HLAE configs for recording high-quality CS:GO clips" />
</svelte:head>

<Title text="hlae configs" />
<p>hlae configs for recording high-quality CS:GO clips using ffmpeg and streams.</p>

<div style="margin-top: 0.5rem" />

<p>
	record motion blurred gameplay, separate the game, viewmodel and hud into their own video files
	and more.
</p>

<br />

<nav class="links">
	<div class="link"><a href="https://github.com/f0e/hlae-configs">homepage</a></div>
	<div class="link">
		<a href="https://github.com/f0e/hlae-configs/releases/latest">download</a>
	</div>
</nav>

<br />

<div class="list">
	<h3>available configs</h3>
	<div class="muted">note: all of these configs require hlae__base.cfg and hlae__settings.cfg.</div>
	<ul>
		<li>hlae.cfg</li>
		<span class="muted">regular recording</span>

		<li>hlae_blur.cfg</li>
		<span class="muted">regular recording with motion blur</span>

		<li>hlae_vm.cfg</li>
		<span class="muted">records game and viewmodel streams into separate files</span>

		<li>hlae_vm_blur.cfg</li>
		<span class="muted">records game and viewmodel into separate files with motion blur</span>

		<li>hlae_adv.cfg</li>
		<span class="muted">records game, depth, viewmodel and hud streams into separate files</span>
	</ul>
</div>
