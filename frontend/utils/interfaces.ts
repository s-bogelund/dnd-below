export interface IWeapon {
	name: string
	url: string
	description: string
	attBonus: number
	damage: string
	damageType: string
	weight: number
	index: string
	range: string
	properties: string[]
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
	Short = 'Short Rest',
	Long = 'Long Rest',
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
