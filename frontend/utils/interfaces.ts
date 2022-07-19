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
