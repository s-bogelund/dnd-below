const BASE_STRING = 'https://www.dnd5eapi.co/api/ability-scores/'
const SUB_STRINGS = ['con', 'str', 'dex', 'int', 'wis', 'cha']

export interface ISkill {
	name: string
	index: string
	url?: string
	proficient: boolean
	modifier: number
}

export interface IAbilityScore {
	name: string
	fullName: string
	desc: string[]
	score: number
	savingThrows: string[]
	skills: ISkill[]
}

export function isIAbilityScore(obj: any): obj is IAbilityScore {
	return (
		obj.name && obj.fullName && obj.desc && obj.score && obj.savingThrows && obj.skills
	)
}

const fetchApi = async (subString: string) => {
	const response = await fetch(`${BASE_STRING + subString}`)
	const data = await response.json()
	return { data }
}

export const fetchAllData = async () => {
	let data = await Promise.all(SUB_STRINGS.map(fetchApi))
	// console.log(data)
	data.forEach(item => {
		delete item.data?.url
		delete item.data?.index
	})

	const newData = data.map(item => item.data)
	// console.log('cleaned data: ', data)

	newData.forEach(item => {
		delete item.skills?.url
	})
	// console.log('new clean data: ', newData)

	window.localStorage.setItem('abilityScores', JSON.stringify(data))
}

export const modifyData = () => {
	interface newStatItem extends IAbilityScore {
		savingThrow: { value: number; proficient: boolean }
	}

	const data: any[] = JSON.parse(localStorage.getItem('abilityScores') || '[]')
	// console.log(data)
	const skills = data.map(item => item.data?.skills)
	skills?.forEach(item => {
		delete item?.url
	})

	// console.log(skills)

	// Adding score and saving throw to each ability score
	let newData: any[] = data.map(item => {
		const newItem: newStatItem = {
			...item.data,
			score: Math.floor(Math.random() * 9) + 8,
			savingThrow: {
				name: 'Saving Throw',
				index: 'SAV',
				modifier: Math.floor(Math.random() * 3),
				proficient: Math.floor(Math.random() * 3) === 1,
			},
		}
		return newItem
	})

	// adding saving throw to list of skills
	newData.forEach(item => {
		const skills: ISkill[] = item.skills

		// Sort the skills by name
		skills.sort((a, b) => {
			return a.name > b.name ? 1 : -1
		})

		// Add the saving throw to the list of skills
		// Should always be first, so unshift > push
		skills.unshift({
			name: 'Saving Throw',
			index: 'SAV',
			modifier: Math.floor(Math.random() * 3),
			proficient: Math.floor(Math.random() * 3) === 1,
		})

		// changing name to camel case
		item['fullName'] = item['full_name']
		delete item['full_name']

		// removing url and adding modifier and proficient to skills
		skills?.forEach(skill => {
			delete skill.url
			skill.modifier = Math.floor(Math.random() * 4)
			skill.proficient = Math.floor(Math.random() * 3) === 1
		})
	})
	// persistance handled by localStorage for now
	// console.log('Final data', newData)
	localStorage.setItem('abilityScores', JSON.stringify(newData))
}

export const getData = async (): Promise<any> => {
	let data = await JSON.parse(localStorage.getItem('abilityScores') || '[]')
	if (data.length < 1) {
		await fetchAllData()
		modifyData()
	}

	data = await JSON.parse(localStorage.getItem('abilityScores') || '[]')
	if (data.length < 1) console.log('error fetching data')

	// console.log('data:', data)
	let resolved = await Promise.resolve(data)
	return resolved
}

export const storeDataLocal = (data: any, storageName: string) => {
	localStorage.setItem(storageName, JSON.stringify(data))
}
