<script>
	import { scale, fade } from 'svelte/transition';

	export let item;
	const { id, name, image } = item;
</script>

<div class="border-2 hover:drop-shadow-lg rounded-lg" in:scale out:fade>
	<a
		class="list-none p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm flex flex-col items-center"
		href={`/pokemon/${id}`}
	>
		<img class="h-40 w-40 " src={image} alt={name} />
		<h2 class="uppercase text-xl">{id}. {name}</h2>
	</a>
</div>
