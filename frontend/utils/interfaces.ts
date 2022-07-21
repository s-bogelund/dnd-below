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
	index: string
	spellsSlots: number
	rest: Rest
}

export enum Rest {
	ShortRest = 'Short Rest',
	LongRest = 'Long Rest',
	None = 'None',
	Overnight = 'Overnight',
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
