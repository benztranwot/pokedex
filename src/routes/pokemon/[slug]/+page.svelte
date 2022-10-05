<script>
	export let data;

	const { name, height, weight, sprites, types } = data;
	const { front_default: image } = sprites;
	const { name: type } = types[0].type;
</script>

<svelte:head>
	<title>{name.toUpperCase()} | Pokedex</title>
</svelte:head>

<div class="flex flex-col items-center capitalize">
	<h1 class="text-4xl text-center my-4 mb-8 uppercase">{name}</h1>
	<p>Type: <strong>{type}</strong></p>
	<p>Height: <strong>{height}</strong> | Weight: <strong>{weight}</strong></p>
	<img src={image} alt={name} class="h-40 w-40" />
</div>
