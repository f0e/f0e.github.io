<script>
	import Title from '$lib/Title.svelte';
</script>

<svelte:head>
	<title>f0e / youtube archiver</title>
	<meta
		name="description"
		content="Archive YouTube content and rehost it inside a clean modern interface"
	/>
</svelte:head>

<Title text="youtube archiver" />
<p>archive youtube content and rehost it inside a clean modern interface.</p>

<br />

<nav class="links">
	<div class="link"><a href="https://github.com/f0e/youtube-archiver">homepage</a></div>
</nav>

<br />

<div class="list">
	<h3>features</h3>
	<ul>
		<li>
			automatically discovers new channels related to those that have been archived and adds them to
			the list
		</li>
		<li>downloads videos at the highest possible quality and includes all metadata and comments</li>
		<li>automatically re-scans all channels periodically to find new videos</li>
	</ul>
</div>
