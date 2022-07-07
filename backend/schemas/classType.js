export default {
	name: "classType",
	title: "Class",
	type: "document",
	fields: [
		{
			name: "name",
			title: "Name",
			type: "string",
		},
		{
			name: "classDetails",
			title: "Class Details",
			type: "text",
		},
		{
			name: "hitDie",
			title: "Hit Die",
			type: "number",
			options: { min: 1, max: 20, step: 1 },
		},
		{
			name: "proficiencies",
			title: "Proficiencies",
			type: "array",
			of: [{ type: "reference", to: [{ type: "proficiency" }] }],
		},
		{
			name: "savingThrows",
			title: "Saving Throws",
			type: "array",
			of: [{ type: "reference", to: [{ type: "savingThrows" }] }],
		},
		{
			name: "DnDBeyondLink",
			title: "DnDBeyond Link",
			type: "url",
		},
	],
};
