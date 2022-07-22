<script>
	import { theme } from '../stores';

	const toggleTheme = () => theme.set($theme == 'dark' ? 'light' : 'dark');
</script>

<div class="theme-switcher" on:click={toggleTheme} />

<style lang="scss">
	.theme-switcher {
		position: absolute;

		bottom: 1rem;
		right: 1rem;

		width: 2.3rem;
		height: 2.3rem;

		border: 2px solid var(--card-border);
		border-radius: 100%;

		cursor: pointer;

		transition: background-color 0.13s, border-color 0.13s;
	}

	.theme-switcher:hover {
		background-color: var(--text-colour);
		border-color: var(--text-colour);
	}
</style>
