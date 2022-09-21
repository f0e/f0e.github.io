<script>
	import Title from '$lib/Title.svelte';
</script>

<svelte:head>
	<title>f0e / rank reveal</title>
	<meta name="description" content="Simple cheat-free rank revealer for CS:GO" />
</svelte:head>

<Title text="rank reveal" />
<p>this is a super simple csgo rank revealer that is completely safe to use.</p>

<br />

<p>
	by utilising the <code>-netconport</code> launch option, you can get a list of the players in the
	current server by reading the console output of the <code>status</code> command.
</p>

<br />

<p>
	using this player list i check each player on <a href="csgostats.gg">csgostats.gg</a> to find their
	rank.
</p>

<br />

<nav class="links">
	<div class="link"><a href="https://github.com/f0e/csgo-rank-reveal">homepage</a></div>
</nav>
