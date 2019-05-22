<script context="module">
	import getQuotes from './getQuotes';
	export async function preload({ params, query }) {
		const quotes = await getQuotes(this.fetch)

		if (quotes) {
			return { quotes };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export let quotes;

	const updateQuotes = async () => {
		quotes = await getQuotes();
	}
</script>

<style>
	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}
</style>

<svelte:head>
	<title>Quotes</title>
</svelte:head>

<button on:click={updateQuotes}>Moar</button>
<h1>{quotes}</h1>
