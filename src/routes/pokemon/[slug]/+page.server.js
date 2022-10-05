export const prerender = false;
export const csr = false;

export async function load({ params }) {
	const id = params.slug;
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	const res = await fetch(url);
	const data = await res.json();

	return data;
}
