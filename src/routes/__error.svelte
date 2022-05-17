<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export function load({ error, status }) {
		return {
			props: { error, status }
		};
	}
</script>

<script>
	export let error, status;
</script>

<h1><a class="back" href="/" />{status}</h1>
<p>{error.message.toLowerCase()}</p>
