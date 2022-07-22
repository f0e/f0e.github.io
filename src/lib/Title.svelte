<script>
	export let text = '';
</script>

<h1 class="title">
	<a class="back" href="/">
		{'<'}
	</a>{text}
</h1>

<style>
	.back {
		display: inline-block;

		margin-right: 0.5rem;

		color: var(--text-colour);
		opacity: 0.5;

		cursor: pointer;
		text-decoration: none;
		user-select: none;

		transform: scaleX(0.75);
	}
</style>
