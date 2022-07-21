export interface IWeapon {
	name: string
	attBonus: number
	damage: string
	type: string
}

export interface IAbility {
	name: string
	url: string
	description: string
	level: number
	rest: Rest
}

enum Rest {
	shortRest = 'shortRest',
	longRest = 'longRest',
	none = 'none',
	overnight = 'overnight',
}
export interface IAbilityScore {
	name: string
	fullName: string
	desc: string[]
	score: number
	savingThrows: string[]
	skills: ISkill[]
}
export interface ISkill {
	name: string
	index: string
	url?: string
	proficient: boolean
	modifier: number
}
