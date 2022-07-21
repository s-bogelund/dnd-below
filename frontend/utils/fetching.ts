const BASE_PATH = 'https://www.dnd5eapi.co/api/'

export async function fetchSpellInfo(index: string) {
	const url = `${BASE_PATH}spells/${index}`
	const response = await fetch(url)
	const data = await response.json()
	console.log('spell data:', data)

	return data
}
