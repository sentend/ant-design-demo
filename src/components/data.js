const pokemons = [{}]

for (let i = 0; i < 30; i++) {
	pokemons[i] = {
		name: `A${i + 100}jona${i * 30 - (i % 9)}`,
		rate: i + 14,
		number: i >= 10 ? `0${i}` : `00${i}`,
		id: i + 1,
		key: i,
	}
}

export default pokemons
