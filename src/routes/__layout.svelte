<script>
	import Circles from '$lib/Circles.svelte';
	import ThemeSwitcher from '$lib/Theme.svelte';
	import { page } from '$app/stores';

	import PageTransition from '$lib/PageTransition.svelte';

	import { theme } from '../stores';

	import '../app.scss';
</script>

<svelte:head>
	<meta name="color-scheme" content={$theme} />
</svelte:head>

<Circles />

<main>
	<PageTransition url={$page.url}>
		<slot />
	</PageTransition>

	<ThemeSwitcher />
</main>
