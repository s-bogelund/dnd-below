const baseString = 'https://www.dnd5eapi.co/api/ability-scores/'
const subStrings = ['str', 'dex', 'con', 'int', 'wis', 'cha']

const fetchApi = async (subString: string) => {
	const response = await fetch(`${baseString + subString}`)
	const data = await response.json()
	return { data }
}

export const fetchAllData = async () => {
	let data = await Promise.all(subStrings.map(fetchApi))
	console.log(data)
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
	interface statItem {
		desc: string[]
		name: string
		full_name: string
		skills: {
			name: string
			index: string
			url: string
		}[]
	}
	interface newStatItem extends statItem {
		savingThrow: { value: number; proficient: boolean }
	}

	const data: any[] = JSON.parse(
		window.localStorage.getItem('abilityScores') || '[]'
	)
	console.log(data)
	const skills = data.map(item => item.data?.skills)
	skills?.forEach(item => {
		delete item?.url
	})

	console.log(skills)

	let newData: any[] = data.map(item => {
		const newItem: newStatItem = {
			...item.data,
			savingThrow: {
				value: Math.floor(Math.random() * 3),
				proficient: Math.floor(Math.random() * 3) === 1,
			},
		}
		return newItem
	})

	newData.forEach(item => {
		const skills: {
			name: string
			index: string
			url?: string
			proficient: boolean
			modifier: number
		}[] = item.skills

		skills?.forEach(skill => {
			delete skill.url
			skill.modifier = Math.floor(Math.random() * 4)
			skill.proficient = Math.floor(Math.random() * 3) === 1
		})

		// console.log(skills)
	})

	console.log('Final data', newData)
	window.localStorage.setItem('abilityScores', JSON.stringify(newData))
}
