<script>
	import Card from '../lib/Card.svelte';

	export let data;
	const { pokemon } = data;

	let searchTerm = '';
	let filteredPokemon = [];

	$: {
		if (searchTerm) {
			filteredPokemon = pokemon.filter((item) =>
				item.name.toLowerCase().includes(searchTerm.toLowerCase())
			);
		} else {
			filteredPokemon = [...pokemon];
		}
	}
</script>

<svelte:head>
	<title>Home | Pokedex</title>
</svelte:head>

<h1 class="text-4xl text-center my-6 uppercase">Welcome to Pokedex</h1>

<div class="p-4">
	<input
		type="text"
		placeholder="Search Pokemon"
		class="w-full rounded-md text-lg p-2 border-2 border-gray-200"
		bind:value={searchTerm}
	/>
</div>

<div class="p-4 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
	{#each filteredPokemon as item (item.id)}
		<Card {item} />
	{/each}
</div>
