export default {
	// ------------ page one ---------------
	name: "character",
	title: "Character",
	type: "document",
	fields: [
		{
			name: "generalInfo",
			title: "General Info",
			type: "object",
			fields: [
				{
					name: "characterName",
					title: "Character Name",
					type: "string",
				},
				{
					name: "class",
					title: "Class",
					type: "string",
				},
				{
					name: "level",
					title: "Level",
					type: "number",
					options: { min: 1, max: 20, step: 1 },
				},
				{
					name: "race",
					title: "Race",
					type: "string",
				},
				{
					name: "background",
					title: "Background",
					type: "string",
				},
				{
					name: "alignment",
					title: "Aligment",
					type: "string",
				},
				{
					name: "playerName",
					title: "Player Name",
					type: "string",
				},
				{
					name: "xp",
					title: "XP",
					type: "number",
					options: { min: 0 },
				},
			],
		},

		//! ------------ LEFT COLUMN ---------------
		{
			name: "stats",
			title: "Stats",
			type: "object",
			fields: [
				{
					name: "strength",
					title: "Strength",
					type: "number",
					options: {
						min: 1,
						max: 20,
						step: 1,
					},
				},
				{
					name: "dexterity",
					title: "Dexterity",
					type: "number",
					options: {
						min: 1,
						max: 20,
						step: 1,
					},
				},
				{
					name: "constitution",
					title: "Constitution",
					type: "number",
					options: {
						min: 1,
						max: 20,
						step: 1,
					},
				},
				{
					name: "intelligence",
					title: "Intelligence",
					type: "number",
					options: {
						min: 1,
						max: 20,
						step: 1,
					},
				},
				{
					name: "wisdom",
					title: "Wisdom",
					type: "number",
					options: {
						min: 1,
						max: 20,
						step: 1,
					},
				},
				{
					name: "charisma",
					title: "Charisma",
					type: "number",
					options: {
						min: 1,
						max: 20,
						step: 1,
					},
				},
			],
		},
		{
			name: "inspiration",
			title: "Inspiration",
			type: "number",
		},
		{
			name: "proficiencyBonus",
			title: "Proficiency Bonus",
			type: "number",
		},
		{
			name: "savingThrows",
			title: "Saving Throws",
			type: "object",
			fields: [
				{
					name: "strength",
					title: "Strength",
					type: "object",
					fields: [
						{
							name: "proficient",
							title: "Proficient",
							type: "boolean",
						},
						{
							name: "modifier",
							title: "Modifier",
							type: "number",
						},
					],
				},
				{
					name: "dexterity",
					title: "Dexterity",
					type: "object",
					fields: [
						{
							name: "proficient",
							title: "Proficient",
							type: "boolean",
						},
						{
							name: "modifier",
							title: "Modifier",
							type: "number",
						},
					],
				},
				{
					name: "constitution",
					title: "Constitution",
					type: "object",
					fields: [
						{
							name: "proficient",
							title: "Proficient",
							type: "boolean",
						},
						{
							name: "modifier",
							title: "Modifier",
							type: "number",
						},
					],
				},
				{
					name: "intelligence",
					title: "Intelligence",
					type: "object",
					fields: [
						{
							name: "proficient",
							title: "Proficient",
							type: "boolean",
						},
						{
							name: "modifier",
							title: "Modifier",
							type: "number",
						},
					],
				},
				{
					name: "wisdom",
					title: "Wisdom",
					type: "object",
					fields: [
						{
							name: "proficient",
							title: "Proficient",
							type: "boolean",
						},
						{
							name: "modifier",
							title: "Modifier",
							type: "number",
						},
					],
				},
				{
					name: "charisma",
					title: "Charisma",
					type: "object",
					fields: [
						{
							name: "proficient",
							title: "Proficient",
							type: "boolean",
						},
						{
							name: "modifier",
							title: "Modifier",
							type: "number",
						},
					],
				},
			],
		},
		{
			name: "skills",
			title: "Skills",
			type: "object",
			fields: [
				{
					name: "acrobatics",
					title: "Acrobatics",
					type: "object",
					fields: [
						{
							name: "proficient",
							title: "Proficient",
							type: "boolean",
						},
						{
							name: "modifier",
							title: "Modifier",
							type: "number",
						},
					],
				},
				{
					name: "animalHandling",
					title: "Animal Handling",
					type: "object",
					fields: [
						{
							name: "proficient",
							title: "Proficient",
							type: "boolean",
						},
						{
							name: "modifier",
							title: "Modifier",
							type: "number",
						},
					],
				},
				{
					name: "arcana",
					title: "Arcana",
					type: "object",
					fields: [
						{
							name: "proficient",
							title: "Proficient",
							type: "boolean",
						},
						{
							name: "modifier",
							title: "Modifier",
							type: "number",
						},
					],
				},
				{
					name: "athletics",
					title: "Athletics",
					type: "object",
					fields: [
						{
							name: "proficient",
							title: "Proficient",
							type: "boolean",
						},
						{
							name: "modifier",
							title: "Modifier",
							type: "number",
						},
					],
				},
				{
					name: "deception",
					title: "Deception",
					type: "object",
					fields: [
						{
							name: "proficient",
							title: "Proficient",
							type: "boolean",
						},
						{
							name: "modifier",
							title: "Modifier",
							type: "number",
						},
					],
				},
				{
					name: "history",
					title: "History",
					type: "object",
					fields: [
						{
							name: "proficient",
							title: "Proficient",
							type: "boolean",
						},
						{
							name: "modifier",
							title: "Modifier",
							type: "number",
						},
					],
				},
				{
					name: "insight",
					title: "Insight",
					type: "object",
					fields: [
						{
							name: "proficient",
							title: "Proficient",
							type: "boolean",
						},
						{
							name: "modifier",
							title: "Modifier",
							type: "number",
						},
					],
				},
				{
					name: "intimidation",
					title: "Intimidation",
					type: "object",
					fields: [
						{
							name: "proficient",
							title: "Proficient",
							type: "boolean",
						},
						{
							name: "modifier",
							title: "Modifier",
							type: "number",
						},
					],
				},
				{
					name: "investigation",
					title: "Investigation",
					type: "object",
					fields: [
						{
							name: "proficient",
							title: "Proficient",
							type: "boolean",
						},
						{
							name: "modifier",
							title: "Modifier",
							type: "number",
						},
					],
				},
				{
					name: "medicine",
					title: "Medicine",
					type: "object",
					fields: [
						{
							name: "proficient",
							title: "Proficient",
							type: "boolean",
						},
						{
							name: "modifier",
							title: "Modifier",
							type: "number",
						},
					],
				},
				{
					name: "nature",
					title: "Nature",
					type: "object",
					fields: [
						{
							name: "proficient",
							title: "Proficient",
							type: "boolean",
						},
						{
							name: "modifier",
							title: "Modifier",
							type: "number",
						},
					],
				},
				{
					name: "perception",
					title: "Perception",
					type: "object",
					fields: [
						{
							name: "proficient",
							title: "Proficient",
							type: "boolean",
						},
						{
							name: "modifier",
							title: "Modifier",
							type: "number",
						},
					],
				},
				{
					name: "performance",
					title: "Performance",
					type: "object",
					fields: [
						{
							name: "proficient",
							title: "Proficient",
							type: "boolean",
						},
						{
							name: "modifier",
							title: "Modifier",
							type: "number",
						},
					],
				},
				{
					name: "persuasion",
					title: "Persuasion",
					type: "object",
					fields: [
						{
							name: "proficient",
							title: "Proficient",
							type: "boolean",
						},
						{
							name: "modifier",
							title: "Modifier",
							type: "number",
						},
					],
				},
				{
					name: "religion",
					title: "Religion",
					type: "object",
					fields: [
						{
							name: "proficient",
							title: "Proficient",
							type: "boolean",
						},
						{
							name: "modifier",
							title: "Modifier",
							type: "number",
						},
					],
				},
				{
					name: "sleightOfHand",
					title: "Sleight of Hand",
					type: "object",
					fields: [
						{
							name: "proficient",
							title: "Proficient",
							type: "boolean",
						},
						{
							name: "modifier",
							title: "Modifier",
							type: "number",
						},
					],
				},
				{
					name: "stealth",
					title: "Stealth",
					type: "object",
					fields: [
						{
							name: "proficient",
							title: "Proficient",
							type: "boolean",
						},
						{
							name: "modifier",
							title: "Modifier",
							type: "number",
						},
					],
				},
				{
					name: "survival",
					title: "Survival",
					type: "object",
					fields: [
						{
							name: "proficient",
							title: "Proficient",
							type: "boolean",
						},
						{
							name: "modifier",
							title: "Modifier",
							type: "number",
						},
					],
				},
			],
		},
		{
			name: "passivePerception",
			title: "Passive Perception",
			type: "number",
		},
		{
			name: "ohterProficienciesAndLanguages",
			title: "Other Proficiencies and Languages",
			type: "text",
		},

		//! ------------- MIDDLE COLUMN -------------------
		{
			name: "armorClass",
			title: "Armor Class",
			type: "number",
		},
		{
			name: "initiative",
			title: "Ínitiative",
			type: "number",
		},
		{
			name: "speed",
			title: "Speed",
			type: "number",
		},
		{
			name: "hitPoints",
			title: "Hit Points",
			type: "object",
			fields: [
				{
					name: "maxHitPoints",
					title: "Max Hit Points",
					type: "number",
				},
				{
					name: "currentHitPoints",
					title: "Current Hit Points",
					type: "number",
				},
				{
					name: "temporaryHitPoints",
					title: "Temporary Hit Points",
					type: "number",
				},
			],
		},
		{
			name: "hitDice",
			title: "Hit Dice",
			type: "string",
		},
		{
			name: "deathSaves",
			title: "Death Saves",
			type: "object",
			fields: [
				{
					name: "successes",
					title: "Successes",
					type: "number",
					options: { min: 0 },
				},
				{
					name: "failures",
					title: "Failures",
					type: "number",
					options: { min: 0 },
				},
			],
		},
		{
			name: "attacksAndSpellcasting",
			title: "Attacks & Spellcasting",
			type: "object",
			fields: [
				{
					name: "weapons",
					title: "Weapons",
					type: "array",
					of: [
						{
							name: "weapon",
							type: "object",
							fields: [
								{
									name: "name",
									title: "Name",
									type: "string",
								},
								{
									name: "atkBonus",
									title: "Atk Bonus",
									type: "number",
								},
								{
									name: "damageAndType",
									title: "Damage/Type",
									type: "string",
								},
							],
						},
					],
				},
				{
					name: "attackDescription",
					title: "Attack Description",
					type: "text",
				},
			],
		},
		{
			name: "equipment",
			title: "Equipment",
			type: "text",
		},
		{
			name: "coins",
			title: "Coins",
			type: "object",
			fields: [
				{
					name: "cp",
					title: "CP",
					type: "number",
					options: { min: 0 },
				},
				{
					name: "sp",
					title: "SP",
					type: "number",
					options: { min: 0 },
				},
				{
					name: "ep",
					title: "EP",

					type: "number",
					options: { min: 0 },
				},
				{
					name: "gp",
					title: "GP",

					type: "number",
					options: { min: 0 },
				},
				{
					name: "pp",
					title: "PP",

					type: "number",
					options: { min: 0 },
				},
			],
		},

		//! ------------- RIGHT COLUMN -------------------

		{
			name: "personalityTraits",
			title: "Personality Traits",
			type: "text",
		},
		{
			name: "ideals",
			title: "Ideals",
			type: "text",
		},
		{
			name: "bonds",
			title: "Bonds",
			type: "text",
		},
		{
			name: "flaws",
			title: "Flaws",
			type: "text",
		},
		{
			name: "featuresAndTraits",
			title: "Features & Traits",
			type: "text",
		},

		{
			name: "id",
			title: "ID",
			type: "string",
		},
		// {
		// 	name: "player",
		// 	title: "Player",
		// 	type: "reference",
		// 	to: [{ type: "user" }],
		// },
	],
};
